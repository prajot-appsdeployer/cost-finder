import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { ceilingCustomizationPrice } from "../../redux/houseSlice";
import { useDispatch } from "react-redux";
import ceiling1 from "../../assets/customizations/Ceiling/painting.png";
import ceiling2 from "../../assets/customizations/Ceiling/falseceiling.png";
import ceiling3 from "../../assets/customizations/Ceiling/designerfalseceiling.png";
import ceiling1Kitchen from "../../assets/customizations/Ceiling/kitchen/painting.png";
import ceiling2Kitchen from "../../assets/customizations/Ceiling/kitchen/falseceiling.png";
import ceiling3Kitchen from "../../assets/customizations/Ceiling/kitchen/designerceiling.png";
import ceiling1Bathroom from "../../assets/customizations/Ceiling/bathroom/painting.png";
import ceiling2Bathroom from "../../assets/customizations/Ceiling/bathroom/ceiling.png";
import ceiling3Bathroom from "../../assets/customizations/Ceiling/bathroom/metallicceiling.png";

export const Ceiling = ({ roomIndex, roomID }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const roomIndexChanged = roomIndex + 110;

  const image1 = () => {
    if (roomID === "kitchen") {
      return {
        image: ceiling1Kitchen,
        title: "Painting",
        cost: 9120,
      };
    } else if (roomID === "masterbathroom" || roomID.includes("bathroom")) {
      return {
        image: ceiling1Bathroom,
        title: "Painting",
        cost: 4000,
      };
    } else if (roomID === "masterbedroom" || roomID.includes("bedroom")) {
      return {
        image: ceiling1,
        title: "Painting",
        cost: 15960,
      };
    } else {
      return {
        image: ceiling1,
        title: "Painting",
        cost: 7000,
      };
    }
  };

  const image2 = () => {
    if (roomID === "kitchen") {
      return {
        image: ceiling2Kitchen,
        title: "Painting & False Ceiling",
        cost: 33600,
      };
    } else if (roomID === "masterbathroom" || roomID.includes("bathroom")) {
      return {
        image: ceiling2Bathroom,
        title: "Painting & Water Resistant Ceiling",
        cost: 9000,
      };
    } else if (roomID === "masterbedroom" || roomID.includes("bedroom")) {
      return {
        image: ceiling2,
        title: "Painting & False Ceiling",
        cost: 30660,
      };
    } else {
      return {
        image: ceiling2,
        title: "Painting & False Ceiling",
        cost: 28500,
      };
    }
  };
  const image3 = () => {
    if (roomID === "kitchen") {
      return {
        image: ceiling3Kitchen,
        title: "Designer False Ceiling and Painting",
        cost: 33600,
      };
    } else if (roomID === "masterbathroom" || roomID.includes("bathroom")) {
      return {
        image: ceiling3Bathroom,
        title: "Water Proof Metallic Ceiling",
        cost: 13000,
      };
    } else if (roomID === "masterbedroom" || roomID.includes("bedroom")) {
      return {
        image: ceiling3,
        title: "Designer False Ceiling and Painting",
        cost: 37860,
      };
    } else {
      return {
        image: ceiling3,
        title: "Designer False Ceiling and Painting",
        cost: 40000,
      };
    }
  };

  const CeilingImages = [
    {
      id: 7,
      src: image1().image,
      title: image1().title,
      cost: image1().cost,
    },
    {
      id: 8,
      src: image2().image,
      title: image2().title,
      cost: image2().cost,
    },
    {
      id: 9,
      src: image3().image,
      title: image3().title,
      cost: image3().cost,
    },
  ];

  return (
    <Card className="mt-2 p-2">
      <div>
        <Form.Check.Input onClick={() => setOpen(!open)} aria-expanded={open} />{" "}
        <Form.Check.Label>Ceiling</Form.Check.Label>
      </div>

      <Collapse in={open}>
        <div>
          <div className=" row mt-3  text-center justify-content-center">
            {CeilingImages.map((image, index) => (
              <div key={index} className="col-sm-4 image-container">
                <label>
                  <input type="radio" name={roomIndexChanged} />
                  <img
                    id={image.id}
                    src={image.src}
                    alt={image.title}
                    className="customize-images"
                    onClick={() => {
                      dispatch(ceilingCustomizationPrice({ image, roomID }));
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
