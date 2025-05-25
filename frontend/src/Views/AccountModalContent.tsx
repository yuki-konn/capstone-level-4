import React from "react";
import { useSelector } from "react-redux";
import { selectGlobalAccount } from "../modules/redux/stateSelectors";

export function AccountModalContent(props: { errorMessage: string }) {
  const errorMessage = props.errorMessage;
  const account = useSelector(selectGlobalAccount);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <label>Email: </label>
        </div>
        <div className="col">
          <input type="email" value={account.email} name="email" readOnly />{" "}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label>Password: </label>
        </div>
        <div className="col">
          <input
            type="password"
            value={account.password}
            name="password"
            readOnly
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label>User Name: </label>
        </div>
        <div className="col">
          <input type="text" defaultValue={account.userName} name="userName" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label>First Name: </label>
        </div>
        <div className="col">
          <input
            type="text"
            defaultValue={account.firstName}
            name="firstName"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label>Last Name: </label>
        </div>
        <div className="col">
          <input type="text" defaultValue={account.lastName} name="lastName" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label>Phone: </label>
        </div>
        <div className="col">
          <input type="text" defaultValue={account.phone} name="phone" />
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ color: "red" }}>
          {errorMessage}
        </div>
      </div>
    </div>
  );
}
