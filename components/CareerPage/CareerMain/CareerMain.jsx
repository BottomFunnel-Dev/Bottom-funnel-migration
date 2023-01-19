import React from "react";
import { CareerOpportunities } from "../CareerOpportunities/CareerOpportunities";
import "./CareerMain.css";

export const CareerMain = () => {
  return (
    <div className="CareerMain-container">
      <div className="CareerMain-background-blackcolor"></div>
      <div className="CareerMain-content">
        <CareerOpportunities />
      </div>
    </div>
  );
};
