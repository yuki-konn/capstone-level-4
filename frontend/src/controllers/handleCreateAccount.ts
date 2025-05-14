import { Account } from "../models/Account";
import { createAccount } from "../modules/account/createAccount";

export async function handleCreateAccount(event: any): Promise<string> {
  event.preventDefault();

  const targetEmail = event.target[1].value;
  const targetPassword = event.target[2].value;
  const targetUserName = event.target[3].value;
  const targetFirstName = event.target[4].value;
  const targetLastName = event.target[5].value;
  const targetPhone = event.target[6].value;

  const newAccount: Account = {
    email: targetEmail,
    password: targetPassword,
    userName: targetUserName,
    firstName: targetFirstName,
    lastName: targetLastName,
    phone: targetPhone,
  };

  const response = await createAccount(newAccount);
  return response;
}
