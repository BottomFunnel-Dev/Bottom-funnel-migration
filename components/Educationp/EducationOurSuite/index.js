import Image from "next/image";
import React from "react";
import styles from "./EducationOurSuite.module.css";

export default function EducationOurSuite({ data }) {
  const { heading, cardsData } = data;

  return (
    <div className={styles.EducationOurSuiteContainer}>
      <h1>{heading}</h1>
      <div>
        {cardsData.map(({ image, title, description }) => (
          <div key={title} className={styles.EducationOurSuiteCards}>
            <div>
              <Image
                src={image}
                alt={image}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
