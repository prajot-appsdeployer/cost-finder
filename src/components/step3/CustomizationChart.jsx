import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Card, Col, Row } from "react-bootstrap";
import { Colours2 } from "../../Colours2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const CustomizationChart = () => {
  const home = useSelector((el) => el.home.house);

  const customizationTitles = ["Flooring", "Walls"];

  let floorPrice = 0,
    wallPrice = 0;
  home.forEach((obj) => {
    if (obj.floorCost) floorPrice += obj.floorCost;
    if (obj.wallCost) wallPrice += obj.wallCost;
  });

  const customizationExpense = [floorPrice, wallPrice];

  const data = {
    labels: customizationTitles,
    datasets: [
      {
        label: "Expense on customization",
        data: customizationExpense,
        backgroundColor: Colours2,
        hoverOffset: 4,
      },
    ],
  };

  const options = {};

  return (
    <div>
      <Card
        className="shadow  border-0 mb-4 p-2"
        style={{ minHeight: "400px" }}
      >
        <Card.Title className="display-6 text-center fs-3">
          Scope Wise Estimate
        </Card.Title>
        <Card.Body>
          <Doughnut data={data} options={options}></Doughnut>
        </Card.Body>
      </Card>

      {customizationTitles.map((title, index) => {
        return (
          <Row key={index}>
            <Col>
              <span>
                <i
                  className="fa-solid fa-square "
                  style={{ color: Colours2[index] }}
                ></i>
              </span>{" "}
              {title}
            </Col>
            <Col>₹ {customizationExpense[index]}</Col>
          </Row>
        );
      })}
    </div>
  );
};
