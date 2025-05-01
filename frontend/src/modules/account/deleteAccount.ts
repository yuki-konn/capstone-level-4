import axios from "axios";
import { Account } from "./Account";

export async function deleteAccount(targetAccount: Account): Promise<string> {
  const isNotAccount = !targetAccount;
  if (isNotAccount)
    return "Your account was unable to be deleted because the account is undefined.";

  const { email, password } = targetAccount;

  const isEmailEmpty = !email;
  if (isEmailEmpty)
    return "Your account was unable to be deleted because the email is empty or undefined.";

  const isEmailObject =
    typeof email === "object" || JSON.stringify(email) === "{}";
  if (isEmailObject)
    return "Your account was unable to be deleted because the email is an object.";

  const query = `?email=${email}&password=${password}`;
  const domain = window.location.hostname;
  let rootpath: string = "http://localhost:8000";
  if (domain === "yuki-konn.github.io")
    rootpath =
      "https://qyxgfxhby4ejikmfmdtzmkjnrq0yazfh.lambda-url.us-east-2.on.aws";
  const route = "/remove";
  const url = rootpath + route + query;

  const response = await axios.get(url);
  const result = response.data;
  return result;
}
