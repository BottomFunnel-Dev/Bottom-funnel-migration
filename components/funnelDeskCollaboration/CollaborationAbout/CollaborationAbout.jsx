import React from "react";
import styles from "./CollaborationAbout.module.css";

export const CollaborationAbout = () => {
  return (
    <div className={styles.CollaborationAboutContainer}>
      <div className={styles.CollaborationAboutImages}>
        <img src="/Images/collaborationPhotos/about.webp" alt="about.webp" />
        <div></div>
      </div>
      <div className={styles.CollaborationAboutContent}>
        <h1>Collaboration</h1>
        <p>
          Support agents often need input from other internal teams to resolve
          an issue. However, without visibility into the progress being made by
          the other team, agents lose a lot of time in back-and-forth
          communications. All context is lost, resolution becomes delayed and
          the quality of your service takes a hit.
        </p>
      </div>
    </div>
  );
};
