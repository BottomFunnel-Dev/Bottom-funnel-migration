import React from "react";
import styles from "./SkillsComDes.module.css";

export const SkillsComDes = ({ DescrptionData }) => {
  const { title, image, description } = DescrptionData;
  return (
    <div className={styles.skillsdesmain}>
      <div className={styles.skillsdescontent}>
        <h1 className={styles.skillsdescontenth1}>{title}</h1>
        <p className={styles.skillsdescontentp}>{description}</p>
      </div>
      <div className={styles.skillsdesimage}>
        <img
          src={image}
          className={styles.skillsdesimageimg}
          height="100%"
          alt={`${title} logo`}
        />
      </div>
    </div>
  );
};
