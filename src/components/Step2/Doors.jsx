import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { doorCustomizationPrice } from "../../redux/houseSlice";
import { useDispatch } from "react-redux";
import polish from "../../assets/customizations/Doors/polish.png";
import polishnew from "../../assets/customizations/Doors/polishnew.png";
import newdoor from "../../assets/customizations/Doors/newdoor.png";
import slidingdoor from "../../assets/customizations/Doors/slidingdoor.png";

export const Doors = ({ roomIndex, roomID }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const roomIndexChanged = roomIndex + 140;

  const image3 = () => {
    if (roomID === "kitchen") {
      return slidingdoor;
    } else {
      return newdoor;
    }
  };

  const DoorsImages = [
    {
      id: 16,
      src: polish,
      title: "Standard Power Coated MS Section",
      cost: 9000,
    },
    {
      id: 17,
      src: polishnew,
      title: "Anodised Aluminum Section with Granite Framing",
      cost: 27000,
    },
    {
      id: 18,
      src: image3(),
      title: "Sound Proof Window Section with Granite Framing",
      cost: 55000,
    },
  ];

  return (
    <Card className="mt-2 p-2">
      <div>
        <Form.Check.Input onClick={() => setOpen(!open)} aria-expanded={open} />{" "}
        <Form.Check.Label>Doors</Form.Check.Label>
      </div>

      <Collapse in={open}>
        <div>
          <div className=" row mt-3  text-center justify-content-center">
            {DoorsImages.map((image, index) => (
              <div key={index} className="col-sm-4 image-container">
                <label>
                  <input type="radio" name={roomIndexChanged} />
                  <img
                    id={image.id}
                    src={image.src}
                    alt={image.title}
                    className="customize-images"
                    onClick={() => {
                      dispatch(doorCustomizationPrice({ image, roomID }));
                    }}
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
