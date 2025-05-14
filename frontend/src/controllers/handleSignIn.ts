import axios from "axios";
import { getRootPathAws } from "../utils/getRootPathAws";
// import { authenticationAws } from "../modules/Contact/authenticationAws";

// FOR BACKEND AWS DYNAMODB
export async function handleSignIn(event: any, onSignIn: any) {
  event.preventDefault();

  const form = event.target;
  const email = event.target[1].value; // value of email input
  const password = event.target[2].value; // value of password input
  const closeButton = event.target[3];

  const rootpath = getRootPathAws();
  const route = "/authUser";
  const url = rootpath + route;
  const data = { email: email, password: password };

  const response = await axios.post(url, data);
  const isAuthenticated = response.data;

  if (isAuthenticated) {
    closeButton.click(); // Closes Modal
    form.reset(); // RESET FORM

    // Changes button to SignOutModal.
    onSignIn(); // Prop from SignInModal
  } else return false;
} // RESOLVE VALUE IS UNDEFINED BUT THE PROMISE RESOLVES AT THE END.
