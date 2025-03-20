import React from "react";

export function SignInContent(props) {
  const errorMessage = props.errorMessage; // Prop from SignInModal
  return (
    <>
      <label>Email: </label>
      <input type="email" required /> <br />
      <label>Password: </label>
      <input type="password" required />
      <div style={{ color: "red" }}>{errorMessage}</div>
    </>
  );
}
