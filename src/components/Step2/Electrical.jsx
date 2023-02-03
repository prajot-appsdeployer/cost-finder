import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { electricalCustomizationPrice } from "../../redux/houseSlice";
import { useDispatch } from "react-redux";
import relocation from "../../assets/customizations/Electrical/relocation.png";
import newwiring from "../../assets/customizations/Electrical/newwiring.png";
import automation from "../../assets/customizations/Electrical/automation.png";

export const Electrical = ({ roomIndex, roomID }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const roomIndexChanged = roomIndex + 120;

  const ElectricalImages = [
    {
      id: 10,
      src: relocation,
      title: "Relocation of Existing Switches",
      cost: 6400,
    },
    {
      id: 11,
      src: newwiring,
      title: "New Wiring and Switches",
      cost: 9600,
    },
    {
      id: 12,
      src: automation,
      title: "New Wire and Switches with Automation",
      cost: 19600,
    },
  ];

  return (
    <Card className="mt-2 p-2">
      <div>
        <Form.Check.Input onClick={() => setOpen(!open)} aria-expanded={open} />{" "}
        <Form.Check.Label>Electrical</Form.Check.Label>
      </div>

      <Collapse in={open}>
        <div>
          <div className=" row mt-3  text-center justify-content-center">
            {ElectricalImages.map((image, index) => (
              <div key={index} className="col-sm-4 image-container">
                <label>
                  <input type="radio" name={roomIndexChanged} />
                  <img
                    id={image.id}
                    src={image.src}
                    alt={image.title}
                    className="customize-images"
                    onClick={() => {
                      dispatch(electricalCustomizationPrice({ image, roomID }));
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
