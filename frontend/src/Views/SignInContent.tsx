import React from "react";

export function SignInContent(props: { errorMessage: string }) {
  const errorMessage = props.errorMessage;
  return (
    <>
      <div className="row">
        <div className="col-3">
          <label>Email </label>
        </div>
        <div className="col-3">
          <input type="email" name="email" required />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <label>Password </label>
        </div>
        <div className="col-3">
          <input type="password" name="password" required />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div style={{ color: "red" }}>{errorMessage}</div>
        </div>
      </div>
    </>
  );
}
