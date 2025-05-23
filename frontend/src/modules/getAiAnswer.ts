import axios from "axios";
import { getRootPathAppEngine } from "../utils/getRootPathAppEngine";

export async function getAiAnswer(
  userQuestion: string,
  chatBoxContext: string
) {
  const data = { question: userQuestion, context: chatBoxContext };
  const rootpath = getRootPathAppEngine();
  const route = "/ai";
  const url = rootpath + route;
  const response = await axios.post(url, data);
  const answer = response.data;
  debugger;
  return answer;
}
