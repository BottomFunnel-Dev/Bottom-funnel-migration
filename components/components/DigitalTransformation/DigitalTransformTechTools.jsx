import Image from "next/image";
import React from "react";
import styles from "./DigitalTransformTechTools.module.css";

export const DigitalTransformTechTools = () => {
  const techtoolsuseddata = [
    {
      icon: "/Images/digitaltransformation/Vector.webp",
      txt: "Artificial Intelligent ",
    },

    {
      icon: "/Images/digitaltransformation/Vector-1.webp",
      txt: "Blockchain",
    },

    {
      icon: "/Images/digitaltransformation/Vector-2.webp",
      txt: "Augmented Reality",
    },

    {
      icon: "/Images/digitaltransformation/Layer 3.webp",
      txt: "Artificial Inteligent",
    },

    {
      icon: "/Images/digitaltransformation/Component 100.webp",
      txt: "Artificial Inteligent",
    },

    {
      icon: "/Images/digitaltransformation/iot 3.webp",
      txt: "Internet of Things ",
    },
  ];

  return (
    <div className={styles.digitaltransformationtechtoolsweusedmainbox}>
      <div
        className={
          styles.digitaltransformationtechtoolsweusedmainboxuppertxtbox
        }
      >
        <div
          className={
            styles.digitaltransformationtechtoolsweusedmainboxuppertxtboxleftbox
          }
        >
          <h1>
            <span className={styles.specialcolor}>Tech</span> and{" "}
            <span className={styles.specialcolor}>Tools</span> We Use
          </h1>
        </div>

        <div
          className={
            styles.digitaltransformationtechtoolsweusedmainboxuppertxtboxrightbox
          }
        >
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
            orci sed justo volutpat interdum sit amet in metus. Nam at
          </h4>
        </div>
      </div>

      <div className={styles.flexingboxofdigitaltransformationtechandtools}>
        {techtoolsuseddata.map((e) => {
          return (
            <div
              className={
                styles.flexingboxofdigitaltransformationtechandtoolsaftermapping
              }
            >
              <div className={styles.techandtoolsdigitaltransformationicon}>
                <Image
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                  src={e.icon}
                  alt={e.icon}
                />
              </div>
              <h4>{e.txt}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
