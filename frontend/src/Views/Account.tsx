import React, { useState } from "react";
import { handleReadAccount } from "../controllers/handleReadAccount";
import "./Account.scss";

// TODO: Make this page disabled in navigation and only enable after signing in.
export function Account() {
  const [readResponse, setReadResponse] = useState(<></>);
  return (
    <main id="accountMain" className="container-lg">
      <h1>Account Information</h1>
      <section id="readAccount" className="col-12">
        <span>
          Enter your email and password to retrieve your account information.
        </span>
        <form onSubmit={handleSubmit}>
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
    </main>
  );

  async function handleSubmit(event: any) {
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
}
