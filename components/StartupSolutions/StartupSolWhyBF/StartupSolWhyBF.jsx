import React from "react";
import styles from "./StartupSolWhyBF.module.css";
import Image from "next/image";

export default function StartupSolWhyBF() {
  const cardData = [
    {
      title: "Research",
      body: "Our marketing strategy, you will be able to choose products that your startup needs and then prioritize them properly while keeping the long-term goals in mind.",
    },
    {
      title: "Startup formation",
      body: "Bottom Funnel is here to help you start a successful business. We have the expertise and experience to guide you through the process & plan that suits your needs.",
    },
    {
      title: "Startup branding",
      body: "Bottom Funnel is a business startup consulting firm. We collaborate with you and your team to establish a unified brand identity that expresses your company's vision.",
    },
    {
      title: "Scaling",
      body: "Bottom Funnel is here to help you navigate the shark-infested waters of entrepreneurship with its certified engineering team and management consulting professionals.",
    },
    {
      title: "Monetization",
      body: "BottomFunnel is a consulting business that helps startups and small businesses leverage their marketing strategies through a consultative approach.",
    },
    {
      title: "Unprecedented challenges",
      body: "If you're looking for an advisor who will work hard to help your new venture succeed, Bottom Funnel is the company for you.",
    },
  ];

  return (
    <div className={styles.StartupSolWhyBFMain}>
      <h1>Why Bottom Funnel For Startup Solutions</h1>
      <div className={styles.StartupSolPartnerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className={styles.StartupSolWhyBFContainer}>
        <div className={styles.StartupSolWhyBFContent}>
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
        <div className={styles.StartupSolWhyBFImage}>
          <Image
            src={"/Images/startupSolPhotos/whyBF.webp"}
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
}
