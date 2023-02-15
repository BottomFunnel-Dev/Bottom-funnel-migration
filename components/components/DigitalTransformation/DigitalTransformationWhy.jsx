import React from "react";
import styles from "./DigitalTransformationWhy.module.css";

export const DigitalTransformationWhy = () => {
  const digitatransformationwhydata = [
    {
      xtt: "Enhance data collection",
    },
    {
      xtt: "A better customer experience",
    },

    {
      xtt: "Stronger resource management",
    },

    {
      xtt: "Encourages digital culture",
    },

    {
      xtt: "Data-driven customer insights",
    },

    {
      xtt: "Increased profits",
    },
  ];

  return (
    <div className={styles.digitaltransformationwhymainboxes}>
      <div className={styles.digitaltransformationwhyyouneedtextboxupperflex}>
        <div
          className={
            styles.digitaltransformationwhyyouneedtextboxupperflexleftbox
          }
        >
          <h1>
            Why You Need{" "}
            <span className={styles.specialcolor}>
              Digital Transformation ?{" "}
            </span>
          </h1>
        </div>
        <div
          className={
            styles.digitaltransformationwhyyouneedtextboxupperflexrightbox
          }
        >
          <h4>
            Digital Transformation is the adoption of digital technology by an
            organization to digitize non-digital products, services or
            operations.The goal for its implementation is to increase value
            through innovation,invention,customer experience or efficiency.
          </h4>
        </div>
      </div>

      <div className={styles.digitaltransformationdatawhymappingmainbox}>
        {digitatransformationwhydata.map((e) => {
          return (
            <div
              className={
                styles.digitaltransformationdatawhymappingmainboxforlogosvgandtxt
              }
            >
              <div
                className={
                  styles.digitaltransformationdatawhymappingmainboxforlogosvgandtxtsvgonly
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-check-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>
              </div>
              <div
                className={styles.flexingaftermappingdigitatransformationboxtxt}
              >
                <h2>{e.xtt}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
