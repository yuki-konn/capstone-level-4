import { Account } from "../models/Account";
import { ErrorInfo } from "../models/ErrorInfo";
import { createAccount } from "../modules/account/createAccount";

export async function handleCreateAccount(
  event: any
): Promise<ErrorInfo | Account> {
  event.preventDefault();

  const form = event.target.elements;
  const inputs = event.target;

  const newAccount: Account = {
    email: form.email.value,
    password: form.password.value,
    userName: form.userName.value,
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    phone: form.phoneNumber.value,
  };

  const response = await createAccount(newAccount);
  inputs.reset();
  return response;
}
