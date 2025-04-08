import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { accessKeyId, region, secretAccessKey } from "../../.aws/credentials";
// import dotenv from "dotenv";
// dotenv.config();

export async function authenticateUser(email: string, password: string) {
  // Credentials
  const apiKey = {
    region: region as string,
    credentials: {
      accessKeyId: accessKeyId as string,
      secretAccessKey: secretAccessKey as string,
    },
  };

  // DynamoDB Client
  const client = new DynamoDB(apiKey);
  const niceClient = DynamoDBDocument.from(client);

  // DynamoDB REQUEST
  const request = {
    TableName: "capstone_logins",
    Key: { email: email },
  };

  // DynamoDB RESPONSE
  const response = await niceClient.get(request);
  const matchingLogin = response.Item;

  //DOESN'T AUTHENTICATE matchingLogin is UNDEFINED
  if (matchingLogin === undefined) {
    const isAuthenticated = false;
    return isAuthenticated;
  }
  // ONLY AUTHENTICATES IF BOTH EMAIL AND PASSWORD IS CORRECT
  const matchingPassword = password === matchingLogin.password;
  const matchingEmail = email === matchingLogin.email;
  const isAuthenticated = matchingEmail && matchingPassword;
  //
  return isAuthenticated;
}
