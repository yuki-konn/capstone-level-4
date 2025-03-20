import { getServerResponse } from "../modules/Contact/getServerResponse.js";

// PROMISE contact.html
export function makeRequest(url = "") {
  // CREATES NEW PROMISE
  // PROMISE IS NOT SYNCRONOUS
  return new Promise(getServerResponse);
}
