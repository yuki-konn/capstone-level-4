// PARSE RESPONSE FOR contact.js
export function parseContactResponse(resolveValue: string) {
  const response = JSON.parse(resolveValue);
  const message = response.message;
  return message;
}
