import { Account } from "../models/Account";
import { updateAccount } from "../modules/account/updateAccount";

export async function handleAccountUpdate(
  event: any
): Promise<Account | undefined> {
  event.preventDefault();

  const form = event.target;
  const inputs = event.target.elements;
  const closeButton = inputs.closeButton;

  const userName = inputs.userName.value;
  const firstName = inputs.firstName.value;
  const lastName = inputs.lastName.value;
  const phone = inputs.phone.value;

  const account = await updateAccount(userName, firstName, lastName, phone);
  if (!account) return undefined;

  closeButton.click();
  inputs.reset();

  return account;
}
