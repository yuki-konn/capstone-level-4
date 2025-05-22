import {
  pipeline,
  PretrainedOptions,
  QuestionAnsweringOutput,
} from "@xenova/transformers";

const DEFAULT_MODEL = "Xenova/distilbert-base-cased-distilled-squad";

export async function getAnswer(
  userQuestion: string,
  userContext: string
): Promise<string | undefined> {
  const options: PretrainedOptions = { cache_dir: "ai-models" };
  const aiModel = await pipeline("question-answering", DEFAULT_MODEL, options);
  const response = await aiModel(userQuestion, userContext);

  let { answer, score } = response as QuestionAnsweringOutput;
  const isScoreLow = score < 0.15;
  if (isScoreLow) answer = undefined;
  return answer;
}
