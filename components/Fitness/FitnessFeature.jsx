import Image from "next/image";
import React from "react";
import styles from "./Fitnessfeature.module.css";

export default function FitnessFeature() {
  const fitnessfeature = [
    {
      img: "/Images/fitness/advanced.webp",
      p: "Advanced Search",
    },
    {
      img: "/Images/fitness/easy.webp",
      p: "Easy Payment",
    },
    {
      img: "/Images/fitness/video.webp",
      p: "Video Calling",
    },
    {
      img: "/Images/fitness/ratings.webp",
      p: "Ratings",
    },
    {
      img: "/Images/fitness/treaking.webp",
      p: "Performence Tracking",
    },
    {
      img: "/Images/fitness/live.webp",
      p: "Live Training",
    },
  ];

  return (
    <div className={styles.szfitfeaturesection}>
      <div className={styles.fitfeature}>
        <h1>Features</h1>
        <p>
          With brand new features like interactive graphs and charts, you'll
          never miss a beat when it comes to tracking your progress. And our
          community will help keep you motivated by offering support from other
          likeminded individuals.
        </p>
      </div>
      <div className={styles.fitfeaturemedia}>
        {fitnessfeature.map((item, i) => {
          return (
            <div key={i} className={styles.fitfeaturdocs}>
              <div className={styles.fitdocimg}>
                <Image
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                  src={item.img}
                  alt={item.img}
                />
              </div>
              <p>{item.p}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
