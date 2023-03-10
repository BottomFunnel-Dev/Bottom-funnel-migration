import React from "react";
import styles from "./StartupSolPartner.module.css";
import Image from "next/image";

export default function StartupSolPartner() {
  return (
    <div className={styles.StartupSolPartnerContainer}>
      <h1>
        <span>Startup</span> Solutions Partner
      </h1>
      <div className={styles.StartupSolPartnerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Getting a business off the ground is no cakewalk. It requires a lot of
        hard work and dedication, but if you do everything right, then surely
        you will see success. After all, it's not easy to be one on the
        Blockchain and make millions in return! But with the help of Startup
        solutions partner, you can get your idea up and running quickly while
        getting the support you need to succeed.
      </p>
      <ul>
        <li>Powerful product in ther first launch</li>
        <li>Performance that leaves a mark</li>
        <li>Precision in codes & design</li>
        <li>Pragmatic approach to skyrocketed growth</li>
      </ul>
      <div className={styles.StartupSolPartnerImage}>
        <Image
          src={"/Images/startupSolPhotos/solPartner.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
