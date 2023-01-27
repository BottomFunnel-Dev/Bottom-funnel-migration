import React from "react";
import styles from "./eventsFeatures.module.css";
export const EventsFeatures = () => {
  const features = [
    {
      featureIcons: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Eventpage/target.png",
      featureName: "Event creation",
    },
    {
      featureIcons: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Eventpage/target-1.png",
      featureName: "Event search",
    },
    {
      featureIcons: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Eventpage/target-2.png",
      featureName: "Event calender",
    },
    {
      featureIcons: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Eventpage/target-3.png",
      featureName: "Ticket booking",
    },
    {
      featureIcons: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Eventpage/target-4.png",
      featureName: "GPS",
    },
    {
      featureIcons: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Eventpage/target-5.png",
      featureName: "Push notification",
    },
    {
      featureIcons: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Eventpage/target-6.png",
      featureName: "Chatbot",
    },
    {
      featureIcons: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Eventpage/target-7.png",
      featureName: "In-app payment",
    },
    {
      featureIcons: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Eventpage/target-8.png",
      featureName: "In-app analysis",
    },
    {
      featureIcons: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Eventpage/target-9.png",
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
              <img src={item.featureIcons} alt="images" />
            </div>
            <h5>{item.featureName}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
