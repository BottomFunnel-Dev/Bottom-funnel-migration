import React from "react";
import styles from "./OurWholeRight.module.css";

export const OurWholeRight = ({ data }) => {
  return (
    <div className={styles.ourWholeRightContainer}>
      <div className={styles.ourWholeRightImage}>
        <img src={data.image} alt="image" />
      </div>

      <div className={styles.ourWholeRightContent}>
        <div>
          <ul>
            {data.points.map((elem) => (
              <li>{elem}</li>
            ))}
          </ul>
          <p>{data.body}</p>
        </div>
        <button>{data.btn}</button>
      </div>
    </div>
  );
};
