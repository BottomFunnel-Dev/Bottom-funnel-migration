import React from "react";
import { CareerOpportunities } from "../CareerOpportunities/CareerOpportunities";
import career from "./CareerMain.module.css";

export const CareerMain = () => {
  return (
    <div className={career.careerMainContainer}>
      <div className={career.careerMainBackgroundBlackcolor}></div>
      <div className={career.careerMainContent}>
        <CareerOpportunities />
      </div>
    </div>
  );
};
