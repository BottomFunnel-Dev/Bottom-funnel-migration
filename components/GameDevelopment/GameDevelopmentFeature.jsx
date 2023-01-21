import React from "react";
import styles from "./GameDevelopmentFeature.module.css";

export const GameDevelopmentFeature = () => {
  return (
    <div className={styles.gamedevelopmentfeaturemainboxes}>
      <div className={styles.gamedevelopmentfeaturetxtdiv}>
        <h1>
          Game Development{" "}
          <span className={styles.anaothercloror}>Feature</span> We Offer
        </h1>
        <p>
          We offer a variety of game development features that can help you make
          your game stand out from the crowd. These include but are not limited
          to:
        </p>
      </div>

      <div className={styles.gamedevelopmentanotherdivforboxesforfeatures}>
        <div className={styles.gamedevelopmentfeatureinnerbox1}>
          <img
            className={styles.gamedeveloperinnerimageallboxes}
            src="/Images/gamedevelopmentpage/level 1.png"
            alt="images"
          />
          <h4 className={styles.txtwhitegamedeveloperfeature}>
            Level and world design
          </h4>
        </div>

        <div className={styles.gamedevelopmentfeatureinnerbox2}>
          <img
            className={styles.gamedeveloperinnerimageallboxes}
            src="/Images/gamedevelopmentpage/Component 124.png"
            alt="images"
          />
          <h4 className={styles.txtwhitegamedeveloperfeature}>
            Art and/or sketches
          </h4>
        </div>

        <div className={styles.gamedevelopmentfeatureinnerbox3}>
          <img
            className={styles.gamedeveloperinnerimageallboxes}
            src="/Images/gamedevelopmentpage/character-design 1.png"
            alt="images"
          />
          <h4 className={styles.txtwhitegamedeveloperfeature}>
            Story and characters
          </h4>
        </div>

        <div className={styles.gamedevelopmentfeatureinnerbox4}>
          <img
            className={styles.gamedeveloperinnerimageallboxes}
            src="/Images/gamedevelopmentpage/gameplay 1.png"
            alt="images"
          />
          <h4 className={styles.txtwhitegamedeveloperfeature}>Gameplay</h4>
        </div>

        <div className={styles.gamedevelopmentfeatureinnerbox5}>
          <img
            className={styles.gamedeveloperinnerimageallboxes}
            src="/Images/gamedevelopmentpage/game 4.png"
            alt="images"
          />
          <h4 className={styles.txtwhitegamedeveloperfeature}>
            Core game mechanics
          </h4>
        </div>
      </div>
    </div>
  );
};
