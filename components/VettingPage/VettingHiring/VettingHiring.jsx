import React from "react";
import styles from "./VettingHiring.module.css";
import Image from "next/image";

export const VettingHiring = () => {
  const CardsData = [
    {
      title: "Eliminates",
      body: "The need for HR for cultural, language, and background checks.",
    },
    { title: "Zero", body: "Reliance on technical recruiters." },
    { title: "75%", body: "Reduction in the guesswork for hiring managers." },
    { title: "5X", body: "Increase in the chance of the right hire." },
    { title: "96.5%", body: "Unit candidates are filtered out." },
  ];
  return (
    <div className={styles.vettingHiringContainer}>
      <h1>
        How Does our <span>vetting process</span> help in hiring?
      </h1>
      <div className={styles.vettingHiringMain}>
        {CardsData.map(({ title, body }) => (
          <div>
            <div className={styles.vettingHiringImage}>
              <Image
                src={"/Images/VettingPhotos/points.webp"}
                alt={"pointsimage"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={styles.vettingHiringContent}>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
