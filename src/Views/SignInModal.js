import React, { useState } from "react";
import { SignInContent } from "./SignInContent";
import { handleSignIn } from "../controllers/handleSignIn";

export function SignInModal(props) {
  const onSignIn = props.onSignIn; // Prop from SignInArea.

  // ERROR MESSAGE FOR INCORRECT INPUTS
  const [errorMessage, setErrorMessage] = useState("");
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
        tabIndex="-1"
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

  function handleSubmit(event) {
    console.log("Handler: handleSignIn");
    handleSignIn(event, onSignIn, setErrorMessage);
  }
}
