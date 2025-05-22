import { parseResponse } from "./parseResponse";

export function getTrivia() {
  const url =
    "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple";
  // TODO: Change from promise to axios.post(url, data)
  const promise = fetch(url);
  promise.then(parseResponse);
}
