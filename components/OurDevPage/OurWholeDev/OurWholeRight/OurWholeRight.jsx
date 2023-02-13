import React from "react";
import styles from "./OurWholeRight.module.css";
import Image from "next/image";

export const OurWholeRight = ({ data }) => {
  return (
    <div className={styles.ourWholeRightContainer}>
      <div className={styles.ourWholeRightImage}>
        {/* <img src={data.image} alt="image" /> */}
        <Image
            src={data.image}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "fit-content" }}
            />
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
