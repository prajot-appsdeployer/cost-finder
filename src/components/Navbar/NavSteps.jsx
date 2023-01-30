import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export const NavSteps = (props) => {
  return (
    <NavLink
      onClick={(e) => e.preventDefault()}
      className="step-link pe-none user-select-none"
      to={props.stepPath}
    >
      <span className="display-5 fw-bold fs-5"> {props.stepNum}</span>{" "}
      {props.stepName}
    </NavLink>
  );
};
