import React from "react";
import styles from "./XamarinMobileDevelopment.module.css";
import Image from "next/image";

export const XamarinMobileDevelopment = () => {

   return (
      <>
         <div className={styles.xamarinMobileDevelopmentMainDiv}>
            <div className={styles.xamarinMobileDevelopmentContentText}>
               <h1> Xamarin Mobile App Development Company </h1>
               <p>Bottom Funnel is a leading software development company in the world. We provide best xamarin app development services to our clients which ensures that they get quality code at affordable prices. We are experts in mobile application development and have years of experience working on various types of applications.
               </p>
            </div>
            <div className={styles.xamarinMobileDevelopmentContentImage}>
                  <Image
                      src={"/Images/Xamarin/Frame.webp"}
                      alt={"image"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                  />
            </div>
         </div>
      </>
   );
};
