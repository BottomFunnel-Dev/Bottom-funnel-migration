import React from "react";
import clients from "./ClientCards.module.css";
import Image from "next/image";

export const ClientCards = ({ data }) => {
  return (
    <div className={clients.ourClientCardsFlipCard} tabIndex="0">
      <div className={clients.ourClientCardsFlipCardInner}>
        <div
          style={{ background: data.theme }}
          className={clients.ourClientCardsFlipCardFront}
        >
          <div className={clients.ourClientCardsImage}>
            <Image
              src={data.image}
              alt={"clientimage"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "fit-content" }}
              />
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
