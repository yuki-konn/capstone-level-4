import { GetCommandInput, PutCommandInput } from "@aws-sdk/lib-dynamodb";
import { Account } from "../models/Account";
import { dynamoDBClient } from "./dynamoDBclient";

export async function createAccount(
  newAccount: Account
): Promise<string | undefined> {
  // Checks if newAccount is undefined
  const isUndefined = newAccount === undefined;
  if (isUndefined) return undefined;
  // Checks if newAccount is an object
  const isObject = JSON.stringify(newAccount) === "{}";
  if (isObject) return undefined;
  // Checks if input fields are empty
  const { email, password, userName, firstName, lastName, phone } = newAccount;
  const isAllEmpty =
    !email && !password && !userName && !firstName && !lastName && !phone;
  if (isAllEmpty) return undefined;
  // Checks if email or password is empty
  const isEmailOrPasswordEmpty = !email || !password;
  if (isEmailOrPasswordEmpty) return undefined;

  // ReadAccount
  const request: GetCommandInput = {
    TableName: "capstone_logins",
    Key: { email: email },
  };
  const readResponse = await dynamoDBClient.get(request);
  let account = readResponse.Item as Account;

  const doesAccountExist = account !== undefined;
  if (doesAccountExist) return undefined;
  else {
    const hasRequiredInputs = email && password && userName;
    if (hasRequiredInputs) {
      const request: PutCommandInput = {
        TableName: "capstone_logins",
        Item: newAccount,
      };
      const response = await dynamoDBClient.put(request);
      const isSuccessful = response.$metadata.httpStatusCode === 200;
      if (isSuccessful) return "Your account has been successfully created.";
    }
    console.warn("Error: Unable to create account");
  }
}
