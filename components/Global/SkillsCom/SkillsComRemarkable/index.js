import React from "react";
import styles from "./SkillsComRemarkable.module.css";

export const SkillsComRemarkable = ({ data }) => {
  const { title, description, cardsData } = data;

  return (
    <div className={styles.skillsremarkablemain}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className={styles.skillsremarkablesolutions}>
        {cardsData.map(({ img, title }) => {
          return (
            <div key={title}>
              <div className={styles.skillsremarkableimage}>
                <img src={img.src} alt={img.alt} />
              </div>
              <h4>{title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
