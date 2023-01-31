import React from "react";
import "./step2.css";
import { Flooring } from "./Flooring";
import { Walls } from "./Walls";

export const CustomizeRoom = ({ roomIndex, roomID }) => {
  return (
    <>
      {/* Flooring */}
      <Flooring roomIndex={roomIndex} roomID={roomID} />
      {/* Walls */}
      <Walls roomIndex={roomIndex} roomID={roomID} />
    </>
  );
};
