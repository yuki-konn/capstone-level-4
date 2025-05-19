import axios from "axios";
import { Account } from "../../models/Account";
import { getRootPathAws } from "../../utils/getRootPathAws";
import { ErrorInfo } from "../../models/ErrorInfo";

export async function createAccount(
  targetAccount: Account
): Promise<ErrorInfo | Account> {
  const rootpath = getRootPathAws();
  const route = "/create";
  const url = rootpath + route;

  const response = await axios.post(url, targetAccount);
  const message: ErrorInfo | Account = response.data;
  return message;
}
