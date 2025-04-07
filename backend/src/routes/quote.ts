import { Request, Response } from "express";
import { getQuote } from "../modules/getQuote";

// ROUTE HANDLER
export async function quote(request: Request, response: Response) {
  const quote = await getQuote();
  response.send(quote);
}
