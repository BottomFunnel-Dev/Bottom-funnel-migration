import React from "react";
import { NewsEventCards } from "../NewsEventCards/NewsEventCards";
import awards from "./NewsEventSection.module.css";

export const NewsEventSection = () => {
  const cardsData = [
    {
      title: "Top Web App Developers & Development Companies India 2022",
      image: "/Images/pressmediaPhotos/clutch.png",
      date: "10 / Sept / 2022",
      link: "",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem voluptates, exercitationem saepe vel ea dolor...",
    },
    {
      title: "Top Web App Development Agency 2022",
      image: "/Images/pressmediaPhotos/tabbyawards.png",
      date: "16 / Sept / 2022",
      link: "",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem voluptates, exercitationem saepe vel ea dolor...",
    },
    {
      title: "New Jaipur Startup Of Jaipur Open for Hiring",
      image: "/Images/pressmediaPhotos/zeenews.png",
      date: "29 / Sept / 2022",
      link: "",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem voluptates, exercitationem saepe vel ea dolor...",
    },
    {
      title: "New Jaipur Startup Growing Fast",
      image: "/Images/pressmediaPhotos/aaj-tak.png",
      date: "9 / Oct / 2022",
      link: "",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem voluptates, exercitationem saepe vel ea dolor...",
    },
  ];

  return (
    <div className={awards.newsEventSectionMain}>
      <h1>Latest Updates</h1>
      <div>
        {cardsData.map((elem, idx) => {
          return <NewsEventCards data={elem} key={idx} />;
        })}
      </div>
    </div>
  );
};
