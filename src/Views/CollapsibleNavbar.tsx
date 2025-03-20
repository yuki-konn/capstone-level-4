import React from "react";
import { NavLink } from "react-router";
import "./CollapsibleNavbar.scss";
import { SignInArea } from "./SignInArea";

export function CollapsibleNavbar() {
  const domain = window.location.hostname;
  let rootpath = "";
  if (domain === "yuki-konn.github.io") rootpath = "/capstone-project-level-3";

  return (
    <nav id="collapsibleNavbar" className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <div id="homeNavDiv" className="nav-item m-2">
          <NavLink
            className="navbar-brand"
            to={`${rootpath}/`}
            end
            aria-current="page"
          >
            <i className="bi bi-house"></i> Home
          </NavLink>
        </div>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink className="nav-item nav-link" to={`${rootpath}/shop`}>
              <i className="bi bi-shop"></i> Shop
            </NavLink>
            <NavLink className="nav-item nav-link" to={`${rootpath}/about`}>
              <i className="bi bi-info-circle"></i> About
            </NavLink>
            <NavLink className="nav-item nav-link" to={`${rootpath}/contact`}>
              <i className="bi bi-messenger"></i> Contact
            </NavLink>
            <SignInArea />
          </ul>
        </div>
      </div>
    </nav>
  );
}
