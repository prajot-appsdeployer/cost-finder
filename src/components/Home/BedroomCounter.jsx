import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { bedroomDecrement, bedroomIncrement } from "../../redux/houseSlice";
import bedroomIcon from "../../assets/rooms/icons/bedroom.png";
import bedroomCover from "../../assets/rooms/cover/bedroombg.jpg";

function BedroomCounter() {
  const bedroomQuantity = useSelector((el) => el.home.bedroomQuantity);
  const dispatch = useDispatch();

  const bedroom = {
    image: bedroomIcon,
    title: ` Bedroom ${bedroomQuantity + 1}`,
    number: "1",
    cover: bedroomCover,
  };

  return (
    <div className="card p-5 shadow col-md-5 text-center mb-3">
      <h5>Start with how many Bedrooms do you have?</h5>
      <div className="quantity-wrapper">
        <Button
          variant="success me-2"
          onClick={() => {
            dispatch(bedroomDecrement());
          }}
        >
          -
        </Button>
        <input
          type="text"
          className="text-center quantity-input"
          placeholder={bedroomQuantity}
          minLength="0"
          maxLength="2"
          min="0"
          disabled
        />
        <Button
          variant="success ms-2"
          onClick={() => {
            dispatch(bedroomIncrement(bedroom));
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default BedroomCounter;
