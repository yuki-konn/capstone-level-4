import expressApp, { json, urlencoded } from "express";
import cors from "cors";
import { root } from "./routes/root";
import { quote } from "./routes/quote";
import { authUser } from "./routes/authUser";
import serverless from "serverless-http";
import { create } from "./routes/create";
import { read } from "./routes/read";
import { update } from "./routes/update";
import { remove } from "./routes/remove";

const hostname = "localhost"; // Local domain
const port = 8000; // Common backend ports 8000, 9000, 3000
const path = "/"; // The path where server info will be rendered in a browser.

// Instantiate the Express.js object
const express = expressApp();

express.use(cors()); // Allows Cross Origin Resource Sharing (cors) with the server.
express.use(urlencoded()); // Allows data to be received from Postman through x-www-form-urlencoded.
express.use(json()); // Allows data to be received by axios through JSON parameters.

express.post(path, root);
express.get("/quote", quote); // FavQ quote API path
express.post("/authUser", authUser); // User Authentication path
express.get("/create", create); // Account Creation path
express.get("/read", read); // Read Account path
express.get("/update", update); // Update Account path
express.get("/remove", remove); // Delete Account path
// listen method runs the handler.
const isRunningLocally = process.env.mode === "development";
if (isRunningLocally) express.listen(port, hostname, handleListen);

function handleListen() {
  console.log(`Listening on http://${hostname}:${port}`);
  console.log(`Open a new terminal and run 'npm run build'`);
  console.log(`To debug, start this server in a JavaScript Debug Terminal`);
}

export const handler = serverless(express); // Convert Express app into a serverless app compatible with aws Lambda.
