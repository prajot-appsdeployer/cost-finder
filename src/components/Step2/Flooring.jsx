import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { floorCustomizationPrice } from "../../redux/houseSlice";
import { useDispatch } from "react-redux";
import floor1 from "../../assets/customizations/Flooring/vitrified.png";
import floor2 from "../../assets/customizations/Flooring/wooden.png";
import floor3 from "../../assets/customizations/Flooring/italian.png";
import floor1Kitchen from "../../assets/customizations/Flooring/kitchen/vitrifiedKitchen.png";
import floor2Kitchen from "../../assets/customizations/Flooring/kitchen/woodenKitchen.png";
import floor3Kitchen from "../../assets/customizations/Flooring/kitchen/italianKitchen.png";
import floor1Bathroom from "../../assets/customizations/Flooring/bathroom/vitrifiedBathroom.png";
import floor2Bathroom from "../../assets/customizations/Flooring/bathroom/woodenBathroom.png";
import floor3Bathroom from "../../assets/customizations/Flooring/bathroom/italianBathroom.png";

export const Flooring = ({ roomIndex, roomID }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const image1 = () => {
    if (roomID === "kitchen") {
      return {
        image: floor1Kitchen,
        title: "Vitrified Tiles",
        cost: 10800,
      };
    } else if (roomID === "masterbathroom" || roomID.includes("bathroom")) {
      return {
        image: floor1Bathroom,
        title: "Vitrified Tiles",
        cost: 14400,
      };
    } else if (roomID === "masterbedroom" || roomID.includes("bedroom")) {
      return {
        image: floor1,
        title: "Vitrified Tiles",
        cost: 18900,
      };
    } else {
      return {
        image: floor1,
        title: "Vitrified Tiles",
        cost: 33750,
      };
    }
  };
  const image2 = () => {
    if (roomID === "kitchen") {
      return {
        image: floor2Kitchen,
        title: "Wooden Flooring",
        cost: 7200,
      };
    } else if (roomID === "masterbathroom" || roomID.includes("bathroom")) {
      return {
        image: floor2Bathroom,
        title: "Deckwood Flooring",
        cost: 4800,
      };
    } else if (roomID === "masterbedroom" || roomID.includes("bedroom")) {
      return {
        image: floor2,
        title: "Wooden Flooring",
        cost: 12600,
      };
    } else {
      return {
        image: floor2,
        title: "Wooden Flooring",
        cost: 22500,
      };
    }
  };
  const image3 = () => {
    if (roomID === "kitchen") {
      return {
        image: floor3Kitchen,
        cost: 14400,
      };
    } else if (roomID === "masterbathroom" || roomID.includes("bathroom")) {
      return {
        image: floor3Bathroom,
        cost: 16400,
      };
    } else if (roomID === "masterbedroom" || roomID.includes("bedroom")) {
      return {
        image: floor3,
        cost: 25200,
      };
    } else {
      return {
        image: floor3,
        cost: 45000,
      };
    }
  };

  const FlooringImages = [
    {
      id: 1,
      src: image1().image,
      title: image1().title,
      cost: image1().cost,
    },
    {
      id: 2,
      src: image2().image,
      title: image2().title,
      cost: image2().cost,
    },
    {
      id: 3,
      src: image3().image,
      title: "Italian Marble",
      cost: image3().cost,
    },
  ];

  return (
    <Card className="mt-2 p-2">
      <div>
        <Form.Check.Input onClick={() => setOpen(!open)} aria-expanded={open} />{" "}
        <Form.Check.Label>Flooring</Form.Check.Label>
      </div>

      <Collapse in={open}>
        <div>
          <div className=" row mt-3  text-center justify-content-center">
            {FlooringImages.map((image, index) => (
              <div key={index} className="col-sm-4 image-container">
                <label>
                  <input
                    type="radio"
                    name={roomIndex}
                    onClick={() => {
                      dispatch(floorCustomizationPrice({ image, roomID }));
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
