import React from "react";
import styles from "./BIWhyBF.module.css";
import Image from "next/image";

export default function BIWhyBF  () {
const cardData = [
{
title: "Designs",
body: "Compressive and highly logical interface design, focused on getting visitors to convert and engage with your product or service, drawn with a clear call-to-action.",
},
{
title: "Requirement Gathering",
body: "bottom funnel will help you get to the same page, get better understanding and clarity for both sides and come to a mutual agreement.",
},
{
title: "Prototype Demo",
body: "We design and develop your next big idea. After finalizing and designs approval, we freeze the scope and help our client with demo or prototype to have a look and feel of the app/web/platform.",
},
{
title: "Changes And Confirmation",
body: "The bottom funnel is a form where you can add and mention the required changes as per expectations you need in the existing platform. We will proceed with your confirmation on the same.",
},
{
title: "Deployment",
body: "We take all our clients very seriously, and we want to help you build a success story by providing technical consultation, UAT testing, training and deployment across all the leading platforms.",
},
{
title: "Support And Maintenance",
body: "We provide you with the best possible service and support. Our team is always ready to answer your queries, whether they are technical or business-related.",
},
];

  return (
    <div className={styles.BIWhyBFMain}>
      <h1>
        <span>Business Intelligence</span> Solutions
      </h1>
      <div className={styles.BIPartnerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Our cutting-edge BI solutions help you forecast accurately and develop
        effective business strategies by analyzing the data in its entirety.
        With our portfolio of cloud-based solutions, we deliver business
        intelligence to your doorstep - allowing you to make informed decisions
        quickly and easily.
      </p>
      <div className={styles.BIWhyBFContainer}>
        <div className={styles.BIWhyBFContent}>
          {cardData.map(({ title, body }, idx) => {
            return (
              <div>
                <h4>{title}</h4>
                <div>
                  <p>{body}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.BIWhyBFImage}>
              <Image
                  src={"/Images/startupSolPhotos/whyBF.webp"}
                  alt={"Image"}
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
