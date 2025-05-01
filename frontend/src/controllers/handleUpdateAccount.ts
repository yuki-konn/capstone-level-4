import { Account } from "../modules/account/Account";
import { updateAccount } from "../modules/account/updateAccount";

export async function handleUpdateAccount(event: any): Promise<string> {
  event.preventDefault();

  const targetEmail = event.target[0].value;
  const targetPassword = event.target[1].value;
  const targetUserName = event.target[2].value;
  const targetFirstName = event.target[3].value;
  const targetLastName = event.target[4].value;
  const targetPhone = event.target[5].value;

  const targetUpdate: Account = {
    email: targetEmail,
    password: targetPassword,
    userName: targetUserName,
    firstName: targetFirstName,
    lastName: targetLastName,
    phone: targetPhone,
  };
  debugger;

  const response = await updateAccount(targetUpdate);
  return response;
}

// NOTE TO SELF:
// Prevent account creation when email is not associated with an existing account.
// - Might need to make seperate readAccount function without a password required in backend to do it.
// - Put the seperate readAccount function before the updateAccount function.
