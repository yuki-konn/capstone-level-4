import { DynamoDB } from "@aws-sdk/client-dynamodb";
import {
  accessKeyId,
  region,
  secretAccessKey,
} from "../../../.aws/credentials";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

export async function authenticationAws(email = "", password = "") {
  //DynamoDB CREDENTIALS
  const apiKey = {
    region: region,
    credentials: {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
    },
  };

  // DynamoDB CLIENTS
  const client = new DynamoDB(apiKey);
  const niceClient = DynamoDBDocument.from(client);

  // DynamoDB REQUEST
  const request = {
    TableName: "capstone_logins",
    Key: { email: email },
  };

  // RESPONSE
  const response = await niceClient.get(request);
  const matchingLogin = response.Item;

  if (matchingLogin !== undefined) {
    // ONLY AUTHENTICATES IF BOTH EMAIL AND PASSWORD IS CORRECT
    const matchingPassword = password === matchingLogin.password;
    const matchingEmail = email === matchingLogin.email;
    const isAuthenticated = matchingEmail && matchingPassword;
    //
    return isAuthenticated;
  }
  //DOESN'T AUTHENTICATE matchingLogin is UNDEFINED
  else {
    const isAuthenticated = false;
    return isAuthenticated;
  }

  // if (isAuthenticated === "{}") {
  //   debugger;
  //   const isNotAuthenticated = false;
  //   return isNotAuthenticated;
  // } else return isAuthenticated;

  // CHECKS IF INPUTTED PASSWORD MATCHES PASSWORD IN DATABASE.

  // if (matchingEmail && matchingPassword) {
  //   const isAuthenticated = true;
  //   return isAuthenticated;
  // } else {
  //   const isAuthenticated = false;
  //   return isAuthenticated;
  // }
}
