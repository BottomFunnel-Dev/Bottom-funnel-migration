import React from "react";
import styles from "./SkillsComWhyBF.module.css";
import { FaHandPointRight } from "react-icons/fa";

export const SkillsComWhyBF = ({ data }) => {
  const { title, image, bulletPointData } = data;

  return (
    <div className={styles.skillswhymain}>
      <h1>{title}</h1>
      <div className={styles.skillswhycontent}>
        <div className={styles.skillsbulletspointsimage}>
          <img src={image} alt="nodejs big logo" />
        </div>
        <div className={styles.skillsbulletspointsmain}>
          <div className={styles.skillsbulletspoints}>
            {bulletPointData.map((elem) => {
              return (
                <p key={elem}>
                  <FaHandPointRight />
                  {elem}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
