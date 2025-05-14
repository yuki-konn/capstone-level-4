import { Request, Response } from "express";

export function getDemo(request: Request, response: Response) {
  const data = { origin: request.headers.origin, query: request.query };
  response.send(data);
}
