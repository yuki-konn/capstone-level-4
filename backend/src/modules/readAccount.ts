import { GetCommandInput } from "@aws-sdk/lib-dynamodb";
import { Account } from "../models/Account";
import { dynamoDBClient } from "./dynamoDBclient";

export async function readAccount(
  targetEmail: string,
  targetPassword: string
): Promise<Account | string> {
  const isObject =
    typeof targetEmail === "object" || typeof targetPassword === "object";
  if (isObject) return "Provided email or password is invalid.";

  const isUndefined = targetEmail === undefined || targetPassword === undefined;
  if (isUndefined) return "Provided email or password is invalid.";

  const request: GetCommandInput = {
    TableName: "capstone_logins",
    Key: { email: targetEmail },
  };

  const response = await dynamoDBClient.get(request);

  let account = response.Item as Account;

  const isNotInList = account === undefined;
  if (isNotInList) return "This email is not associated with any account.";

  const isPasswordIncorrect =
    account.email === targetEmail && account.password !== targetPassword;
  if (isPasswordIncorrect) return "Provided password is inccorect.";

  return account;
}
