import React from "react";
import "./step2.css";
import { Flooring } from "./Flooring";
import { Walls } from "./Walls";
import { Ceiling } from "./Ceiling";
import { Electrical } from "./Electrical";
import { Windows } from "./Windows";
import { Doors } from "./Doors";
import { Furniture } from "./Furniture";

export const CustomizeRoom = ({ roomIndex, roomID }) => {
  return (
    <>
      <Flooring roomIndex={roomIndex} roomID={roomID} />

      <Walls roomIndex={roomIndex} roomID={roomID} />

      <Ceiling roomIndex={roomIndex} roomID={roomID} />

      <Electrical roomIndex={roomIndex} roomID={roomID} />

      <Windows roomIndex={roomIndex} roomID={roomID} />

      <Doors roomIndex={roomIndex} roomID={roomID} />

      <Furniture roomIndex={roomIndex} roomID={roomID} />
    </>
  );
};
