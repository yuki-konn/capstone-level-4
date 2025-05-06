import React from "react";

export function ContactFormContent() {
  return (
    <>
      <div className="row">
        <label className="col-2" htmlFor="contact-name" title="Required">
          Name *
        </label>
        <input
          required
          id="contact-name"
          className="col-10"
          type="text"
          name="contact-name"
          placeholder="John Smith"
        />
      </div>
      <div className="row">
        <label className="col-2" htmlFor="contact-email" title="Required">
          Email *
        </label>
        <input
          required
          id="contact-email"
          className="col-10"
          type="email"
          name="contact-email"
          placeholder="email@email.com"
        />
      </div>
      <div className="row">
        <label htmlFor="contact-comment">Comment (Optional)</label>
        <textarea id="contact-comment" className="w100"></textarea>
      </div>
      <fieldset>
        <legend>Tea Cup Rating (Optional)</legend>
        <div id="ratingDiv">
          <label htmlFor="rating-five">
            5 <i className="bi bi-cup-hot-fill"></i>
          </label>
          <input
            id="rating-five"
            name="ratings"
            type="radio"
            aria-label="5 cups of tea!"
          />
          <label htmlFor="rating-four">
            4 <i className="bi bi-cup-hot-fill"></i>
          </label>
          <input
            id="rating-four"
            name="ratings"
            type="radio"
            aria-label="4 cups of tea!"
          />
          <label htmlFor="rating-three">
            3 <i className="bi bi-cup-hot-fill"></i>
          </label>
          <input
            id="rating-three"
            name="ratings"
            type="radio"
            aria-label="3 cups of tea!"
          />
          <label htmlFor="rating-two">
            2 <i className="bi bi-cup-hot-fill"></i>
          </label>
          <input
            id="rating-two"
            name="ratings"
            type="radio"
            aria-label="2 cups of tea!"
          />
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
      </fieldset>
      <input className="w100" type="submit" />
    </>
  );
}
