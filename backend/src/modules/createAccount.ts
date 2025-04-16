import { PutCommandInput } from "@aws-sdk/lib-dynamodb";
import { Account } from "./Account";
import { dynamoDBClient } from "./dynamoDBclient";

export async function createAccount(newAccount: Account): Promise<any> {
  const isUndefined = newAccount === undefined;
  if (isUndefined)
    return console.error(
      "Error: newAccount is undefined. Unable to create account."
    );
  const { email, password, userName, firstName, lastName, phone } = newAccount;
  const isAllEmpty =
    email === "" &&
    password === "" &&
    userName === "" &&
    firstName === "" &&
    lastName === "" &&
    phone === "";
  const isEmailOrPasswordEmpty = email === "" || password === "";
  const hasRequiredInputs = email !== "" && password !== "" && userName !== "";
  const isNotObject = JSON.stringify(newAccount) === "{}";

  if (isAllEmpty)
    return console.error(
      "Error: All input fields are empty. Unable to create account."
    );

  if (isEmailOrPasswordEmpty)
    return console.error(
      "Error: The email or password field is empty. Unable to create account."
    );

  if (isNotObject)
    return console.error(
      "Error: newAccount object has no properties. Unable to create account."
    );

  if (hasRequiredInputs) {
    const request: PutCommandInput = {
      TableName: "capstone_logins",
      Item: newAccount,
    };
    const response = await dynamoDBClient().put(request);
    return response;
  }
  console.log("Error: Unable to create account");
}
