import React, { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { set } from "../modules/redux/store";

export function SignOutModal() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        type="button"
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#signOutModal"
      >
        Sign Out
      </button>

      <form
        onSubmit={handleSubmit}
        className="modal fade"
        id="signOutModal"
        tabIndex={-1}
        aria-labelledby="signOutModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="signOutModalLabel">
                Sign Out
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Are you sure you want to sign out?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button type="submit" className="btn btn-success">
                Yes
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );

  // SIGN-OUT MODAL FORM HANDLER
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const closeButton = event.target[1];
    closeButton.click();

    const action = set.globalAccount(undefined);
    dispatch(action);
  }
}
