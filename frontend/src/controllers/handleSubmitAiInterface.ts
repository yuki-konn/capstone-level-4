import { aiContext } from "../modules/aiContext";
import { getAiAnswer } from "../modules/getAiAnswer";

export async function handleSubmitAiInterface(event: any) {
  event.preventDefault();
  const inputs = event.target;
  const form = event.target.elements;
  const question = form.question.value;
  const context = aiContext;

  const answer = await getAiAnswer(question, context);
  inputs.reset();
  return answer;
}
