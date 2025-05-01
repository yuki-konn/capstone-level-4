import { UpdateCommandInput } from "@aws-sdk/lib-dynamodb";
import { Account } from "./Account";
import { dynamoDBClient } from "./dynamoDBclient";

export async function updateAccount(account: Account): Promise<string> {
  const isNotAccount = !account;
  if (isNotAccount)
    return "Your account wasn't able to update because your account is undefined.";

  const { email, password, userName, firstName, lastName, phone } = account;

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

  const isEmailNotInList = !email;
  if (isEmailNotInList)
    return "Your account wasn't able to update because your email is undefined.";

  const isAttributeNotInList =
    !password || !userName || !firstName || !lastName || !phone;
  if (isAttributeNotInList)
    return "Your account wasn't able to update because the changes made are invalid.";

  const isEmailObject = typeof email === "object";
  if (isEmailObject)
    return "Your account wasn't able to update because your email is invalid.";

  const response = await dynamoDBClient().update(request);
  const isSuccessful = response.$metadata.httpStatusCode === 200;
  if (isSuccessful) return "Your account has been updated.";
}
