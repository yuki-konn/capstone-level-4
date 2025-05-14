import axios from "axios";
import { Account } from "../../models/Account";
import { getRootPathAws } from "../../utils/getRootPathAws";

export async function createAccount(targetAccount: Account) {
  const isQueryMissing = JSON.stringify(targetAccount) === "{}";
  if (isQueryMissing)
    return "Error: newAccount object has no properties. Unable to create account.";

  const { email, password, userName, firstName, lastName, phone } =
    targetAccount;
  const query = `?email=${email}&password=${password}&userName=${userName}&firstName=${firstName}&lastName=${lastName}&phone=${phone}`;
  const rootpath = getRootPathAws();
  const route = "/create";
  const url = rootpath + route + query;

  const response = await axios.get(url);
  const message = response.data;
  return message;
}
