import React from "react";
import styles from "./CloudWhyBF.module.css";
import Image from "next/image";

export const CloudWhyBF = () => {
  const cardData = [
    {
      title: "High Speed",
      body: "Bottom Funnel is a software as a service that instantly spins up new cloud computing instances in a matter of seconds, giving businesses agility and speed when developing software.",
    },
    {
      title: "Auto Software Updates",
      body: "WE understands this need for speed and innovation, which is why they've partnered with some of the most forward-thinking technology companies out there to offer them CI services.",
    },
    {
      title: "Efficiency and Cost Reduction",
      body: "Our cloud-based app that makes it easy for any business to build, manage and operate its digital presence. We give you access to the tools and services you need to grow your business online.",
    },
    {
      title: "Data Security",
      body: "With Granular permissions and access control options, you can effectively manage user access to sensitive data without compromising on convenience or productivity.",
    },
    {
      title: "Scalability",
      body: "We makes it easy for businesses to adapt to changing demands. By leasing additional capacity on the cloud, you can expand your bandwidth at a moment's notice, without investing in physical infrastructure.",
    },
    {
      title: "Collaboration",
      body: "Cloud roles and permissions help with visibility and monitoring of who did what and when to avoid conflicts and confusion.",
    },
  ];
  return (
    <div className={styles.CloudWhyBFMain}>
      <h1>
        Bottom Funnel for <span>Cloud</span> Services
      </h1>
      <div className={styles.CloudSolutionsHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className={styles.CloudWhyBFContainer}>
        <div className={styles.CloudWhyBFContent}>
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
        <div className={styles.CloudWhyBFImage}>
                <Image
                    src={"/Images/cloudPhotos/whyBF.webp"}
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
