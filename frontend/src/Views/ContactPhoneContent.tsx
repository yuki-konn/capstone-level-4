import React from "react";

export function ContactPhoneContent() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <div className="row">
              <div className="col">
                <h2 className="textShadow text-center">
                  <i className="bi bi-telephone"></i>Schedule a Phone
                  Appointment
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label htmlFor="phone-name" title="Required">
                  Name *
                </label>
              </div>
              <div className="col-8">
                <input
                  required
                  id="phone-name"
                  type="text"
                  name="phone-name"
                  placeholder="John Smith"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label htmlFor="phone-number" title="Required">
                  Phone Number *
                </label>
              </div>
              <div className="col-8">
                <input
                  required
                  id="phone-number"
                  type="tel"
                  name="phone-number"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="###-###-####"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label htmlFor="phone-date-time" title="Required">
                  Appointment Time *
                </label>
              </div>
              <div className="col-8">
                <input required id="phone-date-time" type="datetime-local" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input type="submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
