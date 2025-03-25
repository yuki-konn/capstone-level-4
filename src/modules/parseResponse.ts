import { viewResponse } from "./viewResponse";

// index.html
export function parseResponse(fetchObject: { text: any }) {
  const promise = fetchObject.text();
  promise.then(viewResponse);
}
