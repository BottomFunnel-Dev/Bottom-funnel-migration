import React from "react";
import { CareerCards } from "../CareerCards/CareerCards";
import "./CareerHiring.css";

export const CareerHiring = () => {
  const cardsData = [
    { icon: "Images/careerPhotos/uiux.png", title: "Ux/Ui Designer" },
    { icon: "Images/careerPhotos/mobile-dev.png", title: "App Designer" },
    { icon: "Images/careerPhotos/php.png", title: "Php Designer" },
    { icon: "Images/careerPhotos/nodejs.png", title: "Node.js Developer" },
    { icon: "Images/careerPhotos/java.png", title: "Java Developer" },
    { icon: "Images/careerPhotos/angular.png", title: "Angular Development" },
    {
      icon: "Images/careerPhotos/business-analyst.png",
      title: "Business Analyst",
    },
    {
      icon: "Images/careerPhotos/quality-analyst.png",
      title: "Quality Analyst",
    },
    {
      icon: "Images/careerPhotos/digital-market.png",
      title: "Digital Marketing",
    },
  ];
  return (
    <div className="CareerHiring-main">
      <h1>Fields we are hiring</h1>
      <div className="CareerHiring-cards">
        {cardsData.map((elem) => {
          return <CareerCards data={elem} />;
        })}
      </div>
      <h3>
        More{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </h3>
    </div>
  );
};
