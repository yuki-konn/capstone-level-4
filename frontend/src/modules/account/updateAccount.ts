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

  const isAttributeNotInList =
    !password || !userName || !firstName || !lastName || !phone;
  if (isAttributeNotInList)
    return "Your account wasn't able to update because the changes made are invalid.";

  const isEmailObject =
    typeof email === "object" || JSON.stringify(email) === "{}";
  if (isEmailObject)
    return "Your account wasn't able to update because your email is invalid.";

  const query = `?email=${email}&password=${password}&userName=${userName}&firstName=${firstName}&lastName=${lastName}&phone=${phone}`;
  const rootpath = "http://localhost:8000";
  const route = "/update";
  const url = rootpath + route + query;
  const response = await axios.get(url);
  const result = response.data;
  return result;
}
