import axios from "axios";
import { getRootPathAppEngine } from "../utils/getRootPathAppEngine";

export async function getAiAnswer(
  userQuestion: string,
  context: string
): Promise<string> {
  const data = { question: userQuestion, context: context };
  const rootpath = getRootPathAppEngine();
  const route = "/ai";
  const url = rootpath + route;
  const response = await axios.post(url, data);
  let answer: string | "" = response.data;
  const isAnswerEmpty = answer === "";
  if (isAnswerEmpty) answer = "Sorry, I don't know";

  return answer;
}
