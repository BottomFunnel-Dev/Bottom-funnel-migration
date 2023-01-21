import React from "react";
import styles from "./AutomateOlly.module.css";

export const AutomateOlly = () => {
  const selfServicesAutomateOllyCardsData = [
    {
      title: "Two...three (or more) heads are better than one",
      body: `Bring the collective experience  of everyone on your team into the knowledge. Base creation process with
            a sacalable content management system.`,
      image: "/Images/SelfService/TwoThreeHead.png",
      buttondetails: "start free trial",
    },
    {
      title: "Automate with Freedy Answers",
      body: `Leverage answer bots to enhance your support and help customers get the best answer from your knowledge 
            base content any time they want`,
      image: "/Images/SelfService/OllySolution.png",
      buttondetails: "See pricing",
    },
  ];

  return (
    <div className={styles.selfServicesAutomateOllyParentDiv}>
      <div className={styles.selfServicesAutomateOllyContentDiv}>
        {selfServicesAutomateOllyCardsData.map(
          ({ title, body, image, buttondetails }, idx) => (
            <div key={idx}>
              <div>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
              <p className={styles.selfServicesAutomateOllyContentButton}>
                {buttondetails}
              </p>
            </div>
          ),
        )}
      </div>
    </div>
  );
};
