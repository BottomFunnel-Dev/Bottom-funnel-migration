import React from "react";
import { SeoForm } from "../SEO/seoForm/SeoForm";
import styles from "./SeoSEMSection.module.css";

export default function SeoSEMSection() {
  return (
    <div className={styles._SeoSEMMain1}>
      <div className={styles.semgifDenote}>
        <lottie-player
          src="/Animation/DMAnimation/3.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
      <div className={styles._SeoSEMupperdiv}>
        <div className={styles._SeoSEMtext}>
          <div className={styles._SeoSEMheading}>
            Search Engine Marketing Agency
          </div>

          <p className={styles._SeoSEMparagraph}>
            Our Search Engine Marketing Services start with in-depth keyword
            research along with SEM campaign setup and optimization to deliver
            ROI-driven PPC management services. Our Search Engine Marketing
            Company follows a brand-focused approach backed by seamless
            coordination and detailed reporting, thus helping your clients meet
            their paid search goals.
          </p>
          <div className={styles._SeoSEMPricing}>
            <button>Check SEM SEO Pricing</button>
          </div>
        </div>

        <SeoForm />
      </div>
    </div>
  );
}
