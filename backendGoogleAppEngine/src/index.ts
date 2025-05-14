import expressApp, { json, urlencoded } from "express";
import cors from "cors";
import { root } from "./routes/root";
import dotenv from "dotenv";
import { getDemo } from "./routes/getDemo";
import { postDemo } from "./routes/postDemo";

dotenv.config();

const hostname = "localhost"; // Local domain
const port: any = process.env.PORT; // Common backend ports 8000, 9000, 3000
const rootpath = "/"; // The path where server info will be rendered in a browser.

// Instantiate the Express.js object
const express = expressApp();
express.use(cors()); // Allows Cross Origin Resource Sharing (cors) with the server.
express.use(urlencoded()); // Allows data to be received from Postman through x-www-form-urlencoded.
express.use(json()); // Allows data to be received by axios through JSON parameters.
// get method assigns the handler to the path. The handler runs when the path is visited in the URL.
express.get(rootpath, root);
express.get("/getDemo", getDemo);
express.post("/postDemo", postDemo);
// listen method runs the handler.
express.listen(port, hostname, handleListen);

function handleListen() {
  console.log(`Listening on http://${hostname}:${port}`);
  console.log(`Open a new terminal and run 'npm run start2 to run webpack.'`);
  console.log(`To debug, start this server in a JavaScript Debug Terminal`);
}
