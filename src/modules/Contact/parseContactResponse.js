// PARSE RESPONSE FOR contact.js
export function parseContactResponse(resolveValue) {
  const response = JSON.parse(resolveValue);
  const message = response.message;
  return message;
}
