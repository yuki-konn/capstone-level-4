import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../modules/redux/store";
import {
  selectAiInterfaceContext,
  selectAiInterfaceDidMount,
} from "../modules/redux/stateSelectors";

export function AiInterface() {
  const didMount: boolean = useSelector(selectAiInterfaceDidMount);
  const context = useSelector(selectAiInterfaceContext);
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  // TODO: Change to context then put in modal and put on fixed button on shop page
  return (
    <div>
      <form>
        <div className="row">
          <div className="col-12">
            <input name="question" type="text" className="col-10" />
            <input type="submit" className="col-2" />
          </div>
        </div>
        <button onClick={handleClick}>Context</button>
        <div className="row">
          <div className="col-3">{context}</div>
        </div>
      </form>
    </div>
  );

  function componentDidMount() {
    const action = set.aiInterfaceDidMount(true);
    dispatch(action);
  }

  function handleClick() {
    const context = "test context";
    const action = set.aiInterfaceContext(context);
    dispatch(action);
  }
}
