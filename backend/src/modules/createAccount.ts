import { GetCommandInput, PutCommandInput } from "@aws-sdk/lib-dynamodb";
import { Account } from "../models/Account";
import { dynamoDBClient } from "./dynamoDBclient";
import { ErrorInfo } from "../models/ErrorInfo";

export async function createAccount(
  newAccount: Account
): Promise<ErrorInfo | Account> {
  // Checks if newAccount is undefined
  const isUndefined = newAccount === undefined;
  const undefinedError: ErrorInfo = {
    error: "undefinedError",
    message: "Account is undefined",
  };
  if (isUndefined) return undefinedError;
  // Checks if newAccount is an object
  const isObject = JSON.stringify(newAccount) === "{}";
  const objectError: ErrorInfo = {
    error: "objectError",
    message: "Account object has no properties",
  };
  if (isObject) return objectError;
  // Checks if input fields are empty
  const { email, password, userName, firstName, lastName, phone } = newAccount;
  const isAllEmpty =
    !email && !password && !userName && !firstName && !lastName && !phone;
  const allEmptyError: ErrorInfo = {
    error: "allEmptyError",
    message: "Input fields are all empty",
  };
  if (isAllEmpty) return allEmptyError;
  // Checks if email or password is empty
  const isEmailOrPasswordEmpty = !email || !password;
  const emailOrPasswordEmptyError: ErrorInfo = {
    error: "emailOrPasswordEmptyError",
    message: "Email or password is empty",
  };
  if (isEmailOrPasswordEmpty) return emailOrPasswordEmptyError;

  // ReadAccount
  const request: GetCommandInput = {
    TableName: "capstone_logins",
    Key: { email: email },
  };
  const readResponse = await dynamoDBClient.get(request);
  let account = readResponse.Item as Account;

  const doesAccountExist = account !== undefined;
  const accountExistsError: ErrorInfo = {
    error: "accountExistsError",
    message: "This email is already associated with an account",
  };
  if (doesAccountExist) return accountExistsError;
  else {
    const hasRequiredInputs = email && password && userName;
    if (hasRequiredInputs) {
      const request: PutCommandInput = {
        TableName: "capstone_logins",
        Item: newAccount,
      };
      const response = await dynamoDBClient.put(request);
      const isSuccessful = response.$metadata.httpStatusCode === 200;
      if (isSuccessful) {
        const account = newAccount;
        return account;
      }
    }
    console.warn("Error: Unable to create account");
  }
}
