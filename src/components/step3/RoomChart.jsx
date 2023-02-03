import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Colours1 } from "./Colours1";
import { Card, Col, Row } from "react-bootstrap";

ChartJS.register(ArcElement, Tooltip, Legend);

export const RoomChart = () => {
  const home = useSelector((el) => el.home.house);

  const RoomTitles = home.map((el) => el.title);
  const Expense = home.map((el) => {
    let floorCost = 0,
      wallCost = 0,
      ceilingCost = 0,
      electricalCost = 0,
      windowCost = 0,
      doorCost = 0;

    if (el.floorCost !== undefined) {
      floorCost = el.floorCost;
    }
    if (el.wallCost !== undefined) {
      wallCost = el.wallCost;
    }
    if (el.ceilingCost !== undefined) {
      ceilingCost = el.ceilingCost;
    }
    if (el.electricalCost !== undefined) {
      electricalCost = el.electricalCost;
    }
    if (el.windowCost !== undefined) {
      windowCost = el.windowCost;
    }
    if (el.doorCost !== undefined) {
      doorCost = el.doorCost;
    }

    return (
      floorCost +
      wallCost +
      ceilingCost +
      electricalCost +
      windowCost +
      doorCost
    );
  });

  const data = {
    labels: RoomTitles,
    datasets: [
      {
        label: "Expense on per room",
        data: Expense,
        backgroundColor: Colours1,
        hoverOffset: 4,
      },
    ],
  };

  const options = {};

  return (
    <div>
      <Card
        className=" shadow border-0 mb-4 p-2 "
        style={{ minHeight: "400px" }}
      >
        <Card.Title className="display-6 text-center fs-3">
          Room Wise Estimate
        </Card.Title>

        <Card.Body>
          <Doughnut data={data} options={options}></Doughnut>
        </Card.Body>
      </Card>

      <div>
        {RoomTitles.map((title, index) => {
          return (
            <Row key={index}>
              <Col>
                <span>
                  <i
                    className="fa-solid fa-square "
                    style={{ color: Colours1[index] }}
                  ></i>
                </span>{" "}
                {title}
              </Col>
              <Col>₹ {Expense[index]}</Col>
            </Row>
          );
        })}
      </div>
    </div>
  );
};
