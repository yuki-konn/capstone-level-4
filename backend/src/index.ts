import expressApp from "express";
import cors from "cors";
import { root } from "./routes/root";
import { quote } from "./routes/quote";
import { authUser } from "./routes/authUser";
import serverless from "serverless-http";
import { create } from "./routes/create";

const hostname = "localhost"; // Local domain
const port = 8000; // Common backend ports 8000, 9000, 3000
const path = "/"; // The path where server info will be rendered in a browser.

// Instantiate the Express.js object
const express = expressApp();
// Allows Cross Origin Resource Sharing (cors) with the server.
express.use(cors());
// get method assigns the handler to the path. The handler runs when the path is visited in the URL.
express.get(path, root);
express.get("/quote", quote); // FavQ quote API path
express.get("/authUser", authUser); // User Authentication path
express.get("/create", create); // Account Creation path
// listen method runs the handler.
const isRunningLocally = process.env.mode === "development";
if (isRunningLocally) express.listen(port, hostname, handleListen);

function handleListen() {
  console.log(`Listening on http://${hostname}:${port}`);
  console.log(`Open a new terminal and run 'npm run build'`);
  console.log(`To debug, start this server in a JavaScript Debug Terminal`);
}

export const handler = serverless(express); // Convert Express app into a serverless app compatible with aws Lambda.
