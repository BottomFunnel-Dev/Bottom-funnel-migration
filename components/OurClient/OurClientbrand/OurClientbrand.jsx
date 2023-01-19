import React from "react";
import { ClientCards } from "../ClientCards/ClientCards";
import clients from "./OurClientbrand.module.css";

export const OurClientbrand = ({ data }) => {
  return (
    <div className={clients.ourClientbrandMain}>
      <div className={clients.ourClientbrandHeading}>
        <hr />
        <h2>{data.title}</h2>
        <hr />
      </div>

      <div className={clients.ourClientbrandContent}>
        {data.cardsData.map((elem) => {
          return <ClientCards data={elem} />;
        })}
      </div>
    </div>
  );
};
