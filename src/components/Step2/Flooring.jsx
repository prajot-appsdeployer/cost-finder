import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { flooringPrice, totalExpense } from "../../redux/houseSlice";
import { useDispatch, useSelector } from "react-redux";

export const Flooring = ({ roomIndex }) => {
  const [openFlorring, setOpenFlooring] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  // const [flooringPrice, setFlooringPrice] = useState(0);

  const home = useSelector((el) => el.home.house);
  const dispatch = useDispatch();

  const FlooringImages = [
    {
      id: 1,
      src: "http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/vitrified.png",
      title: "Virtified Tiles",
      cost: 25000,
      active: false,
    },
    {
      id: 2,
      src: "http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/wooden.png",
      title: "Wooden Flooring",
      cost: 35000,
      active: false,
    },
    {
      id: 3,
      src: "http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/italian.png",
      title: "Italian Marble",
      cost: 50000,
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
                  <input type="radio" name={roomIndex} />
                  <img
                    id={image.id}
                    src={image.src}
                    alt={image.title}
                    className="customize-images"
                    onClick={() => {
                      setSelectedImage(image.id);
                      console.log(image.price);
                      dispatch(flooringPrice(image.cost));
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
