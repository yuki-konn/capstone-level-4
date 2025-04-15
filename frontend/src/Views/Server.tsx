import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Server.scss";
import { Quote } from "./Quote";

export function Server() {
  const [serverResponse, setServerResponse] = useState("");
  useEffect(componentDidMount, []);
  return (
    <main>
      <br />
      <section>
        <h1>Server</h1>
        {serverResponse}
      </section>
      <br />
      <section>
        <Quote />
      </section>
    </main>
  );

  // CONNECT TO BACKEND WITH AXIOS AND ASYNC/AWAIT
  function componentDidMount() {
    getResponse();

    async function getResponse() {
      const domain = window.location.hostname;
      let rootpath: string = "";
      // Determines if local or GitHub Pages
      if (domain === "yuki-konn.github.io")
        rootpath =
          "https://qyxgfxhby4ejikmfmdtzmkjnrq0yazfh.lambda-url.us-east-2.on.aws";

      const response = await axios.get(`${rootpath}/`);

      const stringified = JSON.stringify(response.data);
      const parseString = JSON.parse(stringified);
      setServerResponse(parseString);
    }
  }
}
