import Image from "next/image";
import React from "react";
import styles from "./educationBanner.module.css";

export const EducationBanner = () => {
  return (
    <div className={styles.educationbannermainboxes}>
      <div className={styles.educationbannertextboxes}>
        <h1>The Helpdesk for Schools and Universities</h1>
        <p>
          A simple ticketing solution for all teams at your educational
          institution
        </p>

        <button className={styles.educationbuttonbanner}>
          Signup for free
        </button>
      </div>
      <div className={styles.educationbannermainImages}>
        <Image
          src={"/Images/Education/bannerbackground/Group 770626.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};
