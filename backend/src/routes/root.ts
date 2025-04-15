import { Request, Response } from "express";

export function root(request: Request, response: Response) {
  const { url } = request;
  response.send(`Backend Response: Response from http://localhost:8000${url}`);
}
