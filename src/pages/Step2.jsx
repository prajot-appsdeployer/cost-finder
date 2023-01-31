import React, { useEffect } from "react";
import { Card, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setID, totalExpense } from "../redux/houseSlice";
import { RoomCards } from "../components/Step2/RoomCards";
import { NavLink } from "react-router-dom";

export const Step2 = () => {
  const [isToggled, setisToggled] = useState(false);
  const [checkID, setCheckID] = useState("livingroom");
  const home = useSelector((el) => el.home.house);
  const totalCost = useSelector((el) => el.home.totalCost);
  const dispatch = useDispatch();

  let floorPrice = 0,
    wallPrice = 0,
    totalPrice = 0;
  home.forEach((obj) => {
    if (obj.floorCost) floorPrice += obj.floorCost;
    if (obj.wallCost) wallPrice += obj.wallCost;
  });
  totalPrice = floorPrice + wallPrice;

  useEffect(() => {
    dispatch(setID());
    dispatch(totalExpense(totalPrice));
  }, [totalPrice]);

  return (
    <>
      <Container className=" mt-4">
        <h1 className="text-center title">Customize your rooms</h1>
        <Row>
          <div className="col-lg-3  mb-5">
            <Card className="p-3 shadow border-0">
              {home.map((room, index) => {
                return (
                  <div key={index} className="d-flex justify-content-around">
                    <p className="mb-1 flex-grow-1">{room.title}</p>
                    <div className="form-check form-switch">
                      <input
                        checked={checkID === room.id}
                        className="form-check-input"
                        type="checkbox"
                        onChange={() => {
                          setCheckID(room.id);
                          setisToggled(!isToggled);
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </Card>
          </div>

          <div className="col-lg-6 mb-5">
            {home.map((room, index) => {
              return (
                <RoomCards
                  key={index}
                  room={room}
                  checkID={checkID}
                  index={index}
                  roomID={room.id}
                />
              );
            })}
          </div>

          <div className="col-lg-3 mb-5">
            <Row>
              <Card
                style={{ width: "18rem" }}
                className="mb-4 shadow mx-auto  bg-white rounded"
              >
                <Card.Body className="text-center">
                  <p>Net Estimate ₹ {totalCost}</p>
                  <h6 className="text-muted text-sm-center">
                    Estimate includes labour cost + material cost
                  </h6>

                  <NavLink to="/step3">
                    <Button className="btn btn-success  px-4 py-2 ">
                      Get Detailed Estimate
                    </Button>
                  </NavLink>
                </Card.Body>
              </Card>
            </Row>

            <Row>
              <div className="container" style={{ width: "18rem" }}>
                <p>
                  A variation upto + or - 15% could occur in cases where your
                  space has specific requirements not accounted in the
                  Costfinder. The CostFinder uses current optimised market rates
                  to budget your dream space.
                </p>
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
};
