import { GetCommandInput, UpdateCommandInput } from "@aws-sdk/lib-dynamodb";
import { Account } from "./Account";
import { dynamoDBClient } from "./dynamoDBclient";

export async function updateAccount(targetAccount: Account): Promise<string> {
  const isNotAccount = !targetAccount;
  if (isNotAccount)
    return "Your account wasn't able to update because your account is undefined.";

  const isEmailNotInList = !targetAccount.email;
  if (isEmailNotInList)
    return "Your account wasn't able to update because your email is undefined.";

  const isEmailObject =
    typeof targetAccount.email === "object" ||
    JSON.stringify(targetAccount.email) === "{}";
  if (isEmailObject)
    return "Your account wasn't able to update because your email is invalid.";

  const readEmail = targetAccount.email;
  // Read Account
  const readRequest: GetCommandInput = {
    TableName: "capstone_logins",
    Key: { email: readEmail },
  };

  const readResponse = await dynamoDBClient().get(readRequest);
  let readAccount = readResponse.Item;

  const isNotInList = readAccount === undefined;
  if (isNotInList)
    return "Your account wasn't able to update because the email is not associated with any account.";

  const { email, password, userName, firstName, lastName, phone } = readAccount;

  const request: UpdateCommandInput = {
    TableName: "capstone_logins",
    Key: { email: email },
    AttributeUpdates: {
      password: { Value: password },
      userName: { Value: userName },
      firstName: { Value: firstName },
      lastName: { Value: lastName },
      phone: { Value: phone },
    },
  };

  const response = await dynamoDBClient().update(request);
  const isSuccessful = response.$metadata.httpStatusCode === 200;
  if (isSuccessful) return "Your account has been updated.";
}
