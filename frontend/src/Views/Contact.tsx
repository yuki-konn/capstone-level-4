import React, { useEffect } from "react";
import { handleSubmitPhone } from "../controllers/handleSubmitPhone";
import "./Contact.scss";
import "./AiInterfaceArea.scss";
import { getCheckedRadio } from "../modules/Contact/getCheckedRadio";
import { getServerFeedback } from "../modules/Contact/getServerFeedback";
import { useDispatch, useSelector } from "react-redux";
import {
  selectContactCommentArea,
  selectContactDidMount,
  selectContactFormData1,
  selectContactFormEmail,
  selectContactFormName,
  selectContactRadioArea,
  selectContactResponse,
} from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";
import { ContactFormContent } from "./ContactFormContent";
import { ContactPhoneContent } from "./ContactPhoneContent";
import { AiInterfaceArea } from "./AiInterfaceArea";
// import { handleSubmitContact } from "../controllers/handleSubmitContact";
// import { databaseSimulation } from "../modules/Contact/databaseSimulation";

export function Contact() {
  const didMount = useSelector(selectContactDidMount);
  // SELECTORS FOR CONTACT FORM
  let contactFormData: any = useSelector(selectContactFormData1);
  const contactFormName = useSelector(selectContactFormName);
  const contactFormEmail = useSelector(selectContactFormEmail);
  let contactFormComment: any = useSelector(selectContactCommentArea);
  let contactFormRadio: any = useSelector(selectContactRadioArea);
  let contactFormResponse: any = useSelector(selectContactResponse);

  const dispatch = useDispatch();

  // LIFECYCLE COMPONENTS
  useEffect(componentDidMount, []); // MOUNT HOOK
  useEffect(componentDidUpdate, [didMount, contactFormName]); // UPDATE HOOK
  useEffect(componentDidUnmount, []); // UNMOUNT HOOK

  if (contactFormData === "contactFormData") {
    contactFormData = (
      <>
        <b style={{ color: "green" }}>{contactFormResponse}</b>
        <br />
        <div>
          <span>
            <u>Form Info</u>
          </span>
          <br />
          <span>Name: {contactFormName}</span>
          <br />
          <span>Email: {contactFormEmail}</span>
          <br />
          <span>Comment: {contactFormComment}</span>
          <br />
          <span>Rating: {contactFormRadio}</span>
          <br />
          --------------
          <br />
        </div>
      </>
    );
  }

  return (
    <main id="contactMain" className="container-lg">
      <AiInterfaceArea />
      <h1 className="text-center border-bottom border-3 border-dark">
        Contact Us
      </h1>
      <section>
        <h2 className="textShadow">Contact Form</h2>
        <form id="form1" onSubmit={handleSubmitContact}>
          <ContactFormContent />
        </form>
        <br />
        <div
          id="outputTag1"
          className="border border-3 border-dark text-center"
        >
          {contactFormData}
        </div>

        <br />
      </section>
      <section>
        <h2 className="textShadow">
          <i className="bi bi-telephone"></i> Schedule a Phone Appointment
        </h2>

        <form onSubmit={handleSubmitPhone as any}>
          <ContactPhoneContent />
        </form>
        <br />
        <div
          id="phoneOutputTag"
          className="border border-3 border-dark text-center"
        >
          {/* {formOutput2} */}
        </div>
        <br />
      </section>
    </main>
  );

  // MOUNT PHASE
  function componentDidMount() {
    document.title = "Yuki Tea Shop | CONTACT";
    console.log("The Contact component has mounted.");
    let action = set.contactDidMount(true);
    dispatch(action);
  }

  // UPDATE PHASE
  function componentDidUpdate() {
    if (didMount) {
      console.log("The Contact component has updated.");
      // RUNS AFTER handleSubmitContact IS CLICKED.
      if (contactFormName) {
        let action = set.contactFormData1("contactFormData");
        dispatch(action);
      }
    }
  }

  function handleSubmitContact(event: any) {
    event.preventDefault();

    const name = event.target[0].value;
    const email = event.target[1].value;
    const comment = event.target[2].value;
    const outputTag = document.getElementById("outputTag1");

    // MAKES SUBMISSION NOT DISPLAY MORE THAN ONCE
    const isEmpty = outputTag.children.length === 0;
    if (isEmpty) {
      let action = set.contactFormName(name);
      dispatch(action);
      action = set.contactFormEmail(email);
      dispatch(action);

      // ADDS INPUTTED COMMENT
      action = set.contactCommentArea(comment);
      dispatch(action);

      // CHECKS TO SEE WHICH RADIO BUTTON IS SELECTED
      const ratingFeedback = getCheckedRadio(event);
      // ADDS INPUTTED RATING
      action = set.contactRadioArea(ratingFeedback);
      dispatch(action);

      // SERVER DATA RETRIEVAL
      const serverFeedback = getServerFeedback(event);

      // CHANGES FROM PROCESSING TO SUCCESSFULLY SUBMITTED
      action = set.contactResponse(serverFeedback);
      dispatch(action);
    }
  }

  // UNMOUNT PHASE
  function componentDidUnmount() {
    return function () {
      console.log("The Contact component has unmounted.");
      let action = set.contactDidMount(false);
      dispatch(action);
    };
  }
}
