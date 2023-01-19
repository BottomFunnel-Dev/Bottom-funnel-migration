import React from "react";
import clients from "./ClientCards.module.css";

export const ClientCards = ({ data }) => {
  return (
    <div className={clients.ourClientCardsFlipCard} tabIndex="0">
      <div className={clients.ourClientCardsFlipCardInner}>
        <div
          style={{ background: data.theme }}
          className={clients.ourClientCardsFlipCardFront}
        >
          <div className={clients.ourClientCardsImage}>
            <img src={data.image} alt={data.name} />
          </div>
          <h2>{data.name}</h2>
        </div>
        <div className={clients.ourClientCardsFlipCardBack}>
          <p>{data.body}</p>
        </div>
      </div>
    </div>
  );
};
