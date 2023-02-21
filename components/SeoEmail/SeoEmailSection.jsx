import React from "react";
import { SeoForm } from "../SEO/seoForm/SeoForm";
import styles from "./SeoEmailSection.module.css";

export default function SeoEmailSection() {
  return (
    <div className={styles._SeoEmailMain1}>
      <div className={styles.emailgifDenote}>
        <lottie-player
          src="/Animation/DMAnimation/7.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>

      <div className={styles._SeoEmailupperdiv}>
        <div className={styles._SeoEmailtext}>
          <div className={styles._SeoEmailheading}>
            Email Management Services
          </div>

          <p className={styles._SeoEmailparagraph}>
            Our Search Engine Marketing Services start with in-depth keyword
            research along with Email campaign setup and optimization to deliver
            ROI-driven Email management services. Our Search Engine Marketing
            Company follows a brand-focused approach backed by seamless
            coordination and detailed reporting, thus helping your clients meet
            their paid search goals.
          </p>
          <div className={styles._SeoEmailPricing}>
            <button>Check Email SEO Pricing</button>
          </div>
        </div>

        <SeoForm />
      </div>
    </div>
  );
}
