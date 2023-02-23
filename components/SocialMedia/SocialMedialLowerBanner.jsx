import React from "react";
import styles from "./SocialMedialLowerBanner.module.css";
import Image from "next/image";

export default function SocialMedialLowerBanner() {
  const socialmedialowerbannerdata = [
    {
      img: "/Images/socialmedia/Icons/customer-review.webp",
      txt: "Customer Satisfaction",
    },

    {
      img: "/Images/socialmedia/Icons/proactive.webp",
      txt: "Agile Procedure",
    },

    {
      img: "/Images/socialmedia/Icons/team.webp",
      txt: "Dedicated Teams",
    },

    {
      img: "/Images/socialmedia/Icons/opacity.webp",
      txt: "Integrity & Transparancy",
    },

    {
      img: "/Images/socialmedia/Icons/diagram.webp",
      txt: "Flexible Engagement Models",
    },
  ];

  return (
    <div className={styles.socialmedialowerbannermainboxes}>
      <div className={styles.socialmediaflexboxlowerbanner}>
        {socialmedialowerbannerdata.map((e) => {
          return (
            <div className={styles.medialowerbannerimagedivflexing}>
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src={e.img}
                alt="images"
              />
              <h5>{e.txt}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}
