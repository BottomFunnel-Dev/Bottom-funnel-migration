import Image from "next/image";
import React from "react";
import styles from "./fitnesssolution.module.css";

export default function FitnessSolution() {
  const fitnesssolution = [
    {
      img: "/Images/fitness/wearable.webp",
      p: "Wearable Apps",
    },
    {
      img: "/Images/fitness/gym.webp",
      p: "Gym App",
    },
    {
      img: "/Images/fitness/tracker.webp",
      p: "Activity Traking app",
    },
    {
      img: "/Images/fitness/yoga.webp",
      p: "Yoga App",
    },
    {
      img: "/Images/fitness/partner.webp",
      p: "Gym Partner App",
    },
    {
      img: "/Images/fitness/diet.webp",
      p: "Diet Planning App",
    },
  ];

  return (
    <div className={styles.szfitnesssolution}>
      <div>
        <h1>Solutions</h1>
        <p>
          Our team of experts has created many successful apps for a wide range
          of industries and categories, such as health & wellness, travel &
          hospitality, real estate & marketing automation, education etc., so
          you can be sure your project will be taken care of by professionals
          who know what they're doing best.
        </p>
      </div>

      <div className={styles.fitnesssolutionsub}>
        {fitnesssolution.map((item, i) => {
          return (
            <div key={i} className={styles.szfeaturdocssol}>
              <div className={styles.szdocimgsol}>
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
        ;
      </div>
    </div>
  );
}
