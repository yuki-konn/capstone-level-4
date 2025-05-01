import React, { useState } from "react";
import { handleReadAccount } from "../controllers/handleReadAccount";
import "./Account.scss";
import { handleUpdateAccount } from "../controllers/handleUpdateAccount";

// TODO: Make this page disabled in navigation and only enable after signing in.
export function Account() {
  const [readResponse, setReadResponse] = useState(<></>);
  const [updateResponse, setUpdateResponse] = useState(<></>);
  return (
    <main id="accountMain" className="container-lg">
      <h1>Account Information</h1>
      <section id="readAccountSection" className="col-12">
        <span>
          Enter your email and password to retrieve your account information.
        </span>
        <form onSubmit={handleSubmitRead}>
          <div>
            <label>Email </label>
            <input type="email" placeholder="test@email.com" required />
          </div>
          <div>
            <label>Password </label>
            <input type="password" placeholder="test" required />
          </div>
          <input id="formSubmit" type="submit" />
        </form>
        {readResponse}
      </section>
      <hr />
      <section id="updateAccountSection">
        <span>
          Enter email, password, and user name and the other fields to update
          your account.
        </span>
        <span>
          Alternatively enter new email, password, and user name and other
          fields to create an account.
        </span>
        <form onSubmit={handleSubmitUpdate}>
          <div>
            <label>Email * </label>
            <input type="email" placeholder="test@email.com" required />
          </div>
          <div>
            <label>Password * </label>
            <input type="password" placeholder="test" required />
          </div>
          <div>
            <label>User Name * </label>
            <input type="text" required />
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
          <input id="formSubmit" type="submit" />
        </form>
        {updateResponse}
      </section>
    </main>
  );

  async function handleSubmitRead(event: any) {
    const response = await handleReadAccount(event);

    const isAccount = typeof response === "object";
    if (isAccount) {
      const { email, password, userName, firstName, lastName, phone } =
        response;
      setReadResponse(
        <div id="readAccountInfo">
          <h4>
            <u>Retrieved Information</u>
          </h4>
          <p>
            <b>Email: </b>
            <span>{email}</span>
          </p>
          <p>
            <b>password: </b>
            <span>{password}</span>
          </p>
          <p>
            <b>User Name: </b>
            <span>{userName}</span>
          </p>
          <p>
            <b>First Name: </b>
            <span>{firstName}</span>
          </p>
          <p>
            <b>Last Name: </b>
            <span>{lastName}</span>
          </p>
          <p>
            <b>Phone #: </b>
            <span>{phone}</span>
          </p>
        </div>
      );
    }
    const isMessage = typeof response === "string";
    if (isMessage)
      setReadResponse(<span id="readAccountMessage">{response}</span>);
  }

  async function handleSubmitUpdate(event: any) {
    const response = await handleUpdateAccount(event);
    const isUpdated = response === "Your account has been updated.";
    if (isUpdated)
      setUpdateResponse(<span id="updateSuccess">{response}</span>);
    else setUpdateResponse(<span id="updateFailed">{response}</span>);
  }
}
