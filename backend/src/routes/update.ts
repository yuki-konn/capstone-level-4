import { Request, Response } from "express";
import { Account } from "../models/Account";
import { updateAccount } from "../modules/updateAccount";

export async function update(request: Request, response: Response) {
  const account: Account = request.body;
  const updatedAccount = await updateAccount(account);
  response.send(updatedAccount);
}
