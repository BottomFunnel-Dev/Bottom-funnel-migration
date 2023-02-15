import React from "react";
import { CareerCards } from "../CareerCards/CareerCards";
import "./CareerWhy.css";

export const CareerWhy = () => {
  const cardsData = [
    {
      icon: "Images/careerPhotos/training.png",
      title: "Training and Developing",
    },
    {
      icon: "Images/careerPhotos/opportunities.png",
      title: "Opportunities For All",
    },
    { icon: "Images/careerPhotos/rewards.png", title: "Rewards" },
    {
      icon: "Images/careerPhotos/environment.png",
      title: "Positive Environment",
    },
    {
      icon: "Images/careerPhotos/java.png",
      title: "Company Laptop and Internet Reimbursement",
    },
    { icon: "Images/careerPhotos/angular.png", title: "Employees First" },
  ];
  return (
    <div className="CareerWhy-main">
      <h1>Fields we are hiring</h1>
      <div className="CareerWhy-cards">
        {cardsData.map((elem) => {
          return <CareerCards data={elem} />;
        })}
      </div>
    </div>
  );
};
