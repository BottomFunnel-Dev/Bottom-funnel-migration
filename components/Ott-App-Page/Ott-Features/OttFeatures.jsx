import React from "react";
import styles from "./ottFeatures.module.css";

export default function OttFeatures() {
  const OttFeaturesData = [
    {
      img: "/Images/ott-app/Vector-4.webp",
      title: "Update On Time",
      para: "Upload in bulk, organize content in categories, add custom filters & upload extras",
    },

    {
      img: "/Images/ott-app/Vector-2.webp",
      title: "Social Media Integration",
      para: "Showcase your content in a beautiful on-demand video catalog.",
    },

    {
      img: "/Images/ott-app/Vector-3.webp",
      title: "Ratings",
      para: "Schedule events in advance & build excitemet with a countdown overlay.",
    },

    {
      img: "/Images/ott-app/Vector-5.webp",
      title: "Reminders",
      para: "Offer subscriptions or one-time purchase. Accept credit cards & PayPal.",
    },

    {
      img: "/Images/ott-app/Group.webp",
      title: "Push Notification",
      para: "know what your audience likes & how your content is performing.",
    },

    {
      img: "/Images/ott-app/Vector-6.webp",
      title: "Live Chatting",
      para: "Get organized on all devices",
    },
  ];

  return (
    <div className={styles.ottFeaturesContainer}>
      <div className={styles.ottFeaturesHeading}>
        <h1>Features</h1>
        <p>
          You can take care of the video quality and we take care of everything
          else
        </p>
      </div>
      <div className={styles.ottFeaturesMain}>
        {OttFeaturesData.map((e) => {
          return (
            <div className={styles.ottFeaturesCardsDiv}>
              <div className={styles.ottFeaturesImgParaCombo}>
                <img src={e.img} alt="image" />
                <p>{e.title}</p>
              </div>
              <div className={styles.ottFeaturesParaDiv}>{e.para}</div>
            </div>
          );
        })}
      </div>

      <div className={styles.ottFeaturesBanner}>
        <img src="/Images/ott-app/Component184.webp" alt="image" />
        <div className={styles.ottFeturesBannelTextButtonDiv}>
          <h2>
            What's Special About Online Flower Delivery App Solutions Developed
            At Bottom Funnel
          </h2>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}
