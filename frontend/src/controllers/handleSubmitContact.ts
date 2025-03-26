// import { parseContactResponse } from "../modules/parseContactResponse.js";
// import { makeRequest } from "../utils/makeRequest.js";
// import { output } from "../utils/output.js";
// import React from "react";

// CONTACT FORM SUBMIT HANDLER
// export function handleSubmitContact(event = new Event()) {
// event.preventDefault();
// const name = event.target[0].value;
// const email = event.target[1].value;
// const comment = event.target[2].value;
// const fiveStar = event.target[4].ariaLabel;
// const fourStar = event.target[5].ariaLabel;
// const threeStar = event.target[6].ariaLabel;
// const twoStar = event.target[7].ariaLabel;
// const oneStar = event.target[8].ariaLabel;
// const rating = [fiveStar, fourStar, threeStar, twoStar, oneStar];
// const ratingFieldSet = event.target[3].elements;
// // CHECKS TO SEE IF THE outputTag IS EMPTY OR NOT
// const outputTag = document.getElementById("outputTag");
// const isEmpty = outputTag.childNodes.length === 0;
// if (isEmpty) {
//   output("<b style='color: gold'>Processing contact form...<b><br>");
//   output("<br><u>Form Info<u><br>");
//   output(`Name: ${name}<br>`);
//   output(`Email: ${email}<br>`);
//   // CHECKS TO SEE IF TEXTAREA IS EMPTY
//   if (comment === "") {
//     output("");
//   } else {
//     output(`Comment: ${comment}<br>`);
//   }
//   // CHECKS TO SEE WHICH RADIO BUTTON IS SELECTED
//   for (let position = 0; position <= 4; position++) {
//     if (ratingFieldSet[position].checked) {
//       output(`Rating: ${rating[position]}<br>`);
//       console.log(`${rating[position]} rating is selected.`);
//     } else;
//   }
//   output("--------------<br><br>");
//   // PROMISE
//   const promise = makeRequest("https://myserver.com");
//   // RESPONSE FROM SERVER
//   promise.then(parseContactResponse);
// } else {
// }
// }
