import React from "react";
import styles from "./BannerContent.module.css";

export const BannerContent = () => {
  return (
    <div className={styles.saasBannerContentMain}>
      <div className={styles.saasBannerContent}>
        <h1>SaaS App Development</h1>
        <div>
          <p>
            Oops! Your website isn't working properly these days. We know that you're concerned and we understand your need for quality
            service. That's why we offer saas development services to help you improve the performance of your website. We have years
            of experience in this field, so rest assured that we'll deliver an effective solution that will boost your online presence.
          </p>
        </div>
        <button>Request a proposal</button>
      </div>
      <div className={styles.saasBannerContentImage}>
        <img
          src="https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/saasPhotos/saas-vector.jpeg"
          alt="Saas App Development"
        />
      </div>
    </div>
  );
};
