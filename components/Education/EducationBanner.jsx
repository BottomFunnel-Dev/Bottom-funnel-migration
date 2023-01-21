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
        <img
          src="/Images/Education/bannerbackground/Group 770626.png"
          alt="/bannerbackground/Group\ 770626.png"
        />
      </div>
    </div>
  );
};
