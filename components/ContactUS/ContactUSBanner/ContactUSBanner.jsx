import React from "react";
import styles from "./ContactUSBanner.module.css";
import Image from "next/image";

export const ContactUSBanner = () => {
  return (
    <div className={styles.contactUsBannermain}>
      <div className={styles.ContactUsBannerimage}>
   
        <Image
          src={"/Images/ContactUS/banner.webp"}
          alt={"contactimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className={styles.ContactUsBannerContent}> 
        <h1>
          Share Your Details, Get In Touch Here at{" "}
          <span className={styles.ContactUsBanneranimatedtitle}>Bottom Funnel</span>
        </h1>

        <div></div>
        
        <p>
          It's hard to stand out in today's noisy market, but that doesn't mean
          you can't try! With over 95% of messages answered within 1 business
          day, Bottom Funnel is here to help make your project stand out from
          the crowd.
          <br />
          We understand that your time is precious, and we want to make sure you
          get the best possible response.
        </p>
        
        <button>Get Started</button>
      </div>
    </div>
  );
};
