import React from "react";
import "../components/Home/Home.css";
import Button from "react-bootstrap/Button";
import HomeCard from "../components/Home/HomeCard";
import { useSelector } from "react-redux";
import BedroomCounter from "../components/Home/BedroomCounter";
import BathroomCounter from "../components/Home/BathroomCounter";

export const Home = () => {
  const home = useSelector((c) => c.home.house);

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

        <form className=" mt-4 text-center" onSubmit={() => {}}>
          <p className="mb-1">Assumed Carpet Area (Sq. ft.)</p>
          <p className="green-text mb-4">510 Sq. ft.</p>

          <p className="mb-1">Please enter your Carpet Area (Sq. ft.)</p>
          <input
            type="number"
            className="area-input ps-2 green-text mb-4"
            placeholder="0"
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

          <Button variant="success">Next &#8594; </Button>
        </form>
      </div>
    </>
  );
};
