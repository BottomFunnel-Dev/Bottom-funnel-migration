import React from "react";
import styles from "./CustomisedWebUnique.module.css";

export const CustomisedWebUnique = () => {
  return (
    <div className={styles.CustomisedWebUniqueContainer}>
      <div className={styles.CustomisedWebUniqueContent}>
        <h1>Customize your website to suit your unique requirements.</h1>
        <div className={styles.CustomisedWebUniqueHrLine}>
          <span></span>
          <div></div>
          <span></span>
        </div>
        <p>
          When it comes to building a website, you don't just want one that
          looks great and functions correctly. You want a site that represents
          your brand and speaks for itself, and Bottom Funnel can help you do
          just that. With years of experience under their belt, our team of
          talented developers is ready to work with you to create a website that
          reflects your brand identity while delivering an exceptional user
          experience. We use state-of-the-art technologies like HTML5, CSS3,
          jQuery, Bootstrap 3, and many more to help you build a powerful site
          that works on all devices. We're proud to be one of the top custom
          website solutions in town - providing all-round solutions for your
          business needs from marketing strategy to ecommerce solutions.
        </p>
      </div>
      <div className={styles.CustomisedWebUniqueImage}>
        <img src="Images/customWebPhotos/html-fit.png" alt="HTML fit vector" />
      </div>
    </div>
  );
};
