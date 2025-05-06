import { PutCommandInput } from "@aws-sdk/lib-dynamodb";
import { Account } from "./Account";
import { dynamoDBClient } from "./dynamoDBclient";

export async function createAccount(newAccount: Account): Promise<string> {
  const isUndefined = newAccount === undefined;
  if (isUndefined)
    return "Error: newAccount is undefined. Unable to create account.";
  const { email, password, userName, firstName, lastName, phone } = newAccount;
  const isAllEmpty =
    email === "" &&
    password === "" &&
    userName === "" &&
    firstName === "" &&
    lastName === "" &&
    phone === "";

  if (isAllEmpty)
    return "Error: All input fields are empty. Unable to create account.";

  const isEmailOrPasswordEmpty = email === "" || password === "";
  if (isEmailOrPasswordEmpty)
    return "Error: The email or password field is empty. Unable to create account.";

  const isNotObject = JSON.stringify(newAccount) === "{}";
  if (isNotObject)
    return "Error: newAccount object has no properties. Unable to create account.";

  const hasRequiredInputs = email !== "" && password !== "" && userName !== "";
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
