import Image from "next/image";
import React from "react";
import styles from "./digitalmarketing.module.css";
export const DigitalMarketing = () => {
  return (
    <div className={styles.digitalBanner}>
      <div className={styles.fbIcon}>
        {" "}
        <Image
          src={"https://d1krs40fxb67ye.cloudfront.net/Images/banner/digital/Facebook.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>

      <div className={styles.whatsappIcon}>
        {" "}
        <Image
          src={"https://d1krs40fxb67ye.cloudfront.net/Images/banner/digital/Whatsapp.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>

      <div className={styles.pinterestIcon}>
        {" "}
        <Image
          src={"https://d1krs40fxb67ye.cloudfront.net/Images/banner/digital/Pinterest.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>

      <div className={styles.linkedinIcon}>
        {" "}
        <Image
          src={"https://d1krs40fxb67ye.cloudfront.net/Images/banner/digital/Linkedin.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>
      
      <div className={styles.youtubeIcon}>
        {" "}
        <Image
          src={"https://d1krs40fxb67ye.cloudfront.net/Images/banner/digital/youtube.png"}
          alt={"bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"} />
      </div>
    </div>
  );
};
