import { output } from "../../utils/output";

// PARSE RESPONSE FOR PHONE APPOINTMENT FORM contact.html
export function parsePhoneResponse(resolveValue) {
  const response = JSON.parse(resolveValue);
  const message = response.message;
  output(message, "phoneOutputTag");
}
