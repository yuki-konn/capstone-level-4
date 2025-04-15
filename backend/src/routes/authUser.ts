import { Request, Response } from "express";
import { authenticateUser } from "../modules/authenticateUser";

// ROUTE HANDLER
export async function authUser(request: Request, response: Response) {
  const email = request.query.email;
  const password = request.query.password;

  // USED TEMPLATE STRINGS TO CONVERT TO STRING.
  // BECAUSE I DON'T WANT THE QUOTATION MARKS FROM JSON.STRINGIFY
  const isAuthenticated: boolean = await authenticateUser(
    `${email}`,
    `${password}`
  );
  response.send(isAuthenticated);
}
