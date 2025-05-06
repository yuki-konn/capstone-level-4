import React, { useEffect } from "react";
import { SignInModal } from "./SignInModal";
import { SignOutModal } from "./SignOutModal";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignInButton,
  selectSignInDidMount,
  selectSignInIsSignedIn,
} from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";

export function SignInArea() {
  const didMount = useSelector(selectSignInDidMount);
  const isSignedIn = useSelector(selectSignInIsSignedIn);
  let button: any = useSelector(selectSignInButton);

  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);

  if (button === "signInButton") {
    if (isSignedIn) {
      button = <SignOutModal onSignOut={handleSignOut} />;
    } else {
      button = <SignInModal onSignIn={handleSignIn} />;
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

  function handleSignIn() {
    let action = set.signInIsSignedIn(true);
    dispatch(action);
  }

  function handleSignOut() {
    let action = set.signInIsSignedIn(false);
    dispatch(action);
  }
}
