import React from "react";
import awards from "./MediaCards.module.css";

export const MediaCards = ({ data }) => {
  return (
    <div className={awards.mediaCardsContainer}>
      <div className={awards.mediaCardsMain}>
        <div>
          <img src={data.image} alt={data.title} />
        </div>
        <p>{data.date}</p>
      </div>
      <h3>{data.title}</h3>
    </div>
  );
};
