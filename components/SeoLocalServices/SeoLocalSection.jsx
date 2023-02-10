import React from "react";
import { SeoForm } from "../SEO/seoForm/SeoForm";
import styles from "./SeoLocalSection.module.css";
import Image from "next/image";

export const SeoLocalSection = () => {
  return (
    <div className={styles.seoLocalMain1}>
      <div className={styles.localgifDenote}>
        <Image
            src={"/Images/seopages/Comp-5.gif"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%"}}
          />
      </div>
      <div className={styles.seoLocalupperdiv}>
        <div className={styles.seoLocaltext}>
          <div className={styles.seoLocalheading}>Local SEO Services Company</div>

          <p className={styles.seoLocalparagraph}>
            Our local SEO services revolutionize your online presence so you can
            reach the right people with targeted traffic. We know how important
            it is to have a website that is search engine optimized and easy to
            navigate, so we work closely with our clients to ensure they're
            getting the results they want. Not only do our experts understand
            how search engines work, but they also know how to get your site on
            top of the rankings by implementing strategies that will help drive
            traffic and grow their business online.
          </p>

          <div className={styles.seoLocalPricing}>
            <button> Check Local SEO Pricing</button>
          </div>
        </div>

        <SeoForm />

      </div>
    </div>
  );
}
