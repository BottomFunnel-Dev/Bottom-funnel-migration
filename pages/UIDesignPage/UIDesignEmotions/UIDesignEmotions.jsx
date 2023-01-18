import React from "react";
import styles from "./UIDesignEmotions.module.css";

export const UIDesignEmotions = () => {
  const cardsData = [
    "Images/UIDesignPhotos/discover.png",
    "Images/UIDesignPhotos/strategize.png",
    "Images/UIDesignPhotos/design.png",
    "Images/UIDesignPhotos/iterate.png",
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
            <img src="Images/UIDesignPhotos/desktop.png" alt="desktop.png" />
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
                <img key={elem} src={elem} alt="Practice points " />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
