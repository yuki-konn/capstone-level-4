import React from "react";

export function CreateAccountContent() {
  return (
    <>
      <span>Required information is marked with *</span>
      <br />
      <div>
        <label style={{ width: "25%" }}>Email * </label>
        <input type="email" placeholder="johnsmith@email.com" required />
      </div>
      <div>
        <label style={{ width: "25%" }}>Password * </label>
        <input type="password" placeholder="password" required />
      </div>
      <div>
        <label style={{ width: "25%" }}>User Name * </label>
        <input type="text" placeholder="Username" required />
      </div>
      <div>
        <label style={{ width: "25%" }}>First Name </label>
        <input type="text" placeholder="John" />
      </div>
      <div>
        <label style={{ width: "25%" }}>Last Name </label>
        <input type="text" placeholder="Smith" />
      </div>
      <div>
        <label style={{ width: "25%" }}>Phone Number </label>
        <input
          type="tel"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          placeholder="##########"
        />
      </div>
    </>
  );
}
