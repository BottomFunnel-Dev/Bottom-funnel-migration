import React from "react";
import "./ClientCards.css";

export const ClientCards = ({ data }) => {
  return (
    <div className="OurClientCards-flip-card" tabIndex="0">
      <div className="OurClientCards-flip-card-inner">
        <div
          style={{ background: data.theme }}
          className="OurClientCards-flip-card-front"
        >
          <div className="OurClientCards-image">
            <img src={data.image} alt={data.name} />
          </div>
          <h2>{data.name}</h2>
        </div>
        <div className="OurClientCards-flip-card-back">
          <p>{data.body}</p>
        </div>
      </div>
    </div>
  );
};
