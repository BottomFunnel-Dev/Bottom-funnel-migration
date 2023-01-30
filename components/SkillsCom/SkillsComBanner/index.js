import React from "react";
import Navbar from "../../Navbar/Navbar";
import styles from "./SkillsComBanner.module.css";

export const SkillsComBanner = ({ data }) => {
  const { image, title, description, icon } = data;

  return (
    <>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
      <div
        className={styles.skillsbannermain}
        style={{
          background: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div className={styles.skillsbannercontent}>
          <h1>{title}</h1>
          <p>{description}</p>
          <button>Get Started</button>
        </div>
        <img src={icon} alt={icon} />
      </div>
    </>
  );
};
