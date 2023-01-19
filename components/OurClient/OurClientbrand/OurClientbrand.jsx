import React from "react";
import { ClientCards } from "../ClientCards/ClientCards";
import "./OurClientbrand.css";

export const OurClientbrand = ({ data }) => {
  return (
    <div className="OurClientbrand-main">
      <div className="OurClientbrand-heading">
        <hr />
        <h2>{data.title}</h2>
        <hr />
      </div>
      <div className="OurClientbrand-content">
        {data.cardsData.map((elem) => {
          return <ClientCards data={elem} />;
        })}
      </div>
    </div>
  );
};
