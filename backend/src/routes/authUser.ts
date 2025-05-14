import { Request, Response } from "express";
import { authenticateUser } from "../modules/authenticateUser";

// ROUTE HANDLER
export async function authUser(request: Request, response: Response) {
  const email = request.body.email;
  const password = request.body.password;
  const isAuthenticated: boolean = await authenticateUser(email, password);
  response.send(isAuthenticated);
}
