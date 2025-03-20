import React from "react";
import { NavLink } from "react-router";

export function Navbar() {
  const domain = window.location.hostname;
  let rootpath = "";
  if (domain === "yuki-konn.github.io") rootpath = "/capstone-project-level-3";
  return (
    <nav id="regularNavbar" className="nav nav-tabs nav-fill bg-dark">
      <NavLink
        to={`${rootpath}/`}
        end
        className="nav-link fw-bold text-success"
      >
        HOME
      </NavLink>
      <NavLink
        to={`${rootpath}/shop`}
        className="nav-link fw-bold text-success"
      >
        SHOP
      </NavLink>
      <NavLink
        to={`${rootpath}/about`}
        className="nav-link fw-bold text-success"
      >
        ABOUT
      </NavLink>
      <NavLink
        to={`${rootpath}/contact`}
        className="nav-link fw-bold text-success"
      >
        CONTACT
      </NavLink>
    </nav>
  );
}
