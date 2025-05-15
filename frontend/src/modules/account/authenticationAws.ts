import axios from "axios";
import { getRootPathAws } from "../../utils/getRootPathAws";
import { Account } from "../../models/Account";

export async function authenticationAws(
  userEmail: string,
  userPassword: string
): Promise<Account | undefined> {
  const rootpath = getRootPathAws();
  const route = "/read";
  const url = rootpath + route;
  const data = { email: userEmail, password: userPassword };

  const response = await axios.post(url, data);
  const account = response.data;
  const isError = typeof account === "string";
  if (isError) return undefined;
  return account;
}
