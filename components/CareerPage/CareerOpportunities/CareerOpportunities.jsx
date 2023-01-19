import React from "react";
import { CareerOpening } from "../CareerOpening/CareerOpening";
import { CareerReason } from "../CareerReason/CareerReason";
import "./CareerOpportunities.css";

export const CareerOpportunities = () => {
  return (
    <div className="CareerOpportunities-container">
      <CareerReason />
      <h1>Trending Opportunities</h1>
      <CareerOpening />
    </div>
  );
};
