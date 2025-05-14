import React, { FormEvent } from "react";
import { CreateAccountContent } from "./CreateAccountContent";
import { handleCreateAccount } from "../controllers/handleCreateAccount";
import { useDispatch, useSelector } from "react-redux";
import { selectCreateAccountResponse } from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";

export function CreateAccountModal() {
  const response = useSelector(selectCreateAccountResponse);
  const dispatch = useDispatch();
  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#createAccountModal"
      >
        Create Account
      </button>

      <form
        onSubmit={handleSubmit}
        className="modal fade"
        id="createAccountModal"
        tabIndex={-1}
        aria-labelledby="createAccountModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="createAccountModalLabel">
                Please fill in your information.
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div id="createAcountContent" className="modal-body">
              <CreateAccountContent />
              <span style={{ color: "green" }}>{response}</span>
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
                Create Account
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const response: string = await handleCreateAccount(event);

    let action = set.createAccountResponse(response);
    dispatch(action);

    setTimeout(closeModal, 3000);

    function closeModal() {
      const closeButton = event.target[7];
      closeButton.click();
    }
  }
}
