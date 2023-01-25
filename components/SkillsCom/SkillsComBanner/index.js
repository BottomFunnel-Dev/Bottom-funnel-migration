import React from "react";
import Navbar from "../../Navbar/Navbar";
import styles from "./SkillsComBanner.module.css";

export const SkillsComBanner = ({ data }) => {
  const { image, title, description } = data;

  return (
    <>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <div
        className={styles.skillsbannermain}
        style={{
          background: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.skillsbannercontent}>
          <h1 className={styles.skillsbannercontenth1}>{title}</h1>
          <p className={styles.skillsbannercontentp}>{description}</p>
        </div>
        <button className={styles.skillsbannermainbutton}>Get Started</button>
      </div>
    </>
  );
};
