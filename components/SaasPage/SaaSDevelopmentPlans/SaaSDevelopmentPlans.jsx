import React from "react";
import styles from "./SaaSDevelopmentPlans.module.css";
import Image from "next/image";

export const SaaSDevelopmentPlans = () => {
  return (
    <>
      <div className={styles.devPlansMainDiv}>
         <div className={styles.devPlanHeadings}>
            <h1>What Our SaaS Application Development Plans Include ?</h1>
         </div>
         <div className={styles.devPlanContainer}>

            <div className={styles.devPlanDataDiv}>
                <div className={styles.devPlanLogo}>
                <Image
                    src={"/Images/saasPhotos/SaasImages/logo3.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <h3>
                    The Software Package
                </h3>
                <p>
                    This is the actual product that will be deployed<br/>
                    to your customers, built from the ground up to<br/>
                    handle your exact specifications.The final<br/>
                    product will be thoroughtly tested, optimised issues before<br/>
                    delivering the sources code via GitHub.
                </p>
            </div>

            <div className={styles.devPlanDataDiv}>
                <div className={styles.devPlanLogo}>
                <Image
                    src={"/Images/saasPhotos/SaasImages/logo1.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <h3>
                    Sales Platform and frontend informational site
                </h3>
                <p>
                    While often overlooked,the front-end website<br/>
                    used to market and sell the software is a crucial<br/>
                    part of any SaaS platform. To make sure the<br/>
                    marketing site has the right impact,our team will<br/>
                    ensure that it contains the right targeted content<br/>
                    designed to capture leads and convert them into sales
                </p>
            </div>

            <div className={styles.devPlanDataDiv}>
                <div className={styles.devPlanLogo}>
                <Image
                    src={"/Images/saasPhotos/SaasImages/logo2.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <h3>
                    Subscription Suite and Account Management
                </h3>
                <p>
                    Ultimately,you'll need an account<br/>
                    management sysytem to sign up the new users<br/>
                    and process payment securely.Our SaaS<br/>
                    development company will provide the<br/>
                    necessary multitenancy user management<br/>
                    tools to ensure your SaaS product is a success,<br/>
                    with a role-based system allowing users to edit<br/>
                    and update account information,track sales,<br/>
                    handle customer service,and more.
                </p>
            </div>
         </div>
      </div>
    </>
  );
};
