import React from "react";
import styles from "./SkillsComBanner.module.css";

export default function SkillsComBanner({ data }) {
  const { image, title, description, icon, points } = data;

  return (
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
        <h1>
          {title[0]} <span>{title[1]}</span> {title[2]}
        </h1>
        <p>{description}</p>
        <ul>
          {points.map((elem) => (
            <li key={elem}>{elem}</li>
          ))}
        </ul>
        <button>Get Started</button>
      </div>
      <img src={icon} alt={icon} />
    </div>
  );
}
