import React from "react";
import { SeoForm } from "../seoForm/SeoForm";
import styles from "./Seosection.module.css";
import Image from "next/image";

function Seosection() {
  return (
    <div className={styles._SeoMain1}>
      <div className={styles.gifDenote}>
        {/* <img src="Images/seopages/1.gif" alt="" /> */}
        <Image
            src={"/Images/seopages/1.gif"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            />
      </div>
      <div className={styles._Seoupperdiv}>
        <div className={styles._Seotext}>
          <div className={styles.Seoheading}>Professional SEO Services Company</div>
          <p className={styles._Seoparagraph}>
            We are a team of SEOs and analysts who drive results through our
            know-how and hard work. We get the job done properly and
            efficiently, so that your online presence gets noticed. Whether it
            is a blog post or an e-commerce website, we make sure they reach
            their target audience online.
          </p>
          <button className={styles._Seochkpricing}>Check the pricing</button>
        </div>
        <SeoForm />
      </div>
    </div>
  );
}

export default Seosection;
