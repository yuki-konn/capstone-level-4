import React, { FormEvent } from "react";
import { CreateAccountContent } from "./CreateAccountContent";
import { handleCreateAccount } from "../controllers/handleCreateAccount";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCreateAccountResponse,
  selectCreateAccountResponseType,
} from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";
import { ErrorInfo } from "../models/ErrorInfo";
import { Account } from "../models/Account";

export function CreateAccountModal() {
  let response: any = useSelector(selectCreateAccountResponse);
  const responseType: string = useSelector(selectCreateAccountResponseType);
  const dispatch = useDispatch();

  if (responseType === "Success") {
    response = <span style={{ color: "green" }}>{response}</span>;
  }
  if (responseType === "Failed") {
    response = <span style={{ color: "red" }}>{response}</span>;
  }
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
              <div className="text-center">{response}</div>
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
    const response: ErrorInfo | Account = await handleCreateAccount(event);
    let action: any;

    if (response.hasOwnProperty("email")) {
      action = set.createAccountResponseType("Success");
      dispatch(action);
      action = set.createAccountResponse(
        "Your account has been successfully created"
      );
      dispatch(action);
      action = set.globalAccount(response);
      dispatch(action);

      const closeModal = event.target[7];
      closeModal.click();
    } else {
      const { message } = response as ErrorInfo;
      action = set.createAccountResponseType("Failed");
      dispatch(action);
      action = set.createAccountResponse(message);
      dispatch(action);
    }

    setTimeout(closeModal, 3000);

    function closeModal() {
      const closeButton = event.target[7];
      closeButton.click();
    }
  }
}
