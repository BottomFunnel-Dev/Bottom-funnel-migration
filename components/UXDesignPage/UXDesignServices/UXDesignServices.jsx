import React from "react";
import styles from "./UXDesignServices.module.css";

export const UXDesignServices = () => {
  const cardsData = [
    {
      title: "Interactive Prototypes",
      body: "To make sure there is no problem with this, we provide dummies first so that we can deliver the optimum quality product at a cost-effective price.",
    },
    {
      title: "Wireframing",
      body: "In the form of a mockup, you can choose from a wide variety of logos, motifs, etc. according to your wishes.",
    },
    {
      title: "Motion Design",
      body: "Choose design elements that make your product stand out. With top-notch ideas and a unique mind, you'll be amazed to receive top-notch graphics.",
    },
    {
      title: "Graphic Design",
      body: "Create designs that are intuitive and easy on the eyes. Our experts are always happy to provide the highest quality designs.",
    },
  ];
  return (
    <div className={styles.UXDesignServices}>
      <span>
        <img src="Images/UXDesignPhotos/triangle.png" alt="triangle.png" />
        <img src="Images/UXDesignPhotos/triangle.png" alt="triangle.png" />
      </span>
      <div className={styles.UXDesignServicescontainer}>
        <h1>
          Our <span>Design</span> Services
        </h1>
        <hr />
        <div>
          {cardsData.map(({ title, body }, idx) => (
            <div key={title}>
              <h1>{idx + 1}</h1>
              <h2>{title}</h2>
              <hr />
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
