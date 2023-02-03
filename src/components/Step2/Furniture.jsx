import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { wallCustomizationPrice } from "../../redux/houseSlice";
import { useDispatch } from "react-redux";
import wall1 from "../../assets/customizations/Walls/painting.png";
import wall2 from "../../assets/customizations//Walls/paintingandwallputty.png";
import wall3 from "../../assets/customizations/Walls/paintingwallputtywallpaper.png";
import wall1Kitchen from "../../assets/customizations/Walls/kitchen/wallputty.png";
import wall2Kitchen from "../../assets/customizations/Walls/kitchen/highlightertiling.png";
import wall3Kitchen from "../../assets/customizations/Walls/kitchen/fullwalltiling.png";
import wall1Bathroom from "../../assets/customizations/Walls/bathroom/painting.png";
import wall2Bathroom from "../../assets/customizations/Walls/bathroom/walltiling.png";
import wall3Bathroom from "../../assets/customizations/Walls/bathroom/italianmarble.png";

export const Furniture = ({ roomIndex, roomID }) => {
  const [open, setopen] = useState(false);
  const dispatch = useDispatch();

  const roomIndexChanged = roomIndex + 100;

  const image1 = () => {
    if (roomID === "kitchen") {
      return {
        image: wall1Kitchen,
        title: "Wall Putty and Painting",
        cost: 9120,
      };
    } else if (roomID === "masterbathroom" || roomID.includes("bathroom")) {
      return {
        image: wall1Bathroom,
        title: "Painting",
        cost: 4250,
      };
    } else if (roomID === "masterbedroom" || roomID.includes("bedroom")) {
      return {
        image: wall1,
        title: "Painting",
        cost: 15960,
      };
    } else {
      return {
        image: wall1,
        title: "Painting",
        cost: 28500,
      };
    }
  };
  const image2 = () => {
    if (roomID === "kitchen") {
      return {
        image: wall2Kitchen,
        title: "Highlighter Wall Tiling",
        cost: 33600,
      };
    } else if (roomID === "masterbathroom" || roomID.includes("bathroom")) {
      return {
        image: wall2Bathroom,
        title: "Full wall Tiling",
        cost: 8100,
      };
    } else if (roomID === "masterbedroom" || roomID.includes("bedroom")) {
      return {
        image: wall2,
        title: "Painting & Wall Putty",
        cost: 30660,
      };
    } else {
      return {
        image: wall2,
        title: "Painting & Wall Putty",
        cost: 28500,
      };
    }
  };
  const image3 = () => {
    if (roomID === "kitchen") {
      return {
        image: wall3Kitchen,
        title: "Full Wall Tiling",
        cost: 33600,
      };
    } else if (roomID === "masterbathroom" || roomID.includes("bathroom")) {
      return {
        image: wall3Bathroom,
        title: "Italian Marble",
        cost: 12000,
      };
    } else if (roomID === "masterbedroom" || roomID.includes("bedroom")) {
      return {
        image: wall3,
        title: "Painting ,Wall Putty & Wallpaper",
        cost: 37860,
      };
    } else {
      return {
        image: wall3,
        title: "Painting ,Wall Putty & Wallpaper",
        cost: 28500,
      };
    }
  };

  const FurnitureImages = [
    {
      id: 4,
      src: image1().image,
      title: image1().title,
      cost: image1().cost,
    },
    {
      id: 5,
      src: image2().image,
      title: image2().title,
      cost: image2().cost,
    },
    {
      id: 6,
      src: image3().image,
      title: image3().title,
      cost: image3().cost,
    },
  ];

  return (
    <Card className="mt-2 p-2">
      <div>
        <Form.Check.Input onClick={() => setopen(!open)} aria-expanded={open} />{" "}
        <Form.Check.Label>Furniture</Form.Check.Label>
      </div>

      <Collapse in={open}>
        <div>
          <div className=" row mt-3  text-center justify-content-center">
            {FurnitureImages.map((image, index) => (
              <div key={index} className="col-sm-4 image-container">
                <label>
                  <input type="radio" name={roomIndexChanged} />
                  <img
                    id={image.id}
                    src={image.src}
                    alt={image.title}
                    className="customize-images"
                    onClick={() => {
                      dispatch(a({ image, roomID }));
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
