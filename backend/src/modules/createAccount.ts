import { PutCommandInput } from "@aws-sdk/lib-dynamodb";
import { Account } from "./Account";
import { dynamoDBClient } from "./dynamoDBclient";

export async function createAccount(newAccount: Account) {
  const request: PutCommandInput = {
    TableName: "capstone_logins",
    Item: newAccount,
  };
  const response = await dynamoDBClient().put(request);
  return response;
}
