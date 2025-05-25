import { GetCommandInput, UpdateCommandInput } from "@aws-sdk/lib-dynamodb";
import { Account } from "../models/Account";
import { dynamoDBClient } from "./dynamoDBclient";

export async function updateAccount(
  accountInfo: Account
): Promise<Account | undefined> {
  const isNotAccount = !accountInfo;
  if (isNotAccount) return (accountInfo = undefined);
  const isEmailNotInList = !accountInfo.email;
  if (isEmailNotInList) return (accountInfo = undefined);
  const isEmailObject =
    typeof accountInfo.email === "object" ||
    JSON.stringify(accountInfo.email) === "{}";
  if (isEmailObject) return (accountInfo = undefined);

  const readRequest: GetCommandInput = {
    TableName: "capstone_logins",
    Key: { email: accountInfo.email },
  };
  const readResponse = await dynamoDBClient.get(readRequest);
  let readAccount = readResponse.Item;

  const isNotInList = readAccount === undefined;
  if (isNotInList) return (accountInfo = undefined);
  const isWrongPassword = accountInfo.password !== readAccount.password;
  if (isWrongPassword) return (accountInfo = undefined);

  const request: UpdateCommandInput = {
    TableName: "capstone_logins",
    Key: { email: accountInfo.email },
    AttributeUpdates: {
      userName: { Value: accountInfo.userName },
      firstName: { Value: accountInfo.firstName },
      lastName: { Value: accountInfo.lastName },
      phone: { Value: accountInfo.phone },
    },
  };
  const response = await dynamoDBClient.update(request);

  const isFailed = response.$metadata.httpStatusCode !== 200;
  if (isFailed) return (accountInfo = undefined);

  return accountInfo;
}
