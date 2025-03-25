import { parseResponse } from "../modules/parseResponse";

// API index.html
export function handleClickApi(event: any) {
  const url =
    "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple";
  const promise = fetch(url);
  promise.then(parseResponse);
}
