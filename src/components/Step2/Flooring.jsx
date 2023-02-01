import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { flooringPrice } from "../../redux/houseSlice";
import { useDispatch } from "react-redux";
import vitrifiedImage from "../../assets/customizations/Flooring/vitrified.png";
import woodenImage from "../../assets/customizations/Flooring/wooden.png";
import italianImage from "../../assets/customizations/Flooring/italian.png";

export const Flooring = ({ roomIndex, roomID }) => {
  const [openFlorring, setOpenFlooring] = useState(false);
  const dispatch = useDispatch();

  const FlooringImages = [
    {
      id: 1,
      src: vitrifiedImage,
      title: "Vitrified Tiles",
      cost: 32000,
      active: false,
    },
    {
      id: 2,
      src: woodenImage,
      title: "Wooden Flooring",
      cost: 28000,
      active: false,
    },
    {
      id: 3,
      src: italianImage,
      title: "Italian Marble",
      cost: 55000,
      active: false,
    },
  ];

  return (
    <Card className="mt-2 p-2">
      <div>
        <Form.Check.Input
          onClick={() => setOpenFlooring(!openFlorring)}
          aria-expanded={openFlorring}
        />{" "}
        <Form.Check.Label>Flooring</Form.Check.Label>
      </div>

      <Collapse in={openFlorring}>
        <div>
          <div className=" row mt-3  text-center justify-content-center">
            {FlooringImages.map((image, index) => (
              <div key={index} className="col-sm-4 image-container">
                <label>
                  <input
                    type="radio"
                    name={roomIndex}
                    onClick={() => {
                      dispatch(flooringPrice({ image, roomID }));
                    }}
                  />
                  <img
                    id={image.id}
                    src={image.src}
                    alt={image.title}
                    className="customize-images"
                  />
                  <p className="image-title">{image.title}</p>
                </label>
              </div>
            ))}
          </div>
        </div>
      </Collapse>
    </Card>
  );
};
