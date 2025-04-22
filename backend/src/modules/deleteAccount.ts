import {
  DeleteCommandInput,
  DeleteCommandOutput,
  GetCommandInput,
} from "@aws-sdk/lib-dynamodb";
import { dynamoDBClient } from "./dynamoDBclient";
import { Account } from "./Account";

export async function deleteAccount(account: Account): Promise<boolean> {
  const { email } = account;

  const isEmpty = email === "" || email === undefined;
  if (isEmpty) return false;
  const isObject = typeof email === "object";
  if (isObject) return false;

  // Read Account
  const readRequest: GetCommandInput = {
    TableName: "capstone_logins",
    Key: { email: email },
  };

  const readResponse = await dynamoDBClient().get(readRequest);
  let targetAccount = readResponse.Item;

  const isNotInList = targetAccount === undefined;
  if (isNotInList) return false;

  // Delete Account
  const targetEmail = targetAccount.email;

  const request: DeleteCommandInput = {
    TableName: "capstone_logins",
    Key: { email: targetEmail },
  };

  const response: DeleteCommandOutput = await dynamoDBClient().delete(request);

  const isSuccessful = response.$metadata.httpStatusCode === 200;
  if (isSuccessful) return true;
}
