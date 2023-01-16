import React from "react";
import styles from "./techStackintro.module.css";
import { useState } from "react";
export const Techstackintro = ({ techContent }) => {
  const [stack, setStack] = useState(0);

  const handleStack = (element) => {
    console.log(element);
    setStack(element);
  };

  return (
    <div className={styles.aspTechIntro}>
      <div className={styles.headText}>
        <h1>
          What is <span>{techContent.heading}</span> and its frameworks
        </h1>
        <p>{techContent.description}</p>
      </div>

      <div className={styles.aspStackMain}>
        <div className={styles.aspTechStackGrid}>
          {techContent.aspstack.map((item, index) => (
            <button
              style={
                index === stack
                  ? {
                    background: "#ffe2da",
                    borderLeft: "5px solid #ef4c23",
                    color: "#ef4c23",
                  }
                  : {}
              }
              onMouseEnter={() => {
                handleStack(index);
              }}
              key={index}
            >
              {item.stackName}
            </button>
          ))}
        </div>

        <div className={styles.aspStackAbout}>
          <div className={styles.techContentDiv}>
            <div className={styles.stackImage}>
              <img
                src={techContent.aspstack[stack].stackIcon}
                alt="aspstack.png"
              />
            </div>
            <div className={styles.stackIntroduction}>
              <p>{techContent.aspstack[stack].description}</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};
