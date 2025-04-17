import { Request, Response } from "express";
import { readAccount } from "../modules/readAccount";
import { Account } from "../modules/Account";

export async function read(request: Request, response: Response) {
  //Query example: ?email=test3@email.com&password=test3&userName=undefined&firstName=undefined&lastName=undefined&phone=undefined
  const accountQuery = request.query;
  const account = await readAccount(accountQuery as Account);
  const isInvalidAccount = account === undefined;
  if (isInvalidAccount) response.send("Inputted information is incorrect.");
  response.send(account);
}
