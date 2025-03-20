// SERVER RESPONSE contact.html
export function getServerResponse(resolve) {
  // DOES activateResolve FUNCTION AFTER 5 SECONDS
  setTimeout(activateResolve, 5000);
  function activateResolve() {
    const response = {
      message: "SUCCESSFULLY PROCESSED",
    };
    // Server stringifies a object and replies with a string.
    // STRINGIFIES A THE response OBJECT
    const resolveValue = JSON.stringify(response);
    // FULLFILLS PROMISE
    resolve(resolveValue);
  }
}
