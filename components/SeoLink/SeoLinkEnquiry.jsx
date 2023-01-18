import React from "react";
import styles from "./SeoLinkEnquiry.module.css";
import Enq from "../ImageSection/EnquiryNow.jpg";

export default function SeoLinkEnquiryNow() {
  return (
    <div className={styles.seoLinkEnquiryNowMaindiv}>
      <div className={styles.seoLinkEnquiryNow}>
        <img src={Enq} alt="enq.img" />
      </div>

      <div className={styles.seoLinkEnquiryNow}>
        <h3>
          We help your business to be discovered by the people and not just
          spiders
        </h3>
        <p>
          From in-depth analysis of user and keyword trends to drafting killer
          strategies for your custom needs – we do it all. The only difference
          is – we as an affordable SEO Services company, do it in a much cooler
          way! Our fine-tuned professional Search Engine Optimization services
          embrace everything from Link strategy setup, expanding your business
          capabilities, cracking the Google search rankings to setting the right
          KPIs. The real game starts from here. We eavesdrop on your target
          audience to help them find where you are.
        </p>
        <div>EnquiryNow</div>
      </div>
    </div>
  );
}
