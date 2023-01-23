import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export const NavSteps = (props) => {
  return (
    <NavLink className="step-link" to={props.stepPath}>
      <span className="display-5 fw-bold fs-5"> {props.stepNum}</span>{" "}
      {props.stepName}
    </NavLink>
  );
};
