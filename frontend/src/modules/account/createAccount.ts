import axios from "axios";
import { Account } from "../../models/Account";

export async function createAccount(targetAccount: Account) {
  const isQueryMissing = JSON.stringify(targetAccount) === "{}";
  if (isQueryMissing)
    return "Error: newAccount object has no properties. Unable to create account.";

  const { email, password, userName, firstName, lastName, phone } =
    targetAccount;
  const query = `?email=${email}&password=${password}&userName=${userName}&firstName=${firstName}&lastName=${lastName}&phone=${phone}`;
  const domain = window.location.hostname;
  let rootpath: string = "http://localhost:8000";
  if (
    domain === "yuki-konn.github.io" ||
    domain === "d1ionyqc0g9xy7.cloudfront.net"
  )
    rootpath =
      "https://qyxgfxhby4ejikmfmdtzmkjnrq0yazfh.lambda-url.us-east-2.on.aws";
  const route = "/create";
  const url = rootpath + route + query;

  const response = await axios.get(url);
  const message = response.data;
  return message;
}
