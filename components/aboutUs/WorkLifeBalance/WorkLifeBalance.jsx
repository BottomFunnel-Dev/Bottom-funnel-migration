import React from "react";
import styles from "./WorkLifeBalance.module.css";

export const WorkLifeBalance = () => {
  const cardsData = [
    "Learning & Development",
    "Mindful Personal Guidance",
    "Constructive Feedback",
    "Inculsive & Open-Culture",
    "Innovation & Quality First",
    "Proactive Implementation",
    "Best & Global Opportunities",
  ];
  return (
    <div className={styles.WorkLifeBalancemain}>
      <div className={styles.WorkLifeBalanceheading}>
        <div>
          <h1>Work</h1>
          <div></div>
          <h1>Life</h1>
        </div>
        <h1>Balance</h1>
      </div>
      <p>
        Getting to a work-life balance is an increasingly important goal for
        many professionals these days, and perhaps the biggest reason why so
        many of us find ourselves saying yes to those crazy late nights and
        weekend projects.
      </p>
      <div className={styles.WorkLifeBalancecards}>
        {cardsData.map((elem, idx) => {
          return (
            <div>
              <h1> {idx + 1} </h1>
              <h2> {elem} </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
