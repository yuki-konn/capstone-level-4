import { Request, Response } from "express";

export async function postDemo(request: Request, response: Response) {
  const data = {
    origin: request.headers.origin,
    query: request.query,
    body: request.body,
  };
  response.send(data);
}
