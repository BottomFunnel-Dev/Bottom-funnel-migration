import React from "react";
import { AwardsCardes } from "../AwardsCardes/AwardsCardes";
import awards from "./AwardsSection.module.css";

export const AwardsSection = () => {
  const cardsData = [
    {
      title: "Top Mobile App Developers & Development Companies India 2022",
      image: "/Images/AwardsPhotos/awards-images/clutch.png",
      hex: "#6A797D",
    },
    {
      title: "Best Mobile App Development Companies 2022 by G2",
      image: "/Images/AwardsPhotos/awards-images/g2-crowd.png",
      hex: "#EF492D",
    },
    {
      title: "Top Mobile App Development Companies India",
      image: "/Images/AwardsPhotos/awards-images/themanifest.png",
      hex: "#951A42",
    },
    {
      title: "Top Mobile App Development Companies India",
      image: "/Images/AwardsPhotos/awards-images/verified-agency.png",
      hex: "#F85059",
    },
    {
      title: "Best Mobile App Development Companies",
      image: "/Images/AwardsPhotos/awards-images/visual-objects.png",
      hex: "#D78C72",
    },
    {
      title: "Top Mobile App Development Agency 2018",
      image: "/Images/AwardsPhotos/awards-images/tabbyawards.png",
      hex: "#C9162D",
    },
    {
      title: "Top Mobile App Development companies in India 2022",
      image: "/Images/AwardsPhotos/awards-images/it-firms.png",
      hex: "#0F9BE6",
    },
    {
      title: "Top Mobile App Developers in India 2022",
      image: "/Images/AwardsPhotos/awards-images/goodfirms.png",
      hex: "#FDAA00",
    },
  ];

  return (
    <div className={awards.awardsSectionMain}>
      <h1>
        Taking appropriate steps to ensure that recognition extends beyond the
        future fuels our commitment to innovation and quality results.
      </h1>
      {cardsData.map((elem, idx) => {
        return <AwardsCardes key={idx} data={elem} />;
      })}
    </div>
  );
};
