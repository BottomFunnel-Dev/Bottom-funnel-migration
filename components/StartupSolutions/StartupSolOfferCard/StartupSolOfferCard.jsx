import React from "react";
import styles from "./StartupSolOfferCard.module.css";

export const StartupSolOfferCard = () => {
  const cardData = [
    {
      title: "Startup Tech Consulting/Ideation",
      body: "We help startups evaluate, select and use cutting-edge technology stacks such as web, mobile and cloud for their products and applications. After analyzing the pros and cons of your technology stack, choose the best framework for your development.",
      image: "Images/startupSolPhotos/rocket.png",
    },
    {
      title: "Startup MVP Development",
      body: "Spending all your resources developing the perfect product is a risky move. A smart move is to start small with a minimum viable product. Startup MVP development services help you build the first version of your product faster.",
      image: "Images/startupSolPhotos/mvp.png",
    },
    {
      title: "Startup Product Development",
      body: "From identifying market opportunities to bringing it to market, every startup goes through a new product development process. Classic Informatics provides end-to-end startup product development services to bring ideas to market faster.",
      image: "Images/startupSolPhotos/release.png",
    },
    {
      title: "Startup Growth Hacking",
      body: "By defining your present, we predict your future and help your startup reach great heights.Launching a product is not enough. It also needs to be marketed properly. We will continue to support you to analyze product performance.",
      image: "Images/startupSolPhotos/growth.png",
    },
  ];
  return (
    <div className={styles.StartupSolOfferCardContainer}>
      <div className={styles.StartupSolOfferCardMain}>
        {cardData.map(({ title, body, image }, idx) => {
          return (
            <div>
              <div>
                <img src={image} alt={title} />
              </div>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.StartupSolOfferCardButton}>
        <h3>Talk with our experts in startup solutions to get started</h3>
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-envelope-exclamation"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1.5a.5.5 0 0 1-1 0V11a.5.5 0 0 1 1 0Zm0 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
