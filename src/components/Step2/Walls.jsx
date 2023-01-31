import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { totalExpense, wallCustomizationPrice } from "../../redux/houseSlice";
import { useDispatch, useSelector } from "react-redux";

export const Walls = ({ roomIndex, roomID }) => {
  const [openWalls, setOpenWalls] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [WallPrice, setWallPrice] = useState(0);

  const home = useSelector((el) => el.home.house);
  // console.log(home[0]);

  const dispatch = useDispatch();
  const roomIndexChanged = roomIndex + 100;

  const WallsImages = [
    {
      id: 4,
      src: "http://costfinder.consdeployer.com/assets/productselection/livingroom/walltreatment/painting.png",
      title: "Painting",
      cost: 20000,
    },
    {
      id: 5,
      src: "http://costfinder.consdeployer.com/assets/productselection/livingroom/walltreatment/paintingandwallputty.png",
      title: "Painting and Putty",
      cost: 37000,
    },
    {
      id: 6,
      src: "http://costfinder.consdeployer.com/assets/productselection/livingroom/walltreatment/paintingwallputtywallpaper.png",
      title: "Painting, Putty and Wallpaper",
      cost: 60000,
    },
  ];

  return (
    <Card className="mt-2 p-2">
      <div>
        <Form.Check.Input
          onClick={() => setOpenWalls(!openWalls)}
          aria-expanded={openWalls}
        />{" "}
        <Form.Check.Label>Walls</Form.Check.Label>
      </div>

      <Collapse in={openWalls}>
        <div>
          <div className=" row mt-3  text-center justify-content-center">
            {WallsImages.map((image, index) => (
              <div key={index} className="col-sm-4 image-container">
                <label>
                  <input type="radio" name={roomIndexChanged} />
                  <img
                    id={image.id}
                    src={image.src}
                    alt={image.title}
                    className="customize-images"
                    onClick={() => {
                      setSelectedImage(image.id);
                      dispatch(wallCustomizationPrice({ image, roomID }));
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
