import { Request, Response } from "express";

export function root(request: Request, response: Response) {
  const { url } = request;
  const domain = window.location.hostname;
  let rootpath: string = "http://localhost:8000";
  // Determines if local or GitHub Pages
  if (domain === "yuki-konn.github.io")
    rootpath =
      "https://qyxgfxhby4ejikmfmdtzmkjnrq0yazfh.lambda-url.us-east-2.on.aws";
  response.send(`Backend Response: Response from ${rootpath}${url}`);
}
