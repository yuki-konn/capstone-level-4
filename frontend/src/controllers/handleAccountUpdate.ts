import { Account } from "../models/Account";
import { updateAccount } from "../modules/account/updateAccount";

export async function handleAccountUpdate(
  event: any
): Promise<Account | undefined> {
  event.preventDefault();

  const form = event.target;
  const inputs = event.target.elements;
  const closeButton = inputs.closeButton;

  const accountInfo: Account = {
    email: inputs.email.value,
    password: inputs.password.value,
    userName: inputs.userName.value,
    firstName: inputs.firstName.value,
    lastName: inputs.lastName.value,
    phone: inputs.phone.value,
  };

  const updatedAccount = await updateAccount(accountInfo);
  if (!updatedAccount) return undefined;

  closeButton.click();
  inputs.reset();

  return updatedAccount;
}
