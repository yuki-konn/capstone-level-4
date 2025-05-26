import React, { FormEvent } from "react";
import { SignInContent } from "./SignInContent";
import { handleSignIn } from "../controllers/handleSignIn";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../modules/redux/store";
import { Credentials } from "../models/Credentials";
import { selectGlobalErrorMessage } from "../modules/redux/stateSelectors";

export function SignInModal() {
  // ERROR MESSAGE FOR INCORRECT INPUTS
  const errorMessage = useSelector(selectGlobalErrorMessage);
  const dispatch = useDispatch();

  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#signInModal"
      >
        Sign In
      </button>

      <form
        onSubmit={handleSubmit}
        className="modal fade"
        id="signInModal"
        tabIndex={-1}
        aria-labelledby="signInModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div
            className="modal-content"
            style={{ width: "75%", margin: "auto" }}
          >
            <div
              className="modal-header"
              style={{ justifyContent: "space-between" }}
            >
              <h1 className="modal-title fs-5" id="signInModalLabel">
                Sign In
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ width: "0px" }}
              ></button>
            </div>
            <div
              id="signInContent"
              className="modal-body"
              style={{ placeSelf: "center" }}
            >
              <SignInContent errorMessage={errorMessage} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                name="closeButton"
              >
                Close
              </button>
              <button type="submit" className="btn btn-success">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const account = await handleSignIn(event);

    if (account) {
      const action = set.globalAccount(account);
      dispatch(action);

      const currentTimestamp = Date.now();
      const credentials: Credentials = {
        email: account.email,
        password: account.password,
        timestamp: currentTimestamp,
      };
      const loginString = JSON.stringify(credentials);
      localStorage.setItem("credentials", loginString);
    } else {
      let action = set.globalErrorMessage(
        "The email or password is incorrect."
      );
      dispatch(action);
    }

    setTimeout(resetErrorMessage, 5000);

    function resetErrorMessage() {
      let action = set.globalErrorMessage("");
      dispatch(action);
    }
  }
}
