import React from "react";

import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CustomizationChart } from "../components/step3/CustomizationChart";
import { RoomChart } from "../components/step3/RoomChart";

export const Step3 = () => {
  const home = useSelector((el) => el.home.house);
  const totalCost = useSelector((el) => el.home.totalCost);

  return (
    <>
      <Container>
        <section className="mt-4">
          <p className="text-center title mb-4">
            Your Total Estimate is ₹ {totalCost}
          </p>

          <div className=" row ">
            <div className="col-lg-6 mb-5 ">
              <RoomChart />
            </div>

            <div className="col-lg-6 mb-5 ">
              <CustomizationChart />
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
