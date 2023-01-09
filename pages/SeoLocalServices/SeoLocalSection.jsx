import React from "react";
import { SeoForm } from "../SEO/seoForm/SeoForm";
// import { SeoForm } from "../SEO/seoForm/SeoForm";
import styles from "./SeoLocalSection.module.css";

export const SeoLocalSection = () => {
  return (
    <div className={styles._SeoLocalMain1}>
      <div className={styles.localgifDenote}>
        <img src="Images/seopages/Comp-5.gif" alt="" />
      </div>
      <div className={styles._SeoLocalupperdiv}>
        <div className={styles._SeoLocaltext}>
          <div className={styles._SeoLocalheading}>Local SEO Services Company</div>

          <p className={styles._SeoLocalparagraph}>
            Our local SEO services revolutionize your online presence so you can
            reach the right people with targeted traffic. We know how important
            it is to have a website that is search engine optimized and easy to
            navigate, so we work closely with our clients to ensure they're
            getting the results they want. Not only do our experts understand
            how search engines work, but they also know how to get your site on
            top of the rankings by implementing strategies that will help drive
            traffic and grow their business online.
          </p>

          <div className={styles._SeoLocalPricing}>
            <button> Check Local SEO Pricing</button>
          </div>
        </div>

        <SeoForm />

      </div>
    </div>
  );
}
