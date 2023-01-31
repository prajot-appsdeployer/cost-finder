import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { flooringPrice, totalExpense } from "../../redux/houseSlice";
import { useDispatch, useSelector } from "react-redux";

export const Flooring = ({ roomIndex, roomID }) => {
  const [openFlorring, setOpenFlooring] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const dispatch = useDispatch();

  const FlooringImages = [
    {
      id: 1,
      src: "http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/vitrified.png",
      title: "Virtified Tiles",
      cost: 32000,
      active: false,
    },
    {
      id: 2,
      src: "http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/wooden.png",
      title: "Wooden Flooring",
      cost: 28000,
      active: false,
    },
    {
      id: 3,
      src: "http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/italian.png",
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
                      setSelectedImage(image.id);
                      image.active = !image.active;
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
