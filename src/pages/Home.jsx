import React from "react";
import "../components/Home/Home.css";
import Button from "react-bootstrap/Button";

export const Home = () => {
  return (
    <>
      <div className="container mb-3">
        <h1 className="text-center mt-5 title">Budget your spend</h1>
        <p className="text-center mb-4">
          CostFinder helps you figure out your average spend based on the
          elements you like in your space.
        </p>

        <div className="mt-5 mb-4 row justify-content-between">
          <div className="card p-5 shadow col-md-5 text-center mb-3">
            <h5>Start with how many Bedrooms do you have?</h5>
            <div className="quantity-wrapper">
              <Button variant="success me-2">-</Button>
              <input
                type="text"
                className="text-center quantity-input"
                placeholder="1"
                minLength="0"
                maxLength="1"
              />
              <Button variant="success ms-2">+</Button>
            </div>
          </div>

          <div className=" card p-5 shadow col-md-5 text-center mb-3">
            <h5>Start with how many Bathrooms do you have?</h5>
            <div className=" quantity-wrapper">
              <Button variant="success me-2">-</Button>
              <input
                type="text"
                className="text-center quantity-input"
                placeholder="1"
                minLength="0"
                maxLength="1"
              />
              <Button variant="success ms-2">+</Button>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="mb-1">Assumed Carpet Area (Sq. ft.)</p>
          <p className="green-text mb-4">510 Sq. ft.</p>

          <p className="mb-1">Please enter your Carpet Area (Sq. ft.)</p>
          <input
            type="number"
            className="area-input ps-2 green-text mb-4"
            placeholder="300"
            min="300"
            required
          />

          <p>Assumed Configuration</p>

          <div className="row gap-3 justify-content-center  mb-4">
            {/* card */}
            <div
              className="col-md-12 card shadow-sm mb-3 p-1"
              style={{ width: "500px" }}
            >
              <div className="d-flex align-items-center justify-content-around">
                <img
                  src="http://costfinder.consdeployer.com/assets/roomselection/livingroom.PNG"
                  className="cardImg"
                  alt=""
                />
                <p className="card-text">Living Room</p>
                <p>1</p>
              </div>
            </div>

            <div
              className="col-md-12 card shadow-sm mb-3 p-1"
              style={{ width: "500px" }}
            >
              <div className="d-flex align-items-center justify-content-around">
                <img
                  src="http://costfinder.consdeployer.com/assets/roomselection/bedroom.png"
                  className="cardImg"
                  alt=""
                />
                <p className="card-text">Master Bedroom</p>
                <p>1</p>
              </div>
            </div>

            <div
              className="col-md-12 card shadow-sm mb-3 p-1"
              style={{ width: "500px" }}
            >
              <div className="d-flex align-items-center justify-content-around">
                <img
                  src="http://costfinder.consdeployer.com/assets/roomselection/bathroom.png"
                  className="cardImg"
                  alt=""
                />
                <p className="card-text">Master Bathroom</p>
                <p>1</p>
              </div>
            </div>

            <div
              className="col-md-12 card shadow-sm mb-3 p-1"
              style={{ width: "500px" }}
            >
              <div className="d-flex align-items-center justify-content-around">
                <img
                  src="http://costfinder.consdeployer.com/assets/roomselection/kitchen.png"
                  className="cardImg"
                  alt=""
                />
                <p className="card-text">Kitchen</p>
                <p>1</p>
              </div>
            </div>
          </div>

          <Button variant="success">Next &#8594; </Button>
        </div>
      </div>
    </>
  );
};
