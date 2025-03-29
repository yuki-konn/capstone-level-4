import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Server.scss";

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
    </main>
  );

  // CONNECT TO BACKEND WITH AXIOS AND ASYNC/AWAIT
  function componentDidMount() {
    getResponse();

    async function getResponse() {
      const response = await axios.get("http://localhost:8000/");

      const stringified = JSON.stringify(response.data);
      const parseString = JSON.parse(stringified);
      setServerResponse(parseString);
    }
  }
}
