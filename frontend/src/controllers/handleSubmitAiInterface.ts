import { getAiAnswer } from "../modules/getAiAnswer";

export async function handleSubmitAiInterface(event: any) {
  const form = event.target.elements;
  const question = form.question.value;
  const context = form.context.value;

  const answer = await getAiAnswer(question, context);
  debugger;
  return answer;
}
