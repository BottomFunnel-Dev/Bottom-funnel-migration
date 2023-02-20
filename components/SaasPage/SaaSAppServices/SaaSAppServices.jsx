import React from "react";
import styles from "./SaaSAppServices.module.css";
import Image from "next/image";

export const SaaSAppServices = () => {
  return (
    <>
    <div className={styles.saasappOuterDiv}>
      <h1> Our SaaS application development services</h1>
      <div className={styles.saasAppMainDiv}>
        <div className={styles.saasAppLeftContainer}>
          <div className={styles.saasAppHeading}>
             <div className={styles.saasAppImage}>
               <Image
                  src={"/Images/saasPhotos/SaasImages/Teams.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
             </div>
             <h6>SaaS Development <br/> Consultancy</h6>
          </div>

          <div className={styles.saasAppHeading}>
             <div className={styles.saasAppImage}>
               <Image
                  src={"/Images/saasPhotos/SaasImages/AppDesign.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
             </div>
             <h6>SaaS app design <br/> & prototyping</h6>
          </div>

          <div className={styles.saasAppHeading}>
             <div className={styles.saasAppImage}>
               <Image
                  src={"/Images/saasPhotos/SaasImages/Hardware.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
             </div>
             <h6>SaaS application <br/> development</h6>
          </div>


          <div className={styles.saasAppHeading}>
             <div className={styles.saasAppImage}>
               <Image
                  src={"/Images/saasPhotos/SaasImages/QA-Testing.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
             </div>
             <h6>Suppport & <br/> Maintenance</h6>
          </div>
        </div>

        <div className={styles.saasAppRightContainer}>
         <div className={styles.saasAppRightData}>

            <div className={styles.saasAppServiceImage}>
               <Image
                  src={"/Images/saasPhotos/SaasImages/SaaSservice.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
            <h3>SaaS development consulting</h3>
            <p>
                Implenting a SaaS solution is the first step towards business digitalization.
                We've worked with the best IT innobvations for 10 years. we can help to apply them in your busines
                and tell the pros an dcons of their implentations. We also perform the discovery 
                phase, develop the SaaS application concept, and devise a dvelopment strategy
                that reflects your long-term goals.
            </p>    
            <ul>
                <li>Technical Consultation</li>
                <li>Conceptualization</li>
                <li>Strategy development</li>
            </ul>
         </div>
        </div>
      </div>
    </div>
    </>
  );
};
