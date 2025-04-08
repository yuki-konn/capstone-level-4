import { Request, Response } from "express";
import { authenticateUser } from "../modules/authenticateUser";

// ROUTE HANDLER
export async function authUser(request: Request, response: Response) {
  debugger;
  // WIP
  const email = "inputted email from handleSignIn";
  const password = "inputted password from handleSignIn";
  const isAuthenticated = await authenticateUser(email, password);
  response.send(isAuthenticated);
}
