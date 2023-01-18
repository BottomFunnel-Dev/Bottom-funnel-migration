import React from "react";
import { SeoForm } from "../SEO/seoForm/SeoForm";
import styles from "./SeoguestSection.module.css";

export default function SeoguestSection() {
  return (
    <div className={styles._SeoEmailMain1}>
      <div className={styles.guestgifDenote}>
        <img src="Images/seopages/Comp-7.gif" alt="animated gif" />
      </div>
      <div className={styles._SeoEmailupperdiv}>
        <div className={styles._SeoEmailtext}>
          <div className={styles._SeoEmailheading}>Guest Posting Services</div>

          <p className={styles._SeoEmailparagraph}>
            We help brands to grow their business with guest blog posting
            services.We craft a well-researched and unique article that
            incorporates your website links and posts on targeted sites. Our
            guest blogging strategy can boost your brand visibility and traffic
            by quality content creation, outreach, and placement by our guest
            blogging experts.
          </p>
          <div className={styles._SeoEmailPricing}>
            <button>Check Email SEO Pricing</button>
          </div>
        </div>
        
        <SeoForm/>
      </div>
    </div>
  );
}
