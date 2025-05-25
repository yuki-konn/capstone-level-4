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
import { Credentials } from "../models/Credentials";
import { authenticationAws } from "../modules/account/authenticationAws";
import { CreateAccountModal } from "./CreateAccountModal";
import { AccountModal } from "./AccountModal";

export function SignInArea() {
  const didMount = useSelector(selectSignInDidMount);
  const account = useSelector(selectGlobalAccount);
  let button: any = useSelector(selectSignInButton);

  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount, account]);

  if (button === "SignInAreaButton") {
    if (account)
      button = (
        <>
          <SignOutModal />
          <AccountModal />
        </>
      );
    else
      button = (
        <>
          <SignInModal />
          <CreateAccountModal />
        </>
      );
  }

  return <>{button}</>;

  function componentDidMount() {
    console.log("SignInArea Component: Mount Phase");

    let action = set.signInDidMount(true);
    dispatch(action);

    getPersistentLogin();
  }

  function componentDidUpdate() {
    if (didMount) {
      console.log("SignInArea Component: Update Phase");
    }
  }

  async function getPersistentLogin() {
    let action: any;
    const login = localStorage.getItem("credentials");
    if (login) {
      const credentials: Credentials = JSON.parse(login);
      const { email, password, timestamp } = credentials;
      const currentTimestamp = Date.now();
      const elapsedTime = currentTimestamp - timestamp;
      const isExpired = elapsedTime > 86400000;
      if (isExpired) localStorage.setItem("credentials", "");
      else {
        const account = await authenticationAws(email, password);
        if (account) {
          action = set.globalAccount(account);
          dispatch(action);
        } else localStorage.setItem("credentials", "");
      }
    }
    action = set.signInButton("SignInAreaButton");
    dispatch(action);
  }
}
