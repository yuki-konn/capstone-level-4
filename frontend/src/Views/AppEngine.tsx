import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAppEngineDidMount,
  selectAppEngineResponse,
  selectAppEngineServerDemo,
} from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";
import axios from "axios";
import { getRootPathAppEngine } from "../utils/getRootPathAppEngine";

export function AppEngine() {
  const didMount = useSelector(selectAppEngineDidMount);
  let serverDemo: any = useSelector(selectAppEngineServerDemo);
  let serverResponse: any = useSelector(selectAppEngineResponse);
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);

  if (serverDemo === "serverDemo") {
    serverDemo = (
      <div>
        <h1>{serverResponse.header}</h1>
        <p>{serverResponse.context}</p>
        <span>The path is "{serverResponse.url}".</span>
        <br />
        <span>mode = "{serverResponse.mode}"</span>
      </div>
    );
  }
  return <>{serverDemo}</>;

  function componentDidMount() {
    let action = set.appEngineDidMount(true);
    dispatch(action);
    action = set.appEngineServerDemo("serverDemo");
    dispatch(action);

    getServerDemo();

    async function getServerDemo() {
      const rootpath = getRootPathAppEngine();
      const response = await axios.get(`${rootpath}/`);
      const data = response.data;
      action = set.appEngineResponse(data);
      dispatch(action);
    }
  }
}
