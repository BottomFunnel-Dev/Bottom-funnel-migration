import React from 'react';
import styles from "./AiContentBanner.module.css";

export const AiContentBanner = () => {
  return (
    <div className={styles.aicontentbannermainboxes}>
      <div className={styles.aicontentbannerboxfortext}>
        <h1>
          WRITE BETTER,FASTER
          Generate Content & Compy In Seconds with AI
        </h1>

        <p>
          Use AI to boost your traffic and save hours of work. Automatically write unique,engaging and high-quality copy or content
          from long-form blog posts or landing pages to digital ads in seconds.
        </p>

        <button className={styles.aicontentbannerbutton}>Get Started</button>
      </div>
    </div>
  );
};

