import React from "react";

export function CreateAccountContent() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <span className="text-info">
            Required information is marked with *
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <label>Email*</label>
        </div>
        <div className="col-4">
          <input
            type="email"
            name="email"
            placeholder="johnsmith@email.com"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <label>Password*</label>
        </div>
        <div className="col-4">
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <label>User Name*</label>
        </div>
        <div className="col-4">
          <input type="text" name="userName" placeholder="Username" required />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <label>First Name</label>
        </div>
        <div className="col-4">
          <input type="text" name="firstName" placeholder="John" />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <label>Last Name</label>
        </div>
        <div className="col-4">
          <input type="text" name="lastName" placeholder="Smith" />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <label>Phone</label>
        </div>
        <div className="col-4">
          <input
            type="tel"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            placeholder="##########"
            name="phoneNumber"
          />
        </div>
      </div>
    </>
  );
}
