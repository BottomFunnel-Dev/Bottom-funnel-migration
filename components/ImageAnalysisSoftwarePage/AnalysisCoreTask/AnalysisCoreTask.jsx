import React from "react";
import styles from "./AnalysisCoreTask.module.css";
import Image from "next/image";

export const AnalysisCoreTask = () => {
  const cardsData = [
    {
      title: "Detect",
      body: "Distinguish regions of interest for further analysis, individual objects from the background, etc.",
      image: "/Images/AnalysisSoftwarePhotos/eye.webp",
    },
    {
      title: "Recognize",
      body: "Label or classify objects in digital Images based on one or several object classes: people, vechicles, electronic components, etc.",
      image: "/Images/AnalysisSoftwarePhotos/lock.webp",
    },
    {
      title: "Identify",
      body: "Recognize individual features of an object and classify it with more precision: identify individual people, specific vehicles, animal species, device models, etc.",
      image: "/Images/AnalysisSoftwarePhotos/checked.webp",
    },
  ];

  return (
    <div className={styles.AnalysisCoreTaskContainer}>
      <h1>
        <span>Image Analysis</span> Core Tasks
      </h1>
      <div className={styles.AnalysisCoreTaskHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className={styles.AnalysisCoreTaskMain}>
        <div className={styles.AnalysisCoreTaskImage}>
              <Image
                  src={"/Images/AnalysisSoftwarePhotos/cards.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
        </div>
        <div className={styles.AnalysisCoreTaskCards}>
          {cardsData.map(({ title, body, image }) => (
            <div key={title}>
              <div>
                <div>
                <Image
                  src={image}
                  alt={title}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                </div>
                <h2>{title}</h2>
              </div>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
