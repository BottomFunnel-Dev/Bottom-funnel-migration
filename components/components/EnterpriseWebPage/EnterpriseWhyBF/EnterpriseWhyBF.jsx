import React from "react";
import styles from "./EnterpriseWhyBF.module.css";
import Image from "next/image";

export const EnterpriseWhyBF = () => {
  return (
    <div className={styles.EnterpriseWhyBFContainer}>
      <h1>
        Why <span>Bottom Funnel</span> for Enterprise Web Solutions
      </h1>
      <div className={styles.EnterpriseWebSolutionsHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className={styles.EnterpriseWhyBFMain}>
        <div className={styles.EnterpriseWhyBFBontent}>
          <div>
            <h2>Agile Development Approach</h2>
            <p>
              Customer satisfaction is the most important factor of our service,
              which is why we adhere strictly to Agile principles to develop
              enterprise apps.
            </p>
          </div>
          <div>
            <h2>Cost-effective and Time Saving</h2>
            <p>
              With Bottom Funnel for enterprise application development allows
              companies to save time by leveraging expert resources while
              leveraging services in a cost-effective manner.
            </p>
          </div>
          <div>
            <h2>Solutions that best fit your business</h2>
            <p>
              Brainstorm to understand market and user needs in order to provide
              the most viable solutions that meet market needs.
            </p>
          </div>
          <div>
            <h2>Automate Processes</h2>
            <p>
              Leading enterprise apps that automate business processes and
              enable rapid action with minimal human intervention.
            </p>
          </div>
        </div>
        <div className={styles.EnterpriseWhyBFImage}>
            <Image
                src={"/Images/enterpriseWebPhotos/whybottomfunnel.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
        </div>
      </div>
    </div>
  );
};
