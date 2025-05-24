import React, { FormEvent, useEffect } from "react";
import { handleSubmitAiInterface } from "../controllers/handleSubmitAiInterface";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../modules/redux/store";
import {
  selectAiInterfaceAnswer,
  selectAiInterfaceDidMount,
  selectAiInterfaceQuestion,
} from "../modules/redux/stateSelectors";

export function AiInterface() {
  const didMount: boolean = useSelector(selectAiInterfaceDidMount);
  const aiAnswer = useSelector(selectAiInterfaceAnswer);
  const userQuestion = useSelector(selectAiInterfaceQuestion);
  let action: any;
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  return (
    <>
      <div id="aiInterface" className="container-fluid">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div id="labelArea" className="col-12 text-center">
              <label>Response Box</label>
            </div>
          </div>
          <div id="outputArea" className="row p-1 text-center">
            <div className="col-12">
              <p id="questionOutput">{userQuestion}</p>
              <p id="answerOutput">{aiAnswer}</p>
            </div>
          </div>
          <div id="questionArea" className="row p-1">
            <div className="col-12">
              <textarea
                id="question"
                name="question"
                placeholder="Type question here"
                required
              />
            </div>
          </div>
          <div id="buttonArea" className="row align-bottom p-1">
            <div className="col-12">
              <input
                className="interfaceButton "
                type="submit"
                name="ask"
                value="Ask"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );

  function componentDidMount() {
    console.log("AiInterface Component: Mount Phase");
    action = set.aiInterfaceDidMount(true);
    dispatch(action);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const question = event.target[0].value;
    const answer = await handleSubmitAiInterface(event);

    action = set.aiInterfaceAnswer(answer);
    dispatch(action);
    action = set.aiInterfaceQuestion(question);
    dispatch(action);
  }
}
