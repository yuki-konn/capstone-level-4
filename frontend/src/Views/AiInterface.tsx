import React, { FormEvent, useEffect } from "react";
import { handleSubmitAiInterface } from "../controllers/handleSubmitAiInterface";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../modules/redux/store";
import {
  selectAiInterfaceContext,
  selectAiInterfaceDidMount,
} from "../modules/redux/stateSelectors";

export function AiInterface() {
  const didMount: boolean = useSelector(selectAiInterfaceDidMount);
  let contextBox: any = useSelector(selectAiInterfaceContext);
  let action: any;
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  return (
    <>
      <div>{contextBox}</div>
      <div id="aiInterface" className="container-fluid">
        <form onSubmit={handleSubmit}>
          <div id="row1" className="row p-1">
            <div className="col-12">placeholder</div>
          </div>
          <div id="row2" className="row">
            <textarea
              className="col-12"
              name="question"
              placeholder="Type Here"
              required
            />
          </div>
          <div id="row3" className="row align-bottom">
            <input
              className="col-4 rowbuttons"
              type="submit"
              name="ask"
              value="Ask"
            />
            <button
              onClick={handleClickSeeContext}
              className="col-8"
              type="button"
              name="context"
            >
              See Context
            </button>
          </div>
        </form>
      </div>
    </>
  );

  function componentDidMount() {
    action = set.aiInterfaceDidMount(true);
    dispatch(action);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const answer = await handleSubmitAiInterface(event);
    debugger;
  }

  function handleClickSeeContext() {
    action = set.aiInterfaceContext("SeeContext");
    dispatch(action);
  }
}
