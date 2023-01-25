import React, { useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const RoomCards = ({ room }) => {
  const [checked, setchecked] = useState("");
  console.log(checked);

  return (
    <Card className="mb-4" id={room.id}>
      <Card.Img variant="top" src={room.cover} />
      <Card.Body>
        <Container>
          <div>
            <Form.Check.Input />{" "}
            <Form.Check.Label>Enable {room.title}</Form.Check.Label>
          </div>
        </Container>
        <p className="text-muted ">How would you like to spend on this room?</p>
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
};
