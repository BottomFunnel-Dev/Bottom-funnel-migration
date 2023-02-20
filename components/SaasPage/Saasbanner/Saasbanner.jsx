import React from "react";
import { BannerContent } from "./BannerContent/BannerContent";
import styles from "./Saasbanner.module.css";
import Image from "next/image";

export const Saasbanner = () => {
  return (
    <>
      <div className={styles.saasBannerMain}>
        <div className={styles.saasBannerImage}>
            <Image
                src={"/Images/saasPhotos/SaasImages/banner.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
              <h1>SAAS Development <br/> Company</h1>
              <p>As a ledaing SaaS development comapny, we offer top-notch, <br/> highly advanced, high-tech, and successful Saas-based products <br/> 
                 to our customers worldwide. Citrusbug follows modern software <br/> development practices to deliver SaaS products, maintaining <br/> product security and quality.
              </p>
              <button>Start 15 days risk free trial</button>
        </div>
      </div>
      {/* <BannerContent /> */}
    </>
  );
};
