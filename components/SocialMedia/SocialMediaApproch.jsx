import React from "react";
import styles from "./SocialMediaApproch.module.css";
import Image from "next/image";

export default function SocialMediaApproch() {
  return (
    <div className={styles.socialmediaapprochmainboxes}>
      <div className={styles.socialmediaapprochmainboxesfortext}>
        <h1>OUR SOCIAL MEDIA DEVELOPMENT APPROCH</h1>
      </div>
      <div className={styles.socialmediaimageboxesforapproch}>
        <Image
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
          src={"/Images/socialmedia/bannesbackground/Frame.webp"}
          alt="images"
        />
      </div>
    </div>
  );
}
