import React from "react";
import { CareerOpening } from "../CareerOpening/CareerOpening";
import { CareerReason } from "../CareerReason/CareerReason";
import career from "./CareerOpportunities.module.css";

export const CareerOpportunities = () => {
  return (
    <div className={career.careerOpportunitiesContainer}>
      <CareerReason />
      <h1>Trending Opportunities</h1>
      <CareerOpening />
    </div>
  );
};
