import { authenticationAws } from "../modules/account/authenticationAws";
import { Account } from "../models/Account";

// FOR BACKEND AWS DYNAMODB
export async function handleSignIn(event: any): Promise<Account | undefined> {
  event.preventDefault();

  const form = event.target.elements;
  const email = form.email.value;
  const password = form.password.value;
  const closeButton = form.closeButton;
  const inputs = event.target;

  const account = await authenticationAws(email, password);
  const isAuthenticated = account !== undefined;

  if (isAuthenticated) {
    closeButton.click(); // Closes Modal
    inputs.reset(); // RESET FORM
  }
  return account;
}
