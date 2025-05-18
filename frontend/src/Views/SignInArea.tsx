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
import { Account } from "../models/Account";

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

    let action = set.signInDidMount(true);
    dispatch(action);

    getPersistentLogin();
  }

  function componentDidUpdate() {
    if (didMount) {
      console.log("SignInArea: Update Phase");
    }
  }

  async function getPersistentLogin() {
    let account: Account = undefined;
    const login = localStorage.getItem("credentials");
    if (login) {
      const credentials: Credentials = JSON.parse(login);
      const { email, password, timestamp } = credentials;
      const currentTimestamp = Date.now();
      const elapsedTime = currentTimestamp - timestamp;
      const isExpired = elapsedTime > 86400000;
      if (isExpired) localStorage.setItem("credentials", "");
      else {
        account = await authenticationAws(email, password);
        if (account) {
          const action = set.globalAccount(account);
          dispatch(action);
        } else localStorage.setItem("credentials", "");
      }
    }
    const action = set.signInButton("signInButton");
    dispatch(action);
  }
}
