import React from "react";
import { CareerOpportunities } from "../CareerOpportunities/CareerOpportunities";
import styles from "./CareerMain.module.css";

export const CareerMain = () => {
  return (
    <div className={styles.CareerMaincontainer}>
      <div className={styles.CareerMainbackgroundblackcolor}></div>
      <div className={styles.CareerMaincontent}>
        <CareerOpportunities />
      </div>
    </div>
  );
};
