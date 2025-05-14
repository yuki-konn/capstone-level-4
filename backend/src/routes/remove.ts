import { Request, Response } from "express";
import { deleteAccount } from "../modules/deleteAccount";
import { Account } from "../models/Account";

export async function remove(request: Request, response: Response) {
  const query = request.body;
  const removeAccount = await deleteAccount(query as Account);
  response.send(removeAccount);
}
