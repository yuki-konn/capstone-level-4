import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccountModalContent } from "./AccountModalContent";
import { selectGlobalErrorMessage } from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";
import { handleAccountUpdate } from "../controllers/handleAccountUpdate";

export function AccountModal() {
  const errorMessage = useSelector(selectGlobalErrorMessage);
  const dispatch = useDispatch();
  let action: any;

  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#accountModal"
      >
        Account
      </button>

      <form
        onSubmit={handleSubmit}
        className="modal fade"
        id="accountModal"
        tabIndex={-1}
        aria-labelledby="accountModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="accountModalLabel">
                Account
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div id="signInContent" className="modal-body">
              <AccountModalContent errorMessage={errorMessage} />
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
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );

  async function handleSubmit(event: any) {
    const account = await handleAccountUpdate(event);

    if (account) {
      action = set.globalAccount(account);
      dispatch(action);

      action = set.globalErrorMessage("Your account has been updated");
      dispatch(action);
    } else {
      action = set.globalErrorMessage("Your account was unable to update");
      dispatch(action);
    }

    setTimeout(resetErrorMessage, 5000);

    function resetErrorMessage() {
      let action = set.globalErrorMessage("");
      dispatch(action);
    }
  }
}
