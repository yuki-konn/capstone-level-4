import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccountModalContent } from "./AccountModalContent";
import { selectGlobalAccount } from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";
import { handleAccountUpdate } from "../controllers/handleAccountUpdate";
import { Account } from "../models/Account";

export function AccountModal() {
  const currentAccount: Account = useSelector(selectGlobalAccount);
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
        <div className="modal-dialog" style={{ width: "75%", margin: "auto" }}>
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ justifyContent: "space-between" }}
            >
              <h1 className="modal-title fs-5" id="accountModalLabel">
                Account
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
              <AccountModalContent />
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
    const account = await handleAccountUpdate(event, currentAccount);

    if (account) {
      action = set.globalAccount(account);
      dispatch(action);
      action = set.globalMessage(
        `Success: updated account for ${account.email}`
      );
      dispatch(action);
    } else {
      action = set.globalErrorMessage("Failed: account unable to be updated");
      dispatch(action);
    }

    setTimeout(resetMessage, 5000);

    function resetMessage() {
      action = set.globalErrorMessage("");
      dispatch(action);
      action = set.globalMessage("");
      dispatch(action);
    }
  }
}
