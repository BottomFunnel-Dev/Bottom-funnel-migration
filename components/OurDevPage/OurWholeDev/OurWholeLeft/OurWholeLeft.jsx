import React from "react";
import styles from "./OurWholeLeft.module.css";

export const OurWholeLeft = ({ data }) => {
  return (
    <div className={styles.ourWholeLeftContainer}>
      <div className={styles.ourWholeLeftImage}>
        <img src={data.image} alt="images" />
      </div>
      <div className={styles.ourWholeLeftContent}>
        <div>
          <p>{data.body}</p>
          <ul>
            {data.points.map((elem) => (
              <li>{elem}</li>
            ))}
          </ul>
        </div>
        <button>{data.btn}</button>
      </div>
    </div>
  );
};
