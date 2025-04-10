import axios from "axios";
// import { authenticationAws } from "../modules/Contact/authenticationAws";

// FOR BACKEND AWS DYNAMODB
// WHEN async IS CALLED IT RETURNS A NEW PROMISE, WHICH WILL BE RESOLVED BY THE VALUE RETURNED BY THE ASYNC FUNCTION.
export async function handleSignIn(
  event: any,
  onSignIn: any,
  setErrorMessage: any
) {
  event.preventDefault();

  const form = event.target;
  const email = event.target[1].value; // value of email input
  const password = event.target[2].value; // value of password input

  const closeButton = event.target[3];

  // SENDS QUERY WITH EMAIL AND PASSWORD TO /authUser ROUTE IN BACKEND
  const path = `http://localhost:8000/authUser?email=${email}&password=${password}`;
  debugger;
  const response = await axios.get(path);
  const isAuthenticated = response.data;
  debugger;

  if (isAuthenticated) {
    // Closes Modal
    closeButton.click();

    // RESET FORM
    form.reset();

    // Changes button to SignOutModal.
    onSignIn(); // Prop from SignInModal
  } else setErrorMessage("The email or password is incorrect.");
} // RESOLVE VALUE IS UNDEFINED BUT THE PROMISE RESOLVES AT THE END.

// FOR FRONTEND AWS DYNAMODB
// // WHEN async IS CALLED IT RETURNS A NEW PROMISE, WHICH WILL BE RESOLVED BY THE VALUE RETURNED BY THE ASYNC FUNCTION.
// export async function handleSignIn(
//   event: any,
//   onSignIn: any,
//   setErrorMessage: any
// ) {
//   event.preventDefault();

//   const form = event.target;
//   const email = event.target[1].value; // value of email input
//   const password = event.target[2].value; // value of password input

//   const closeButton = event.target[3];

//   // RESOLVE VALUE BOOLEAN
//   // WAITS UNTIL PROMISE OF authenticationAws IS FULLFILLED.,
//   //   THEN PLACES RESOLVE VAUE INTO isAuthenticated.
//   const isAuthenticated: boolean = await authenticationAws(email, password);
//   if (isAuthenticated) {
//     // Closes Modal
//     closeButton.click();

//     // RESET FORM
//     form.reset();

//     // Changes button to SignOutModal.
//     onSignIn(); // Prop from SignInModal
//   } else setErrorMessage("The email or password is incorrect.");
// } // RESOLVE VALUE IS UNDEFINED BUT THE PROMISE RESOLVES AT THE END.
