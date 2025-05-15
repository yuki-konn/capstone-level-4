import { Request, Response } from "express";
import { readAccount } from "../modules/readAccount";

export async function read(request: Request, response: Response) {
  const email: string = request.body.email;
  const password: string = request.body.password;
  const account = await readAccount(email, password);
  response.send(account);
}
