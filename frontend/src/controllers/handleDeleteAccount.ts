import { Account } from "../models/Account";
import { deleteAccount } from "../modules/account/deleteAccount";

export async function handleDeleteAccount(event: any): Promise<string> {
  event.preventDefault();

  const targetEmail = event.target[0].value;
  const targetPassword = event.target[1].value;

  const newAccount: Account = {
    email: targetEmail,
    password: targetPassword,
    userName: "",
    firstName: "",
    lastName: "",
    phone: "",
  };

  const response = await deleteAccount(newAccount);
  return response;
}
