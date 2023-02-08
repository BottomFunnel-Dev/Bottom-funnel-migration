import Image from "next/image";
import React from "react";
import styles from "./midImages.module.css";

export const MidImages = () => {
  return (
    <div className={styles.RGMidImgContainer}>
      <div className={styles.RGleftImgDiv}>
        <Image
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
          src="/Images/Scoping-Session/Banners-&-Background/Component79.webp"
          alt="Scoping-Session/Banners-&-Background/Component79.webp"
        />
      </div>
      <div className={styles.RGrightImgDiv}>
        <Image
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
          src="/Images/Scoping-Session/Banners-&-Background/Component78.webp"
          alt="Scoping-Session/Banners-&-Background/Component78.webp"
        />
      </div>
      <div className={styles.RGimgText}>
        <ul>
          <li>
            Focuses on bilateral communication which generates
            <br />
            value and knowledge sharing.
          </li>
          <li>
            Strategizes and equips you with all the information
            <br />
            regarding project planning.
          </li>
          <li>Provides insights into our work culture and practices.</li>
          <li>
            Documenting a scope of work seamlessly guides you
            <br />
            towards your end goal.
          </li>
          <li>
            Tailor-made technological stack that aligns with your <br />
            requirements.
          </li>
          <li>
            Outlines project delivery along with potential cost
            <br />
            estimates
          </li>
          <li>Delivers results in the easiest and fastest way.</li>
        </ul>
      </div>
    </div>
  );
};
