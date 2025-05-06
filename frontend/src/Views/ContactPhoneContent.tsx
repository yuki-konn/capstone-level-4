import React from "react";

export function ContactPhoneContent() {
  return (
    <>
      <div className="row">
        <label className="col-2" htmlFor="phone-name" title="Required">
          Name *
        </label>
        <input
          required
          id="phone-name"
          className="col-10"
          type="text"
          name="phone-name"
          placeholder="John Smith"
        />
      </div>
      <div className="row">
        <label className="col-2" htmlFor="phone-number" title="Required">
          Phone Number *
        </label>
        <input
          required
          id="phone-number"
          className="col-10"
          type="tel"
          name="phone-number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="###-###-####"
        />
      </div>
      <div className="row">
        <label className="col-2" htmlFor="phone-date-time" title="Required">
          Appointment Time *
        </label>
        <input
          required
          id="phone-date-time"
          className="col-10"
          type="datetime-local"
        />
      </div>
      <input className="w100" type="submit" />
    </>
  );
}
