import React from "react";
import awards from "./NewsEventCards.module.css";

export const NewsEventCards = ({ data }) => {
  return (
    <div className={awards.newsEventCardsMain}>
      <div className={awards.newsEventCardsImage}>
        <img src={data.image} alt={data.title} />
      </div>

      <div className={awards.newsEventCardsContent}>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <p>
          <strong>Date :- </strong>
          {data.date}
        </p>
        <button>Read Now</button>
      </div>
    </div>
  );
};
