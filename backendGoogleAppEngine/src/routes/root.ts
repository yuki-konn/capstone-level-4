import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

export function root(request: Request, response: Response) {
  const { url } = request;
  const context = `<div><h1>Google App Engine Demo</h1><p>Response from Google App Engine.</p><span>Your path is ${url}.</span><br/><h5>mode = ${process.env.mode}</h5></div>`;
  response.send(context);
}
