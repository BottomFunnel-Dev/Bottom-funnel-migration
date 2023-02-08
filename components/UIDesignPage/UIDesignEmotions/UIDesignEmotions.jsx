import Image from "next/image";
import React from "react";
import styles from "./UIDesignEmotions.module.css";

export const UIDesignEmotions = () => {
  const cardsData = [
    "/Images/UIDesignPhotos/discover.webp",
    "/Images/UIDesignPhotos/strategize.webp",
    "/Images/UIDesignPhotos/design.webp",
    "/Images/UIDesignPhotos/iterate.webp",
  ];
  return (
    <div className={styles.UIDesignEmotions}>
      <div className={styles.UIDesignEmotionscontainer}>
        <h1>
          Create design that <span>evoke emotions</span>
        </h1>
        <p>
          We create effortless, intuitive, and immersive interfaces that
          seamlessly guide users through their desired actions.
        </p>

        <div className={styles.UIDesignEmotionsmain}>
          <div className={styles.UIDesignEmotionsimage}>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src="/Images/UIDesignPhotos/desktop.webp"
              alt="UIDesignPhotos/desktop.webp"
            />
          </div>
          <div className={styles.UIDesignEmotionscontent}>
            <h2>
              Bottom Funnel <span>UI</span> Practices
            </h2>
            <p>
              Bottom Funnel is an online store that crafts brilliance together
              and delivers experience that are even evolving. We have a wide
              range of products.
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
                  alt={elem}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
