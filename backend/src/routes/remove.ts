import { Request, Response } from "express";
import { deleteAccount } from "../modules/deleteAccount";
import { Account } from "../modules/Account";

export async function remove(request: Request, response: Response) {
  const query = request.query;
  const removeAccount = await deleteAccount(query as Account);
  response.send(removeAccount);
}
