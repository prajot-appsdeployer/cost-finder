import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { windowCustomizationPrice } from "../../redux/houseSlice";
import { useDispatch } from "react-redux";
import standard from "../../assets/customizations/Windows/standard.png";
import anodised from "../../assets/customizations/Windows/anodised.png";
import soundproof from "../../assets/customizations/Windows/soundproof.png";
import standardBathroom from "../../assets/customizations/Windows/bathroom/standard.png";
import anodisedBathroom from "../../assets/customizations/Windows/bathroom/anodised.png";
import soundproofBathroom from "../../assets/customizations/Windows/bathroom/soundproof.png";

export const Windows = ({ roomIndex, roomID }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const roomIndexChanged = roomIndex + 130;

  const image1 = () => {
    if (roomID === "masterbathroom" || roomID.includes("bathroom")) {
      return standardBathroom;
    } else {
      return standard;
    }
  };

  const image2 = () => {
    if (roomID === "masterbathroom" || roomID.includes("bathroom")) {
      return anodisedBathroom;
    } else {
      return anodised;
    }
  };

  const image3 = () => {
    if (roomID === "masterbathroom" || roomID.includes("bathroom")) {
      return soundproofBathroom;
    } else {
      return soundproof;
    }
  };

  const WindowsImages = [
    {
      id: 13,
      src: image1(),
      title: "Standard Power Coated MS Section",
      cost: 8000,
    },
    {
      id: 14,
      src: image2(),
      title: "Anodised Aluminum Section with Granite Framing",
      cost: 14000,
    },
    {
      id: 15,
      src: image3(),
      title: "Sound Proof Window Section with Granite Framing",
      cost: 20000,
    },
  ];

  return (
    <Card className="mt-2 p-2">
      <div>
        <Form.Check.Input onClick={() => setOpen(!open)} aria-expanded={open} />{" "}
        <Form.Check.Label>Windows</Form.Check.Label>
      </div>

      <Collapse in={open}>
        <div>
          <div className=" row mt-3  text-center justify-content-center">
            {WindowsImages.map((image, index) => (
              <div key={index} className="col-sm-4 image-container">
                <label>
                  <input type="radio" name={roomIndexChanged} />
                  <img
                    id={image.id}
                    src={image.src}
                    alt={image.title}
                    className="customize-images"
                    onClick={() => {
                      dispatch(windowCustomizationPrice({ image, roomID }));
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
