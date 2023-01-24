import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Step2 = () => {
  const home = useSelector((el) => el.home.house);

  // const [show, setShow] = useState(null);
  // home.forEach((el) => {
  //   const id = el.title.toLowerCase().replaceAll(" ", "");

  // });

  // if (id === "livingroom") {
  // }

  return (
    <>
      <Container>
        <Row className="mt-4">
          <div className="col-lg-3  mb-5">
            <Card className="p-3">
              {home.map((room, index) => {
                return (
                  <div key={index} className="d-flex justify-content-around">
                    <p className="mb-1 flex-grow-1">{room.title}</p>
                    <Form.Check type="switch" />
                  </div>
                );
              })}
            </Card>
          </div>

          <div className="col-lg-6 mb-5">
            {home.map((room, index) => {
              return (
                <Card key={index} className="mb-3">
                  <Card.Img variant="top" src={room.cover} />
                  <Card.Body>
                    <Container>
                      <div>
                        <Form.Check.Input />{" "}
                        <Form.Check.Label>Enable {room.title}</Form.Check.Label>
                      </div>
                    </Container>
                    <p className="text-muted ">
                      How would you like to spend on this room?
                    </p>
                    <div className="d-flex">
                      <Form.Check
                        type="radio"
                        id="basic"
                        aria-label="radio 1"
                        name="styles"
                        className="d-inline-flex mx-2 "
                      />
                      <Form.Check.Label>Basic</Form.Check.Label>

                      <Form.Check
                        type="radio"
                        id="standard"
                        aria-label="radio 1"
                        name="styles"
                        className="d-inline-flex mx-2 "
                      />
                      <Form.Check.Label>Standard</Form.Check.Label>

                      <Form.Check
                        type="radio"
                        id="lavish"
                        aria-label="radio 1"
                        name="styles"
                        className="d-inline-flex mx-2"
                      />
                      <Form.Check.Label>Lavish</Form.Check.Label>
                    </div>
                  </Card.Body>
                </Card>
              );
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
