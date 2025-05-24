import React, { FormEvent, useEffect } from "react";
import { handleSubmitAiInterface } from "../controllers/handleSubmitAiInterface";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../modules/redux/store";
import {
  selectAiInterfaceAnswer,
  selectAiInterfaceButtonToggle,
  selectAiInterfaceDidMount,
} from "../modules/redux/stateSelectors";

export function AiInterface() {
  const didMount: boolean = useSelector(selectAiInterfaceDidMount);
  const aiAnswer = useSelector(selectAiInterfaceAnswer);
  let button: string = useSelector(selectAiInterfaceButtonToggle);
  let action: any;
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  //TODO: Make button map for SeeContext button
  button = buttonMap[button];
  return (
    <>
      <div id="aiInterface" className="container-fluid">
        <form onSubmit={handleSubmit} className="row-gap-1">
          <div id="row1" className="row p-1">
            <div className="col-12">{aiAnswer}</div>
          </div>
          <div id="row2" className="row p-1">
            <div className="col-12">
              <textarea
                id="question"
                name="question"
                placeholder="Type Here"
                required
              />
            </div>
          </div>
          <div id="row3" className="row align-bottom p-1">
            <div className="col-4">
              <input
                className="interfaceButton "
                type="submit"
                name="ask"
                value="Ask"
              />
            </div>
            <div className="col-8">
              <button
                onClick={handleClick}
                className="interfaceButton"
                type="button"
                name="context"
              >
                {button}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );

  function componentDidMount() {
    action = set.aiInterfaceDidMount(true);
    dispatch(action);

    // action = set.aiInterfaceButtonToggle("ShowContext");
    // dispatch(action);
  }

  //TODO: Make componentDidUpdate for replacing answer box with context box

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const answer = await handleSubmitAiInterface(event);
    debugger;
    action = set.aiInterfaceAnswer(answer);
    dispatch(action);
    //TODO: Test handler
  }

  function handleClick() {
    debugger;
    if (button === "Show Context") {
      action = set.aiInterfaceButtonToggle("ShowInterface");
      dispatch(action);
    }
    if (button === "Show Interface") {
      action = set.aiInterfaceButtonToggle("ShowContext");
      dispatch(action);
    }

    //TODO: Have handler make a context box replace the interface
    // with a new box that shows the context with a button that says
    // "show interface"
  }
}

const buttonMap = {
  ShowContext: "Show Context",
  ShowInterface: "Show Interface",
};
