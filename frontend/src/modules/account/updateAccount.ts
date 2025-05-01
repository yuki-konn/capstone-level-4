import axios from "axios";
import { Account } from "./Account";

export async function updateAccount(targetAccount: Account): Promise<string> {
  const isNotAccount = !targetAccount;
  if (isNotAccount)
    return "Your account wasn't able to update because your account is undefined.";

  const { email, password, userName, firstName, lastName, phone } =
    targetAccount;

  const isEmailUndefined = !email;
  if (isEmailUndefined)
    return "Your account wasn't able to update because your email is undefined.";

  const isEmailObject =
    typeof email === "object" || JSON.stringify(email) === "{}";
  if (isEmailObject)
    return "Your account wasn't able to update because your email is invalid.";

  const query = `?email=${email}&password=${password}&userName=${userName}&firstName=${firstName}&lastName=${lastName}&phone=${phone}`;
  const domain = window.location.hostname;
  let rootpath: string = "http://localhost:8000";
  if (domain === "yuki-konn.github.io")
    rootpath =
      "https://qyxgfxhby4ejikmfmdtzmkjnrq0yazfh.lambda-url.us-east-2.on.aws";
  const route = "/update";
  const url = rootpath + route + query;

  const response = await axios.get(url);
  const result = response.data;
  return result;
}
