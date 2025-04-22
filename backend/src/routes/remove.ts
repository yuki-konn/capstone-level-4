import { Request, Response } from "express";
import { deleteAccount } from "../modules/deleteAccount";
import { Account } from "../modules/Account";

export async function remove(request: Request, response: Response) {
  const query = request.query;
  const deletedAccount = await deleteAccount(query as Account);
  const isSuccessful = deletedAccount === true;

  if (isSuccessful) response.send("Your account has been deleted.");
  if (!isSuccessful)
    response.send("Your account was unable to be deleted. Please try again.");
}
