import React from "react";

export function ContactFormContent() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <div className="row">
              <div className="col">
                <h2 className="textShadow text-center">Contact Form</h2>
              </div>
            </div>
          </div>
          <div className="card-text">
            <div className="row">
              <div className="col-4">
                <label htmlFor="contact-name" title="Required">
                  Name *
                </label>
              </div>
              <div className="col-8">
                <input
                  required
                  id="contact-name"
                  type="text"
                  name="contact-name"
                  placeholder="John Smith"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label htmlFor="contact-email" title="Required">
                  Email *
                </label>
              </div>
              <div className="col-8">
                <input
                  required
                  id="contact-email"
                  type="email"
                  name="contact-email"
                  placeholder="email@email.com"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label htmlFor="contact-comment">Comment (Optional)</label>
              </div>
              <div className="col-8">
                <textarea id="contact-comment" className="w100"></textarea>
              </div>
            </div>
            <fieldset>
              <div className="row">
                <div className="col">
                  <legend>Tea Cup Rating (Optional)</legend>
                </div>
              </div>
              <div id="ratingDiv" className="row">
                <div className="col">
                  <label htmlFor="rating-five">
                    5 <i className="bi bi-cup-hot-fill"></i>
                  </label>
                  <input
                    id="rating-five"
                    name="ratings"
                    type="radio"
                    aria-label="5 cups of tea!"
                  />
                </div>
                <div className="col">
                  <label htmlFor="rating-four">
                    4 <i className="bi bi-cup-hot-fill"></i>
                  </label>
                  <input
                    id="rating-four"
                    name="ratings"
                    type="radio"
                    aria-label="4 cups of tea!"
                  />
                </div>
                <div className="col">
                  <label htmlFor="rating-three">
                    3 <i className="bi bi-cup-hot-fill"></i>
                  </label>
                  <input
                    id="rating-three"
                    name="ratings"
                    type="radio"
                    aria-label="3 cups of tea!"
                  />
                </div>
                <div className="col">
                  <label htmlFor="rating-two">
                    2 <i className="bi bi-cup-hot-fill"></i>
                  </label>
                  <input
                    id="rating-two"
                    name="ratings"
                    type="radio"
                    aria-label="2 cups of tea!"
                  />
                </div>
                <div className="col">
                  <label htmlFor="rating-one">
                    1 <i className="bi bi-cup-hot-fill"></i>
                  </label>
                  <input
                    id="rating-one"
                    name="ratings"
                    type="radio"
                    aria-label="1 cup of tea!"
                  />
                </div>
              </div>
            </fieldset>
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
