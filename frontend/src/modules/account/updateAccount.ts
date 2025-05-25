import axios from "axios";
import { Account } from "../../models/Account";
import { getRootPathAws } from "../../utils/getRootPathAws";

export async function updateAccount(
  newInfo: Account
): Promise<Account | undefined> {
  const isNotAccount = !newInfo;
  if (isNotAccount) return undefined;
  const isEmailOrPasswordUndefined = !newInfo.email || !newInfo.password;
  if (isEmailOrPasswordUndefined) return undefined;
  const isEmailObject =
    typeof newInfo.email === "object" || JSON.stringify(newInfo.email) === "{}";
  if (isEmailObject) return undefined;

  const rootpath = getRootPathAws();
  const route = "/update";
  const url = rootpath + route;

  const response = await axios.post(url, newInfo);
  const updatedAccount: Account = response.data;
  return updatedAccount;
}
