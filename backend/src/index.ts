import express from "express";
import cors from "cors";
import { root } from "./routes/root";
import { api } from "./routes/api";

const hostname = "localhost"; // Local domain
const port = 8000; // Common backend ports 8000, 9000, 3000
const path = "/"; // The path where server info will be rendered in a browser.

// Instantiate the Express.js object
const app = express();
// Allows Cross Origin Resource Sharing (cors) with the server.
app.use(cors());
// get method assigns the handler to the path. The handler runs when the path is visited in the URL.
app.get("/", root);
app.get("/api", api);
// listen method runs the handler.
app.listen(port, hostname, handleListen);

function handleListen() {
  console.log(`Listening on http://${hostname}:${port}`);
  console.log(`Open a new terminal and run 'npm run build'`);
  console.log(`To debug, start this server in a JavaScript Debug Terminal`);
}
