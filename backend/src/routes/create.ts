import { Request, Response } from "express";
import { createAccount } from "../modules/createAccount";
import { Account } from "../modules/Account";

export async function create(request: Request, response: Response) {
  const query = request.query;
  const newAcount = await createAccount(query as Account);
  response.send(newAcount);
}
