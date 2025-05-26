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
          <div
            className="modal-content"
            style={{ width: "75%", margin: "auto" }}
          >
            <div
              className="modal-header"
              style={{ justifyContent: "space-between" }}
            >
              <h1 className="modal-title fs-5" id="signOutModalLabel">
                Sign Out
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ width: "0px" }}
              ></button>
            </div>
            <div className="modal-body" style={{ placeSelf: "center" }}>
              <div className="row">
                <div className="col">Are you sure you want to sign out?</div>
              </div>
            </div>
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

    localStorage.setItem("credentials", "");
  }
}
