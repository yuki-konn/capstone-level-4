import { UpdateCommandInput } from "@aws-sdk/lib-dynamodb";
import { Account } from "./Account";
import { dynamoDBClient } from "./dynamoDBclient";

export async function updateAccount(account: Account): Promise<any> {
  const isNotAccount = !account;
  if (isNotAccount) return false;

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
  if (isEmailNotInList) return false;

  const isAttributeNotInList =
    !password || !userName || !firstName || !lastName || !phone;
  if (isAttributeNotInList) return false;

  const isEmailObject = typeof email === "object";
  if (isEmailObject) return false;

  const response = await dynamoDBClient().update(request);
  return response;
}
