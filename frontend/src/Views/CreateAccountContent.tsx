import React from "react";

export function CreateAccountContent() {
  return (
    <>
      <span>Required information is marked with *</span>
      <br />
      <div className="text-center">
        <label className="text-start" style={{ width: "25%" }}>
          Email *{" "}
        </label>
        <input
          type="email"
          name="email"
          placeholder="johnsmith@email.com"
          required
        />
      </div>
      <div className="text-center">
        <label className="text-start" style={{ width: "25%" }}>
          Password *{" "}
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
      </div>
      <div className="text-center">
        <label className="text-start" style={{ width: "25%" }}>
          User Name *{" "}
        </label>
        <input type="text" name="userName" placeholder="Username" required />
      </div>
      <div className="text-center">
        <label className="text-start" style={{ width: "25%" }}>
          First Name{" "}
        </label>
        <input type="text" name="firstName" placeholder="John" />
      </div>
      <div className="text-center">
        <label className="text-start" style={{ width: "25%" }}>
          Last Name{" "}
        </label>
        <input type="text" name="lastName" placeholder="Smith" />
      </div>
      <div className="text-center">
        <label className="text-start" style={{ width: "25%" }}>
          Phone Number{" "}
        </label>
        <input
          type="tel"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          placeholder="##########"
          name="phoneNumber"
        />
      </div>
    </>
  );
}
