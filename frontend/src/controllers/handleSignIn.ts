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

  // Determines if local or GitHub Pages
  const domain = window.location.hostname;
  let rootpath: string = "http://localhost:8000";
  if (domain === "yuki-konn.github.io")
    rootpath =
      "https://qyxgfxhby4ejikmfmdtzmkjnrq0yazfh.lambda-url.us-east-2.on.aws";

  // SENDS QUERY WITH EMAIL AND PASSWORD TO /authUser ROUTE IN BACKEND
  const path: string = `${rootpath}/authUser?email=${email}&password=${password}`;
  const response = await axios.get(path);
  const isAuthenticated = response.data;

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
