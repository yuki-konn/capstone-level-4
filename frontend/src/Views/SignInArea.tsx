import React, { useEffect } from "react";
import { SignInModal } from "./SignInModal";
import { SignOutModal } from "./SignOutModal";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGlobalAccount,
  selectSignInButton,
  selectSignInDidMount,
} from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";

export function SignInArea() {
  const didMount = useSelector(selectSignInDidMount);
  const account = useSelector(selectGlobalAccount);
  let button: any = useSelector(selectSignInButton);

  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount, account]);

  if (button === "signInButton") {
    if (account) {
      button = <SignOutModal />;
    } else {
      button = <SignInModal />;
    }
  }

  return <>{button}</>;

  function componentDidMount() {
    console.log("SignInArea: Mount Phase");

    let action = set.signInButton("signInButton");
    dispatch(action);
  }

  function componentDidUpdate() {
    if (didMount) {
      console.log("SignInArea: Update Phase");
    }
  }
}
