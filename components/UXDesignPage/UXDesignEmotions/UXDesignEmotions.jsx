import Image from "next/image";
import React from "react";
import styles from "./UXDesignEmotions.module.css";

export const UXDesignEmotions = () => {
  const cardsData = [
    "/Images/UXDesignPhotos/discover.webp",
    "/Images/UXDesignPhotos/define.webp",
    "/Images/UXDesignPhotos/deliver.webp",
  ];

  return (
    <div className={styles.UXDesignEmotions}>
      <div className={styles.UXDesignEmotionscontainer}>
        <h1>
          Keep your users at the center of your design process with our{" "}
          <span>UXD practices</span>
        </h1>

        <div className={styles.UXDesignEmotionsmain}>
          <div className={styles.UXDesignEmotionsimage}>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src="/Images/UXDesignPhotos/study.webp"
              alt="desktop.webp"
            />
          </div>
          <div className={styles.UXDesignEmotionscontent}>
            <h2>
              Bottom Funnel <span>UX</span> Practices
            </h2>
            <p>
              Bottom Funnel is a startup you can trust. We combine our team's
              deep experience in design, deep knowledge of the industries our
              clients serve, and insight gained from our discoveries.
            </p>
            <div>
              {cardsData.map((elem) => (
                <Image
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "fit-content", height: "100%" }}
                  key={elem}
                  src={elem}
                  alt="Practice points "
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
