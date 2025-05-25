import React from "react";

export function SignInContent(props: { errorMessage: string }) {
  const errorMessage = props.errorMessage;
  return (
    <>
      <label>Email: </label>
      <input type="email" name="email" required /> <br />
      <label>Password: </label>
      <input type="password" name="password" required />
      <div style={{ color: "red" }}>{errorMessage}</div>
    </>
  );
}
