import {
  DeleteCommandInput,
  DeleteCommandOutput,
  GetCommandInput,
} from "@aws-sdk/lib-dynamodb";
import { dynamoDBClient } from "./dynamoDBclient";
import { Account } from "../models/Account";

export async function deleteAccount(account: Account): Promise<string> {
  const isAccountUndefined = account === undefined;
  if (isAccountUndefined)
    return "Your account was unable to be deleted because the account is undefined.";
  const { email, password } = account;

  const isEmpty = email === "" || email === undefined || !email;
  if (isEmpty)
    return "Your account was unable to be deleted because the email is empty or undefined.";

  const isObject = typeof email === "object";
  if (isObject)
    return "Your account was unable to be deleted because the email is an object.";

  // Read Account
  const readRequest: GetCommandInput = {
    TableName: "capstone_logins",
    Key: { email: email },
  };

  const readResponse = await dynamoDBClient.get(readRequest);
  let targetAccount = readResponse.Item;

  const isNotInList = targetAccount === undefined;
  if (isNotInList)
    return "Your account was unable to be deleted because the email is not associated with any account.";

  const targetPassword = targetAccount.password;
  const isPasswordIncorrect = password !== targetPassword;
  if (isPasswordIncorrect)
    return "Your account was unable to be deleted because the password is incorrect.";

  // Delete Account
  const targetEmail = targetAccount.email;

  const request: DeleteCommandInput = {
    TableName: "capstone_logins",
    Key: { email: targetEmail },
  };

  const response: DeleteCommandOutput = await dynamoDBClient.delete(request);

  const isSuccessful = response.$metadata.httpStatusCode === 200;
  if (isSuccessful) return "Your account has been deleted.";
}
