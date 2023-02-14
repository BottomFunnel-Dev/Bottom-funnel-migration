import React from "react";
import styles from "./eventsFeatures.module.css";
import Image from "next/image";

export const EventsFeatures = () => {
  const features = [
    {
      featureIcons: "/Images/Eventpage/target.webp",
      featureName: "Event creation",
    },
    {
      featureIcons: "/Images/Eventpage/target-1.webp",
      featureName: "Event search",
    },
    {
      featureIcons: "/Images/Eventpage/target-2.webp",
      featureName: "Event calender",
    },
    {
      featureIcons: "/Images/Eventpage/target-3.webp",
      featureName: "Ticket booking",
    },
    {
      featureIcons: "/Images/Eventpage/target-4.webp",
      featureName: "GPS",
    },
    {
      featureIcons: "/Images/Eventpage/target-5.webp",
      featureName: "Push notification",
    },
    {
      featureIcons: "/Images/Eventpage/target-6.webp",
      featureName: "Chatbot",
    },
    {
      featureIcons: "/Images/Eventpage/target-7.webp",
      featureName: "In-app payment",
    },
    {
      featureIcons: "/Images/Eventpage/target-8.webp",
      featureName: "In-app analysis",
    },
    {
      featureIcons: "/Images/Eventpage/target-9.webp",
      featureName: "Photo sharing",
    },
  ];

  return (
    <div className={styles.eventsFeatures}>
      <div className={styles.eventsHeading}>
        {" "}
        <h1>We incorporate features that elevate experiences</h1>
      </div>
      <div className={styles.eventsHeading}>
        {" "}
        <p>
          Bottom funnel is a new paradigm that allows anyone to create an
          engaging app. With rich features, bottom funnel enables you to elevate
          your experience and make it stand out from the rest. We incorporated
          features that elevate the user's experience while they navigate
          through your app, giving them a feeling of being at home or in their
          favourite café.
        </p>
      </div>

      <div className={styles.eventsfeaturesSection}>
        {features.map((item, index) => (
          <div className={styles.eventfeaturecard} key={index}>
            <div className={styles.eventFeatureIcon}>
                <Image
                  src={item.featureIcons}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
            <h5>{item.featureName}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
