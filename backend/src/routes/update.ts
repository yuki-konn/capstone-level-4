import { Request, Response } from "express";
import { Account } from "../modules/Account";
import { updateAccount } from "../modules/updateAccount";

export async function update(
  request: Request,
  response: Response
): Promise<any> {
  const query = request.query;
  const updatedAccount = await updateAccount(query as Account);

  const isNotUpdated = updatedAccount === false;
  if (isNotUpdated)
    response.send("Your account was unable to be updated. Please try again.");

  const isUpdated = updatedAccount.$metadata.httpStatusCode === 200;
  if (isUpdated) response.send("Your account has been updated.");
}
