import React from "react";
import { CareerOpening } from "../CareerOpening/CareerOpening";
import { CareerReason } from "../CareerReason/CareerReason";
import styles from "./CareerOpportunities.module.css";

export const CareerOpportunities = () => {
  return (
    <div className={styles.CareerOpportunitiescontainer}>
      <CareerReason />
      <h1>Trending Opportunities</h1>
      <CareerOpening />
    </div>
  );
};
