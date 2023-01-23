import React from "react";

function HomeCard({ image, title, number, room }) {
  return (
    <div
      className="col-md-12 card shadow-sm gap-3 p-3"
      style={{ width: "500px" }}
    >
      <div className="d-flex align-items-center justify-content-around">
        <img src={image} className="cardImg mb-0" alt="" />
        <p className="card-text mb-0 flex-grow-1 "> {title}</p>
        <p className="mb-0">{number}</p>
      </div>
    </div>
  );
}

export default HomeCard;
