import axios from "axios";
import { Account } from "../../models/Account";
import { getRootPathAws } from "../../utils/getRootPathAws";

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

  const data = { email: email, password: password };
  const rootpath = getRootPathAws();
  const route = "/remove";
  const url = rootpath + route;

  const response = await axios.post(url, data);
  const result = response.data;
  return result;
}
