import { parseResponse } from "../modules/parseResponse.js";

// API index.html
export function handleClickApi(event = new Event()) {
  const url =
    "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple";
  const promise = fetch(url);
  promise.then(parseResponse);
}
