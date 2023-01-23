import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import { NavSteps } from "./NavSteps";

function NavBar() {
  return (
    <>
      <div className="site-navbar">
        <div className="top-nav p-1 pb-3  d-flex gap-1 justify-content-center align-items-center">
          <img src={logo} width="80px" alt="" />
          <div>
            <h3 className="display-3 fs-4 mb-0 ">5ELEMENTS</h3>
            <h3 className="mb-0">COST FINDER</h3>
          </div>
        </div>

        <div className="d-flex steps-navlinks justify-content-center ">
          <NavSteps stepNum="1" stepPath="/" stepName="Space Details" />
          <NavSteps stepNum="2" stepPath="/step2" stepName="Your Needs" />
          <NavSteps stepNum="3" stepPath="/step3" stepName="Get Estimate" />
        </div>
      </div>
    </>
  );
}

export default NavBar;
