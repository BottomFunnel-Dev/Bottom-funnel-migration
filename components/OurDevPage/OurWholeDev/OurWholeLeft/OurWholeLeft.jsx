import React from "react";
import styles from "./OurWholeLeft.module.css";
import Image from "next/image";

export const OurWholeLeft = ({ data }) => {
  return (
    <div className={styles.ourWholeLeftContainer}>
      <div className={styles.ourWholeLeftImage}>
        {/* <img src={data.image} alt="images" /> */}
        <Image
            src={data.image}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            />
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
