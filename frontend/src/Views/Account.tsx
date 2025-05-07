import React, { useEffect } from "react";
import { handleReadAccount } from "../controllers/handleReadAccount";
import "./Account.scss";
import { handleUpdateAccount } from "../controllers/handleUpdateAccount";
import { handleDeleteAccount } from "../controllers/handleDeleteAccount";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAccountDeleteResponse,
  selectAccountDidMount,
  selectAccountReadResponse,
  selectAccountResponseArray,
  selectAccountResponseString,
  selectAccountUpdateResponse,
} from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";

// TODO: Make this page disabled in navigation and only enable after signing in.
export function Account() {
  const didMount = useSelector(selectAccountDidMount);
  let readResponse: any = useSelector(selectAccountReadResponse);
  let updateResponse: any = useSelector(selectAccountUpdateResponse);
  let deleteResponse: any = useSelector(selectAccountDeleteResponse);
  let responseAccount: any = useSelector(selectAccountResponseArray);
  let responseMessage: any = useSelector(selectAccountResponseString);

  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);

  if (readResponse === "readResponseObj") {
    readResponse = (
      <div id="readAccountInfo">
        <h4>
          <u>Retrieved Information</u>
        </h4>
        <p>
          <b>Email: </b>
          <span>{responseAccount[0]}</span>
        </p>
        <p>
          <b>password: </b>
          <span>{responseAccount[1]}</span>
        </p>
        <p>
          <b>User Name: </b>
          <span>{responseAccount[2]}</span>
        </p>
        <p>
          <b>First Name: </b>
          <span>{responseAccount[3]}</span>
        </p>
        <p>
          <b>Last Name: </b>
          <span>{responseAccount[4]}</span>
        </p>
        <p>
          <b>Phone #: </b>
          <span>{responseAccount[5]}</span>
        </p>
      </div>
    );
  }
  if (readResponse === "readResponseString") {
    readResponse = <span id="readAccountMessage">{responseMessage}</span>;
  }

  if (updateResponse === "updateSuccess")
    updateResponse = <span id="updateSuccess">{responseMessage}</span>;
  if (updateResponse === "updateFailed")
    updateResponse = <span id="updateFailed">{responseMessage}</span>;

  if (deleteResponse === "deleteSuccess")
    deleteResponse = <span id="deleteSuccess">{responseMessage}</span>;
  if (deleteResponse === "deleteFailed")
    deleteResponse = <span id="deleteFailed">{responseMessage}</span>;

  return (
    <main id="accountMain" className="container-lg">
      <h1>Account Information</h1>
      <hr />
      <section id="readAccountSection" className="col-12">
        <h4>Retrieve Information</h4>
        <span>
          Enter your email and password to retrieve your account information.
        </span>
        <form onSubmit={handleSubmitRead}>
          <div>
            <label>
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <input type="email" placeholder="test@email.com" required />
          </div>
          <div>
            <label>
              Password <span style={{ color: "red" }}>*</span>
            </label>
            <input type="password" placeholder="test" required />
          </div>
          <input id="formSubmitRead" type="submit" />
        </form>
        {readResponse}
      </section>
      <hr />
      <section id="updateAccountSection" className="col-12">
        <h4>Update Information</h4>
        <span>
          Enter your email and the other fields to update your account.
        </span>
        <form onSubmit={handleSubmitUpdate}>
          <div>
            <label>
              Email <span style={{ color: "red" }}>*</span>{" "}
            </label>
            <input type="email" placeholder="test3@email.com" required />
          </div>
          <div>
            <label>Password </label>
            <input type="password" placeholder="test3" />
          </div>
          <div>
            <label>User Name </label>
            <input type="text" />
          </div>
          <div>
            <label>First Name </label>
            <input type="text" placeholder="John" />
          </div>
          <div>
            <label>Last Name </label>
            <input type="text" placeholder="Smith" />
          </div>
          <div>
            <label>Phone Number </label>
            <input
              type="tel"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              placeholder="##########"
            />
          </div>
          <input id="formSubmitUpdate" type="submit" />
        </form>
        {updateResponse}
      </section>
      <hr />
      <section id="deleteAccountSection" className="col-12">
        <h4>Delete Account</h4>
        <span>Enter your email and password to delete your account.</span>
        <form onSubmit={handleSubmitDelete}>
          <div>
            <label>
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <input type="email" placeholder="delete@email.com" required />
          </div>
          <div>
            <label>
              Password <span style={{ color: "red" }}>*</span>
            </label>
            <input type="password" placeholder="delete" required />
          </div>
          <input id="formSubmitDelete" type="submit" />
        </form>
        {deleteResponse}
      </section>
    </main>
  );

  function componentDidMount() {
    console.log("The Account component has mounted.");
    let action = set.accountDidMount(true);
    dispatch(action);
  }

  function componentDidUpdate() {
    if (didMount) {
    }
  }

  async function handleSubmitRead(event: any) {
    const response = await handleReadAccount(event);

    const isAccount = typeof response === "object";
    if (isAccount) {
      const { email, password, userName, firstName, lastName, phone } =
        response;
      let action = set.accountReadResponse("readResponseObj");
      dispatch(action);

      action = set.accountResponseArray([
        email,
        password,
        userName,
        firstName,
        lastName,
        phone,
      ]);
      dispatch(action);
    }
    const isMessage = typeof response === "string";
    if (isMessage) {
      let action = set.accountReadResponse("readResponseString");
      dispatch(action);

      action = set.accountResponseString(response);
      dispatch(action);
    }
  }

  async function handleSubmitUpdate(event: any) {
    const response = await handleUpdateAccount(event);
    const isUpdated = response === "Your account has been updated.";
    if (isUpdated) {
      let action = set.accountUpdateResponse("updateSuccess");
      dispatch(action);
    } else {
      let action = set.accountUpdateResponse("updateFailed");
      dispatch(action);
    }
  }

  async function handleSubmitDelete(event: any) {
    const response = await handleDeleteAccount(event);
    const isDeleted = response === "Your account has been deleted.";
    if (isDeleted) {
      let action = set.accountDeleteResponse("deleteSuccess");
      dispatch(action);
    } else {
      let action = set.accountDeleteResponse("deleteFailed");
      dispatch(action);
    }
  }
}
