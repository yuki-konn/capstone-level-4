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
import { getRootPathAws } from "../utils/getRootPathAws";

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

  function componentDidMount() {
    let action = set.serverDidMount(true);
    dispatch(action);
    getResponse();

    async function getResponse() {
      const rootpath = getRootPathAws();

      const response = await axios.get(`${rootpath}/`);

      const stringified = JSON.stringify(response.data);
      const parseString = JSON.parse(stringified);

      let action = set.serverResponse(parseString);
      dispatch(action);
    }
  }
}
