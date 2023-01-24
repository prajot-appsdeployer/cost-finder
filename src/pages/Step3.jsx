import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Step3 = () => {
  const home = useSelector((el) => el.home.house);

  return (
    <>
      <Container>
        <section className="mt-4">
          <p className="text-center display-6 mb-4">
            Your Total Estimate is ₹ 0
          </p>

          <div className=" row ">
            <div className="col-lg-6 mb-5 ">
              <Card
                className=" shadow border-0 mb-4 p-2 "
                style={{ minHeight: "400px" }}
              >
                <Card.Title className="display-6 text-center fs-3">
                  Room Wise Estimate
                </Card.Title>

                <Card.Body>
                  <div className="d-flex">
                    {home.map((room, index) => {
                      return (
                        <>
                          <Col key={index}>
                            <span>
                              <i className="fa-solid fa-square"></i>
                            </span>{" "}
                            {room.title}
                          </Col>
                        </>
                      );
                    })}
                  </div>
                </Card.Body>
              </Card>

              <div>
                {home.map((room, index) => {
                  return (
                    <Row key={index}>
                      <Col>
                        <span>
                          <i className="fa-solid fa-square text-danger"></i>
                        </span>{" "}
                        {room.title}
                      </Col>
                      <Col>₹ 0</Col>
                    </Row>
                  );
                })}
              </div>
            </div>

            <div className="col-lg-6">
              <Card
                className="shadow  border-0 mb-4 p-2"
                style={{ minHeight: "400px" }}
              >
                <Card.Title className="display-6 text-center fs-3">
                  Scope Wise Estimate
                </Card.Title>
                <Card.Body></Card.Body>
              </Card>

              <div>
                <Row>
                  <Col>
                    <span>
                      <i className="fa-solid fa-square text-danger"></i>
                    </span>{" "}
                    Flooring
                  </Col>
                  <Col>0</Col>
                </Row>

                <Row>
                  <Col>
                    <span>
                      <i className="fa-solid fa-square text-danger"></i>
                    </span>{" "}
                    Walls
                  </Col>
                  <Col>0</Col>
                </Row>
                <Row>
                  <Col>
                    <span>
                      <i className="fa-solid fa-square text-danger"></i>
                    </span>{" "}
                    Ceiling
                  </Col>
                  <Col>0</Col>
                </Row>
                <Row>
                  <Col>
                    <span>
                      <i className="fa-solid fa-square text-danger"></i>
                    </span>{" "}
                    Electricals
                  </Col>
                  <Col>0</Col>
                </Row>
                <Row>
                  <Col>
                    <span>
                      <i className="fa-solid fa-square text-danger"></i>
                    </span>{" "}
                    Windows
                  </Col>
                  <Col>0</Col>
                </Row>
                <Row>
                  <Col>
                    <span>
                      <i className="fa-solid fa-square text-danger"></i>
                    </span>{" "}
                    Doors
                  </Col>
                  <Col>0</Col>
                </Row>
                <Row>
                  <Col>
                    <span>
                      <i className="fa-solid fa-square text-danger"></i>
                    </span>{" "}
                    Furniture
                  </Col>
                  <Col>0</Col>
                </Row>
                <Row>
                  <Col>
                    <span>
                      <i className="fa-solid fa-square text-danger"></i>
                    </span>{" "}
                    Plumbing
                  </Col>
                  <Col>0</Col>
                </Row>
              </div>
            </div>
          </div>
        </section>

        <p className="text-muted text-center mt-5 mb-3 fs-5">
          <i className="fa-solid fa-circle-exclamation"></i>Approx. 15% Amount
          may vary upon specific requirements or if special customization has to
          be made
        </p>

        <button className="btn btn-info p-3 d-flex mx-auto mb-4">
          Download Estimate
        </button>
      </Container>
    </>
  );
};
