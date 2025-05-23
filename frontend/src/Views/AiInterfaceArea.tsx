import React, { useEffect } from "react";
import "./AiInterfaceArea.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAiInterfaceAreaContent,
  selectAiInterfaceAreaDidMount,
  selectAiInterfaceAreaIsShown,
} from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";
import { AiInterface } from "./AiInterface";

export function AiInterfaceArea() {
  const didMount: boolean = useSelector(selectAiInterfaceAreaDidMount);
  const isShown: boolean = useSelector(selectAiInterfaceAreaIsShown);
  let contentBox: any = useSelector(selectAiInterfaceAreaContent);
  let action: any;
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);

  contentBox = contentMap[contentBox];
  return (
    <div id="aiInterfaceArea">
      {contentBox}
      <button onClick={handleClick} id="aiInterfaceButton">
        Ask Question
      </button>
    </div>
  );
  function componentDidMount() {
    console.log("AiInterface: Mount Phase");
    action = set.aiInterfaceAreaDidMount(true);
    dispatch(action);
    action = set.aiInterfaceAreaContent("HideContent");
    dispatch(action);
  }
  function componentDidUpdate() {
    if (didMount) {
      console.log("AiInterface: Update Phase");
    }
  }
  function handleClick() {
    if (!isShown) {
      action = set.aiInterfaceAreaContent("ShowContent");
      dispatch(action);
      action = set.aiInterfaceAreaIsShown(true);
      dispatch(action);
    }
    if (isShown) {
      action = set.aiInterfaceAreaContent("HideContent");
      dispatch(action);
      action = set.aiInterfaceAreaIsShown(false);
      dispatch(action);
    }
  }
}
const contentMap = {
  ShowContent: <AiInterface />,
  HideContent: <></>,
};
