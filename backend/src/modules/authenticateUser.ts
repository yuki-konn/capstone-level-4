import { dynamoDBClient } from "./dynamoDBclient";

export async function authenticateUser(email: string, password: string) {
  // DynamoDB REQUEST
  const request = {
    TableName: "capstone_logins",
    Key: { email: email },
  };

  // DynamoDB CLIENT AND RESPONSE
  const response = await dynamoDBClient.get(request);
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
