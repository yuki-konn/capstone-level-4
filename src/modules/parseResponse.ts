import { viewResponse } from "./viewResponse";

// index.html
export function parseResponse(fetchObject) {
  const promise = fetchObject.text();
  promise.then(viewResponse);
}
