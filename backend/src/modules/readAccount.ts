import { GetCommandInput } from "@aws-sdk/lib-dynamodb";
import { Account } from "./Account";
import { dynamoDBClient } from "./dynamoDBclient";

export async function readAccount(
  targetAccount: Account
): Promise<Account | undefined> {
  const { email, password } = targetAccount;
  const targetEmail = email;

  const isObject = typeof email === "object" || typeof password === "object";
  if (isObject) return undefined;

  const isUndefined = email === undefined || password === undefined;
  if (isUndefined) return undefined;

  const request: GetCommandInput = {
    TableName: "capstone_logins",
    Key: { email: targetEmail },
  };

  const response = await dynamoDBClient().get(request);
  let account = response.Item as Account;

  return account;
}
