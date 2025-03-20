/**************************************************************
 * @summary Redirects the SPA to the root path
 * @param rootPath Set this to the correct root path
 * @description
 * Useful when an SPA page is refreshed.
 * Load this module through 404.html to redirect on 404 errors.
 * By redirecting to the root path, 404 errors are removed.
 * Use Redirect.js to redirect to the path where the 404 occured.
 **************************************************************/

// 1. GITHUB REPO NAME IS `rootPath`
const rootPath = "/capstone-project-level-3";
// 2. CURRENT URL IS `path`
// window.location.pathname contains current path in the url.
const path = window.location.pathname;
// 3. SAVES `path` to the local storage.
// The property name is "redirect". The value is path
// localStorage.setItem - stores a key and value into the browser.
window.localStorage.setItem("redirect", path);
// 4. THE 404 FILE IS GOING TO LOAD THIS FILE AND REDIRECT IT TO THE `rootPath` WHICH IS THE HOME PAGE.
// window.location.replace - method that loads a url or path.
// WHEN `replace` IS ACTIVATED, A PAGE RELOAD IS TRIGGERED.
window.location.replace(rootPath);
