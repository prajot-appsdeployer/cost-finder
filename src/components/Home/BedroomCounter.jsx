import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { bedroomDecrement, bedroomIncrement } from "../../redux/houseSlice";

function BedroomCounter() {
  const [count, setCount] = useState(1);
  const home = useSelector((c) => c.home.house);
  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      return count;
    }
  };

  const bedroom = {
    image:
      "http://costfinder.consdeployer.com/assets/roomselection/bedroom.png",
    title: ` Bedroom ${count + 1}`,
    number: "1",
  };

  return (
    <div className="card p-5 shadow col-md-5 text-center mb-3">
      <h5>Start with how many Bedrooms do you have?</h5>
      <div className="quantity-wrapper">
        <Button
          variant="success me-2"
          onClick={() => {
            dispatch(bedroomDecrement(count));
            decrement();
          }}
        >
          -
        </Button>
        <input
          type="text"
          className="text-center quantity-input"
          placeholder={count}
          minLength="0"
          maxLength="2"
          min="0"
          disabled
        />
        <Button
          variant="success ms-2"
          onClick={() => {
            dispatch(bedroomIncrement(bedroom));
            increment();
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default BedroomCounter;
