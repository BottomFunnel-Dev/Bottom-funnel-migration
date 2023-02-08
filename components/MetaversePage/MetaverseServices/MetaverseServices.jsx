import React from "react";
import styles from "./MetaverseServices.module.css";
import Image from "next/image";

export const MetaverseServices = () => {
  return (
    <div className={styles.MetaverseServicesContainer}>
      <h1>
        <span>Metaverse</span> Services
      </h1>
      <div className={styles.MetaverseServicesHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        The metaverse is an upcoming network where people can meet and socialise
        in a single shared space. And now that it's available, we're sure you'll
        be hooked! Explore places and things like never before with this
        immersive technology.
      </p>
      <div className={styles.MetaverseServicesImage}>
           <Image
                  src={"/Images/metaversePhotos/process.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
      </div>
    </div>
  );
};
