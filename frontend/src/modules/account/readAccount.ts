import axios from "axios";
import { Account } from "../../models/Account";
import { getRootPathAws } from "../../utils/getRootPathAws";

export async function readAccount(targetAccount: Account) {
  const { email, password } = targetAccount;

  const isEmailOrPasswordInvalid =
    typeof email === "object" ||
    typeof password === "object" ||
    typeof email === "undefined" ||
    typeof password === "undefined";
  if (isEmailOrPasswordInvalid) return "Provided email or password is invalid.";

  // TRIED NEW WAY OF SENDING DATA WITH POST METHOD.
  const data = { email: email, password: password };
  const rootpath = getRootPathAws();
  const route = "/read";
  const url = rootpath + route;

  const response = await axios.post(url, data);
  const result = response.data;

  const isNotMatchingPassword =
    email === result.email && password !== result.password;
  if (isNotMatchingPassword) return "The provided password is incorrect.";

  return result;
}
