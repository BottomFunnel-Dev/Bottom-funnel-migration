import React from "react";
import styles from "./SkillsComBookCall.module.css";

export const SkillsComBookCall = ({ data }) => {
  const { title, btn, image } = data;
  return (
    <div
      className={styles.skillsbookcallmain}
      style={{
        background: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url(${image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className={styles.skillsbookcallmainh1}>{title}</h1>
      <button className={styles.skillsbookcallmainbutton}>{btn}</button>
    </div>
  );
};
