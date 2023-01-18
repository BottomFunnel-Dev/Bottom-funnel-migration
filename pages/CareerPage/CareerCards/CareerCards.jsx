import React from "react";
import "./CareerCards.css";

export const CareerCards = ({ data }) => {
  return (
    <div className="Career-Opening-Conent">
      <div>
        <img src={data.icon} alt={data.title} />
      </div>
      <h3>{data.title}</h3>
    </div>
  );
};
