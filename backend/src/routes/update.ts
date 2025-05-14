import { Request, Response } from "express";
import { Account } from "../modules/Account";
import { updateAccount } from "../modules/updateAccount";

export async function update(request: Request, response: Response) {
  const query = request.body;
  const updatedAccount = await updateAccount(query as Account);
  response.send(updatedAccount);
}
