import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { bathroomDecrement, bathroomIncrement } from "../../redux/houseSlice";
import bathroomIcon from "../../assets/rooms/icons/bathroom.png";
import bathroomCover from "../../assets/rooms/cover/bathroombg.jpg";

function BathroomCounter() {
  const bathroomQuantity = useSelector((el) => el.home.bathroomQuantity);
  const dispatch = useDispatch();

  const bathroom = {
    image: bathroomIcon,
    title: ` Bathroom ${bathroomQuantity + 1}`,
    number: "1",
    cover: bathroomCover,
  };

  return (
    <div className=" card p-5 shadow col-md-5 text-center mb-3">
      <h5>Start with how many Bathrooms do you have?</h5>
      <div className=" quantity-wrapper">
        <Button
          variant="success me-2"
          onClick={() => {
            dispatch(bathroomDecrement());
          }}
        >
          -
        </Button>
        <input
          type="text"
          className="text-center quantity-input"
          placeholder={bathroomQuantity}
          minLength="0"
          maxLength="2"
          min="0"
          disabled
        />
        <Button
          variant="success ms-2"
          onClick={() => {
            dispatch(bathroomIncrement(bathroom));
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default BathroomCounter;
