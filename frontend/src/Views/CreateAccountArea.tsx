import React, { useEffect } from "react";
import { CreateAccountModal } from "./CreateAccountModal";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCreateAccountButton,
  selectCreateAccountDidMount,
} from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";

// Disabled going to merge to SignInArea
export function CreateAccountArea() {
  const didMount = useSelector(selectCreateAccountDidMount);
  let button: any = useSelector(selectCreateAccountButton);
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);

  if (button === "createAccountModal") button = <CreateAccountModal />;

  return <>{button}</>;

  function componentDidMount() {
    console.log("CreateAccountArea: Mount Phase");
    let action = set.createAccountDidMount(true);
    dispatch(action);

    action = set.createAccountButton("createAccountModal");
    dispatch(action);
  }
}
