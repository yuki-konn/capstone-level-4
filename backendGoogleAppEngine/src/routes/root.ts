import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

export function root(request: Request, response: Response) {
  const { url } = request;
  const data = {
    header: "Google App Engine Demo",
    context: "Response from Google App Engine Server.",
    url: url,
    mode: process.env.mode,
  };
  response.send(data);
}
