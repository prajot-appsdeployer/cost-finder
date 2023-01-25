import React, { useEffect } from "react";
import { Card, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setID } from "../redux/houseSlice";
import { RoomCards } from "../components/Step2/RoomCards";

export const Step2 = () => {
  const home = useSelector((el) => el.home.house);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setID());
  }, []);

  const [show, setShow] = useState(false);
  const [checkID, setCheckID] = useState("livingroom");
  const arr = home.filter((room, index) => {
    return room.id === checkID ? <RoomCards key={index} room={room} /> : null;
  });

  return (
    <>
      <Container>
        <Row className="mt-4">
          <div className="col-lg-3  mb-5">
            <Card className="p-3 shadow border-0">
              {home.map((room, index) => {
                return (
                  <div key={index} className="d-flex justify-content-around">
                    <label
                      className="form-check-label flex-grow-1"
                      htmlFor={room.id}
                    >
                      <p className="mb-1">{room.title}</p>
                    </label>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={room.id}
                        onChange={() => {
                          setCheckID(room.id);
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </Card>
          </div>

          <div className="col-lg-6 mb-5">
            {arr.map((room, index) => {
              return <RoomCards key={index} room={room} />;
            })}
          </div>

          <div className="col-lg-3 mb-5">
            <Row>
              <Card
                style={{ width: "18rem" }}
                className="mb-4 shadow mx-auto  bg-white rounded"
              >
                <Card.Body>
                  <p className="text-center">Net Estimate ₹ 0</p>
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
