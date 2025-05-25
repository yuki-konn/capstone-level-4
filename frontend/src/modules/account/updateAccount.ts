import axios from "axios";
import { Account } from "../../models/Account";
import { getRootPathAws } from "../../utils/getRootPathAws";

export async function updateAccount(
  newInfo: Account
): Promise<Account | undefined> {
  // const isNotAccount = !targetAccount;
  // if (isNotAccount)
  //   return "Your account wasn't able to update because your account is undefined.";

  // const { email } = targetAccount;

  // const isEmailUndefined = !email;
  // if (isEmailUndefined)
  //   return "Your account wasn't able to update because your email is undefined.";

  // const isEmailObject =
  //   typeof email === "object" || JSON.stringify(email) === "{}";
  // if (isEmailObject)
  //   return "Your account wasn't able to update because your email is invalid.";

  const rootpath = getRootPathAws();
  const route = "/update";
  const url = rootpath + route;

  const response = await axios.post(url, newInfo);
  const updatedAccount: Account = response.data;
  return updatedAccount;
}
