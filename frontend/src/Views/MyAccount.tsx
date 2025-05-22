import React, { FormEvent, ReactElement, useEffect } from "react";
import { handleReadAccount } from "../controllers/handleReadAccount";
import "./MyAccount.scss";
import { handleUpdateAccount } from "../controllers/handleUpdateAccount";
import { handleDeleteAccount } from "../controllers/handleDeleteAccount";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAccountDeleteComponent,
  selectAccountDeleteResponse,
  selectAccountDidMount,
  // selectAccountReadComponent,
  // selectAccountReadResponse,
  selectAccountUpdateComponent,
  selectAccountUpdateResponse,
  selectGlobalAccount,
} from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";
import { Account } from "../models/Account";

// TODO: Make this page disabled in navigation and only enable after signing in.
export function MyAccount() {
  const didMount = useSelector(selectAccountDidMount);
  // let readResponse: Account | string = useSelector(selectAccountReadResponse);
  const updateResponse: string = useSelector(selectAccountUpdateResponse);
  const deleteResponse: string = useSelector(selectAccountDeleteResponse);
  // let readComponent: stringOrJSX = useSelector(selectAccountReadComponent);
  let updateComponent: stringOrJSX = useSelector(selectAccountUpdateComponent);
  let deleteComponent: stringOrJSX = useSelector(selectAccountDeleteComponent);
  const account = useSelector(selectGlobalAccount);

  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);

  // if (readComponent === "readSuccess") {
  //   const { email, password, userName, firstName, lastName, phone } =
  //     readResponse as any as Account;
  //   readComponent = (
  //     <div id="readAccountInfo">
  //       <h4>
  //         <u>Retrieved Information</u>
  //       </h4>
  //       <p>
  //         <b>Email: </b>
  //         <span>{email}</span>
  //       </p>
  //       <p>
  //         <b>password: </b>
  //         <span>{password}</span>
  //       </p>
  //       <p>
  //         <b>User Name: </b>
  //         <span>{userName}</span>
  //       </p>
  //       <p>
  //         <b>First Name: </b>
  //         <span>{firstName}</span>
  //       </p>
  //       <p>
  //         <b>Last Name: </b>
  //         <span>{lastName}</span>
  //       </p>
  //       <p>
  //         <b>Phone #: </b>
  //         <span>{phone}</span>
  //       </p>
  //     </div>
  //   );
  // }
  // if (readComponent === "readFailed") {
  //   readComponent = <span id="readAccountMessage">{readResponse}</span>;
  // }

  if (updateComponent === "updateSuccess")
    updateComponent = <span className="success">{updateResponse}</span>;
  if (updateComponent === "updateFailed")
    updateComponent = <span className="failed">{updateResponse}</span>;

  if (deleteComponent === "deleteSuccess")
    deleteComponent = <span className="success">{deleteResponse}</span>;
  if (deleteComponent === "deleteFailed")
    deleteComponent = <span className="failed">{deleteResponse}</span>;

  if (!account)
    return (
      <main id="notSignedIn" className="container-lg">
        <h1>
          You're not signed in please sign in at the top to view your account.
        </h1>
      </main>
    );
  return (
    <main id="accountMain" className="container-lg">
      <h1>Account Information</h1>
      <hr />
      <section id="accountInfo" className="col-12">
        <div>
          <span className="spanLabel">Email: </span>
          <span className="infoItem">{account.email}</span>
        </div>
        <div>
          <span className="spanLabel">Password: </span>
          <span className="infoItem">{account.password}</span>
        </div>
        <div>
          <span className="spanLabel">User Name: </span>
          <span className="infoItem">{account.userName}</span>
        </div>
        <div>
          <span className="spanLabel">First Name: </span>
          <span className="infoItem">{account.firstName}</span>
        </div>
        <div>
          <span className="spanLabel">Last Name: </span>
          <span className="infoItem">{account.lastName}</span>
        </div>
        <div>
          <span className="spanLabel">Phone Number: </span>
          <span className="infoItem">{account.phone}</span>
        </div>
        {/* <div>
          <input
            name="update"
            value="Update Account"
            type="button"
            onClick={handleClickUpdate}
          />
          <input
            name="delete"
            value="Delete Account"
            type="button"
            onClick={handleClickDelete}
          />
        </div> */}
      </section>
      {/* <section className="accountFormSection col-12">
        <h4>Retrieve Information</h4>
        <span>
          Enter your email and password to retrieve your account information.
        </span>
        <form onSubmit={handleSubmitRead}>
          <div>
            <label>
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              name="readEmail"
              placeholder="test@email.com"
              required
            />
          </div>
          <div>
            <label>
              Password <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="password"
              name="readPassword"
              placeholder="test"
              required
            />
          </div>
          <input id="formSubmitRead" type="submit" />
        </form>
        {readComponent}
      </section> */}
      <hr />
      <section className="accountFormSection col-12">
        <h4>Update Information</h4>
        <span>
          Enter your email and the other fields to update your account.
        </span>
        <form onSubmit={handleSubmitUpdate}>
          <div>
            <label>
              Email <span style={{ color: "red" }}>*</span>{" "}
            </label>
            <input type="email" defaultValue={account.email} required />
          </div>
          <div>
            <label>Password </label>
            <input type="password" defaultValue={account.password} />
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
        {updateComponent}
      </section>
      <hr />
      <section className="accountFormSection col-12">
        <h4>Delete Account</h4>
        <span>Enter your email and password to delete your account.</span>
        <form onSubmit={handleSubmitDelete}>
          <div>
            <label>
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <input type="email" defaultValue={account.email} required />
          </div>
          <div>
            <label>
              Password <span style={{ color: "red" }}>*</span>
            </label>
            <input type="password" defaultValue={account.password} required />
          </div>
          <input id="formSubmitDelete" type="submit" />
        </form>
        {deleteComponent}
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
      console.log("The Account component has updated.");
    }
  }

  // function handleClickUpdate() {}
  // function handleClickDelete() {}

  // async function handleSubmitRead(event: FormEvent<HTMLFormElement>) {
  //   const response: string | Account = await handleReadAccount(event);

  //   const isAccount = typeof response === "object";
  //   if (isAccount) {
  //     let action = set.accountReadComponent("readSuccess");
  //     dispatch(action);
  //     action = set.accountReadResponse(response);
  //     dispatch(action);
  //   }
  //   const isMessage = typeof response === "string";
  //   if (isMessage) {
  //     let action = set.accountReadComponent("readFailed");
  //     dispatch(action);
  //     action = set.accountReadResponse(response);
  //     dispatch(action);
  //   }
  // }

  async function handleSubmitUpdate(event: FormEvent<HTMLFormElement>) {
    const response: string = await handleUpdateAccount(event);

    const isUpdated = response.includes("updated");
    if (isUpdated) {
      let action = set.accountUpdateComponent("updateSuccess");
      dispatch(action);
      action = set.accountUpdateResponse(response);
      dispatch(action);
    } else {
      let action = set.accountUpdateComponent("updateFailed");
      dispatch(action);
      action = set.accountUpdateResponse(response);
      dispatch(action);
    }
  }

  async function handleSubmitDelete(event: FormEvent<HTMLFormElement>) {
    const response: string = await handleDeleteAccount(event);

    const isDeleted = response === "Your account has been deleted.";
    if (isDeleted) {
      let action = set.accountDeleteComponent("deleteSuccess");
      dispatch(action);
      action = set.accountDeleteResponse(response);
      dispatch(action);
    } else {
      let action = set.accountDeleteComponent("deleteFailed");
      dispatch(action);
      action = set.accountDeleteResponse(response);
      dispatch(action);
    }
  }
}

type stringOrJSX = string | ReactElement;
