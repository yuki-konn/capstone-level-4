import React, { FormEvent } from "react";
import { SignInContent } from "./SignInContent";
import { handleSignIn } from "../controllers/handleSignIn";
import { useDispatch, useSelector } from "react-redux";
import { selectSignInErrorMessage } from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";

export function SignInModal() {
  // ERROR MESSAGE FOR INCORRECT INPUTS
  const errorMessage = useSelector(selectSignInErrorMessage);
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
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="signInModalLabel">
                Sign In
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div id="signInContent" className="modal-body">
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
    } else {
      let action = set.signInErrorMessage(
        "The email or password is incorrect."
      );
      dispatch(action);
    }

    setTimeout(resetErrorMessage, 5000);

    function resetErrorMessage() {
      let action = set.signInErrorMessage("");
      dispatch(action);
    }
  }
}
