import axios from "axios";
import { Account } from "../../models/Account";
import { getRootPathAws } from "../../utils/getRootPathAws";

export async function readAccount(
  targetEmail: string,
  targetPassword: string
): Promise<Account | string> {
  const isEmailOrPasswordInvalid =
    typeof targetEmail === "object" ||
    typeof targetPassword === "object" ||
    typeof targetEmail === "undefined" ||
    typeof targetPassword === "undefined";
  if (isEmailOrPasswordInvalid) return "Provided email or password is invalid.";

  // TRIED NEW WAY OF SENDING DATA WITH POST METHOD.
  const data = { email: targetEmail, password: targetPassword };
  const rootpath = getRootPathAws();
  const route = "/read";
  const url = rootpath + route;

  const response = await axios.post(url, data);
  const result = response.data;

  const isNotMatchingPassword =
    targetEmail === result.email && targetPassword !== result.password;
  if (isNotMatchingPassword) return "The provided password is incorrect.";

  return result;
}
