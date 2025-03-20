import { makeRequest } from "../../utils/makeRequest";
import { parseContactResponse } from "./parseContactResponse";

export function getServerFeedback() {
  // PROMISE
  const promise = makeRequest("https://myserver.com");
  // RESPONSE FROM SERVER
  let response = promise.then(parseContactResponse);
  return response;
}
