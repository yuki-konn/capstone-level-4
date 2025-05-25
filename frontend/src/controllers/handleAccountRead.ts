import { Account } from "../models/Account";
import { readAccount } from "../modules/account/readAccount";

export async function handleAccountRead(event: any): Promise<Account | string> {
  event.preventDefault();

  const form = event.target.elements;
  const email = form.readEmail.value;
  const password = form.readPassword.value;

  const response = await readAccount(email, password);
  return response;
}
