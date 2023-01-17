import React from "react";
import styles from "./SkillsComWhyApp.module.css";

export const SkillsComWhyApp = ({ data }) => {
  const { title, cardsData } = data;

  return (
    <div className={styles.skillswhyapplicationmain}>
      <h1>{title}</h1>
      <div className={styles.skillswhyapplicationcontent}>
        {cardsData.map(({ img, title, description }, idx) => {
          return (
            <div key={idx}>
              <div className={styles.skillswhyapplcardsimagesdiv}>
                <img src={img.src} alt={img.alt} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
