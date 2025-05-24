import React, { FormEvent, useEffect } from "react";
import { handleSubmitAiInterface } from "../controllers/handleSubmitAiInterface";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../modules/redux/store";
import {
  selectAiInterfaceAnswer,
  selectAiInterfaceContext,
  selectAiInterfaceDidMount,
} from "../modules/redux/stateSelectors";

export function AiInterface() {
  const didMount: boolean = useSelector(selectAiInterfaceDidMount);
  let contextBox: any = useSelector(selectAiInterfaceContext);
  const aiAnswer = useSelector(selectAiInterfaceAnswer);
  let action: any;
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  //TODO: Make button map for SeeContext button
  return (
    <>
      <div>{contextBox}</div>
      <div id="aiInterface" className="container-fluid">
        <form onSubmit={handleSubmit}>
          {/* Answer box or Context box on row1*/}
          <div id="row1" className="row p-1">
            <div className="col-12">{aiAnswer}</div>
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
              onClick={handleClickShowContext}
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

  //TODO: Make componentDidUpdate for replacing answer box with context box

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const answer = await handleSubmitAiInterface(event);
    debugger;
    action = set.aiInterfaceAnswer(answer);
    dispatch(action);
    //TODO: Test handler
  }

  function handleClickShowContext() {
    action = set.aiInterfaceContext("ShowContext");
    dispatch(action);
    //TODO: Have handler make a context box replace the interface
    // with a new box that shows the context with a button that says
    // "show interface"
  }
}
