import React from "react";
import styles from "./SkillsComDes.module.css";

export default function SkillsComDes({ DescrptionData }) {
  const { title, image, description } = DescrptionData;
  return (
    <>
      <div className={styles.skillsdesmain}>
        <div className={styles.skillsdescontent}>
          <h1 className={styles.skillsdescontenth1}>{title}</h1>
          <p className={styles.skillsdescontentp}>{description}</p>
        </div>
        <div className={styles.skillsdesimage}>
          <img
            src={image}
            className={styles.skillsdesimageimg}
            alt={`${title} logo`}
          />
        </div>
      </div>
    </>
  );
}
