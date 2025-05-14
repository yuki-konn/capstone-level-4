import axios from "axios";
import { Account } from "../../models/Account";
import { getRootPathAws } from "../../utils/getRootPathAws";

export async function createAccount(targetAccount: Account): Promise<string> {
  const isQueryMissing = JSON.stringify(targetAccount) === "{}";
  if (isQueryMissing)
    return "Error: newAccount object has no properties. Unable to create account.";

  const rootpath = getRootPathAws();
  const route = "/create";
  const url = rootpath + route;

  const response = await axios.post(url, targetAccount);
  const message: string = response.data;
  return message;
}
