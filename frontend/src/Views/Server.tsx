import axios from "axios";
import React, { useEffect } from "react";
import "./Server.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectServerDidMount,
  selectServerResponse,
} from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";
import { AppEngine } from "./AppEngine";

export function Server() {
  const didMount = useSelector(selectServerDidMount);
  const serverResponse = useSelector(selectServerResponse);
  const dispatch = useDispatch();

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
        <AppEngine />
      </section>
    </main>
  );

  // CONNECT TO BACKEND WITH AXIOS AND ASYNC/AWAIT
  function componentDidMount() {
    let action = set.serverDidMount(true);
    dispatch(action);
    getResponse();

    async function getResponse() {
      const domain = window.location.hostname;
      let rootpath: string = "http://localhost:8000";
      // Determines if local or GitHub Pages
      if (domain === "yuki-konn.github.io")
        rootpath =
          "https://qyxgfxhby4ejikmfmdtzmkjnrq0yazfh.lambda-url.us-east-2.on.aws";

      const response = await axios.get(`${rootpath}/`);

      const stringified = JSON.stringify(response.data);
      const parseString = JSON.parse(stringified);

      let action = set.serverResponse(parseString);
      dispatch(action);
    }
  }
}
