import React from "react";
import "./step2.css";
import { Flooring } from "./Flooring";
import { Walls } from "./Walls";

export const CustomizeRoom = ({ roomIndex }) => {
  return (
    <>
      {/* Flooring */}
      <Flooring roomIndex={roomIndex} />
      {/* Walls */}
      <Walls roomIndex={roomIndex} />
    </>
  );
};
