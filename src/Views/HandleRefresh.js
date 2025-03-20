import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

/*************************************************
 * @summary Removes the 404 error on SPA refresh
 * @param props.children The elements to render on refresh
 * @description
 * This component depends on the local storage used by redirect.js
 * In redirect.js, properly set the root path.
 */
export function HandleRefresh(props) {
  // `props.children` is everything nested in `<HandleRefresh>` in index.js
  const children = props.children;
  // useNavigate() HOOK - GIVES FUNCTIONS THE ABILITY TO ACCESS BROWSER ROUTER.
  // useNavigate() returns a function
  const navigateTo = useNavigate();
  const [didMount, setDidMount] = useState(false);
  useEffect(componentDidMount, []);

  // RENDERS THE `children`
  if (didMount) return <>{children}</>;
  else return <></>;

  function componentDidMount() {
    // PATH NAME SAVED UNDER "redirect" IN LOCAL STORAGE.
    // localStorage.getItem - returns the value of a key in browser history.
    const redirectPath = localStorage.getItem("redirect");
    // CONDITION TO CHECK FOR `redirect` PATH NAME IN LOCAL STORAGE
    if (redirectPath) {
      // BROWSERROUTER LOADS SPECIFIED PATH
      // navigateTo - ACCEPTS PATH STRING FROM LOCAL STORAGE
      navigateTo(redirectPath);
      // NAVIGATES TO SAVED PATH NAME, THEN CLEAR THE VALUE.
      // localStorage.setItem - stores a key and value into the browser.
      localStorage.setItem("redirect", "");
      // `setTimeOut` DELAYS THE RENDERING OF `HandleRefresh` CHILDREN IF THERE'S A PATH NAME.
      setTimeout(() => setDidMount(true), 1000);
    } else setDidMount(true);
  }
}
