import axios from "axios";
import { Account } from "../../models/Account";

export async function readAccount(targetAccount: Account) {
  const { email, password } = targetAccount;

  const isEmailOrPasswordInvalid =
    typeof email === "object" ||
    typeof password === "object" ||
    typeof email === "undefined" ||
    typeof password === "undefined";
  if (isEmailOrPasswordInvalid) return "Provided email or password is invalid.";

  const query = `?email=${email}&password=${password}`;
  const domain = window.location.hostname;
  let rootpath: string = "http://localhost:8000";
  if (
    domain === "yuki-konn.github.io" ||
    domain === "d1ionyqc0g9xy7.cloudfront.net"
  )
    rootpath =
      "https://qyxgfxhby4ejikmfmdtzmkjnrq0yazfh.lambda-url.us-east-2.on.aws";
  const route = "/read";
  const url = rootpath + route + query;

  const response = await axios.get(url);
  const result = response.data;

  const isNotMatchingPassword =
    email === result.email && password !== result.password;
  if (isNotMatchingPassword) return "The provided password is incorrect.";

  return result;
}
