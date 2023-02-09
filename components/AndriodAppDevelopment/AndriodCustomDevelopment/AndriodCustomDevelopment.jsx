import React from "react";
import styles from "./AndriodCustomDevelopment.module.css";
import Image from "next/image";

export const AndriodCustomDevelopment = () => {

   return (
      <>
         <div className={styles.andriodCustomMainDiv}>
            <div className={styles.andriodCustomContentText}>
               <h1>We Offer Custom Andriod App Development Across All Platform  </h1>
               <p> We offer end-to-end android app development services, from design to development to scaling up your business online. We work with companies across all industries so no matter what your goals are, we can help you reach them with an app built by experts. Contact us today to see how we can benefit from our experience and expertise!
               </p>
            </div>
            <div className={styles.andriodCustomContentImage}>
               <Image
          src={"/Images/AndriodDevImages/Component 64.webp"}
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
