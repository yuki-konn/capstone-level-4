import { Account } from "../models/Account";
import { readAccount } from "../modules/account/readAccount";

export async function handleReadAccount(event: any): Promise<Account | string> {
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

  const response = await readAccount(newAccount);
  return response;
}
