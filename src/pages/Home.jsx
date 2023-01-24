import React, { useState } from "react";
import "../components/Home/Home.css";
import Button from "react-bootstrap/Button";
import HomeCard from "../components/Home/HomeCard";
import { useSelector } from "react-redux";
import BedroomCounter from "../components/Home/BedroomCounter";
import BathroomCounter from "../components/Home/BathroomCounter";
import { NavLink, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const home = useSelector((el) => el.home.house);
  const carpetArea = useSelector((el) => el.home.carpetArea);

  const [carpetAreaInput, setcarpetAreaInput] = useState(0);

  const carpetAreaInputValue = (e) => {
    setcarpetAreaInput(e.target.value);
  };

  const handleSubmit = () => {
    if (carpetAreaInput < 300) {
      alert("Please enter valid input.");
    } else {
      navigate("/step2");
    }
  };

  return (
    <>
      <div className="container mb-3">
        <h1 className="text-center mt-5 title">Budget your spend</h1>
        <p className="text-center mb-4">
          CostFinder helps you figure out your average spend based on the
          elements you like in your space.
        </p>

        <div className="mt-5 mb-4 row justify-content-between">
          <BedroomCounter />
          <BathroomCounter />
        </div>

        <form className=" mt-4 text-center" onSubmit={() => handleSubmit()}>
          <p className="mb-1">Assumed Carpet Area (Sq. ft.)</p>
          <p className="green-text mb-4">{carpetArea} Sq. ft.</p>

          <p className="mb-1">Please enter your Carpet Area (Sq. ft.)</p>
          <input
            type="number"
            className="area-input ps-2 green-text mb-4"
            placeholder="0"
            value={carpetAreaInput}
            onChange={(e) => carpetAreaInputValue(e)}
            min="300"
            required
          />

          <p>Assumed Configuration</p>
          <div className="row gap-3 justify-content-center  mb-4">
            {/* cards */}

            {home.map((room, index) => {
              return <HomeCard key={index} {...room} room={room} />;
            })}
          </div>

          <Button variant="success" type="submit">
            Next &#8594;{" "}
          </Button>
        </form>
      </div>
    </>
  );
};
