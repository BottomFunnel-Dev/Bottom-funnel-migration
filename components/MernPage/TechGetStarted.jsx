import React from "react";
import styles from "./techGetStarted.module.css";
export const TechGetStarted = ({ calltoAction }) => {
  return (
    <div
      className={styles.techgetstarted}
      style={{
        background: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${calltoAction.background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center",
      }}
    >
      <div>
        <p>{calltoAction.description}</p>
        <button>{calltoAction.buttonText}</button>
      </div>
    </div>
  );
};
