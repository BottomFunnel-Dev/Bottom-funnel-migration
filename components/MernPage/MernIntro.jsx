import React from "react";
import styles from "./mernintro.module.css";
export const MernIntro = ({ techIntro }) => {
  return (
    <div className={styles.mernintro}>
      <div className={styles.stackintro}>
        <h1>{techIntro.title}</h1>
        <p>{techIntro.intro}</p>
      </div>

      <div className={styles.mainstackDiv}>
        <div className={styles.stackflex}>
          {techIntro.techStack.map((item, index) => (
            <div className={styles.stackCard} key={index}>
              <div className={styles.stackImage}>
                <img src={item.stackLogo} alt="images" />
              </div>
              <div className={styles.stackContent}>
                <h3>{item.stackname}</h3>
                <p>{item.stackintro}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
