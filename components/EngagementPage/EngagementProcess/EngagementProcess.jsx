import React from "react";
import styles from "./EngagementProcess.module.css";
import Image from "next/image";

export const EngagementProcess = () => {
  return (
    <div className={styles.engagementProcessContainer}>
      <div>
        <h1>
          Bottom Funnel <span>Engagement Models</span>
        </h1>
        <p>
          The bottom funnel engagement model shows the most important metrics to measure and track for success on a project—engagement with your customer, by means of the bottom funnel.Bottom funnels are the best way to land your leads and most importantly, convert them into new customers. The art of engaging with customers at their core—both in their mind and in reality—is what makes you stand out from other companies. So if you have a bottom funnel, it’s time to start thinking about how to get visitors to keep coming back.
        </p>
        <hr />
        <div className={styles.engagementProcessMain}>
          <p>
            What makes our business process model unbeatbale is its flexibility.
            Clients' requirements constantly change (either by choice or
            chance), and we adjust to these changees anytime before delivery.
            Our engagement models are beneficial to clients because they propose
            competitive prices, dedicated resources, no hidden costs, and zero
            overheads. We want to work with you to the best of our abilities.
          </p>

          <div>
            {/* <img src="/Images/engagementPhotos/meeting.png" alt="image" /> */}
            <Image
            src={"/Images/engagementPhotos/meeting.webp"}
            alt={"meet image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <h1>
          Some of the <span>benefits</span> of choosing our engagement models
        </h1>
        <hr />

        <div className={styles.engagementProcessMain}>
          <div>
            {/* <img src="/Images/engagementPhotos/discuss.png" alt="image" /> */}
            <Image
            src={"/Images/engagementPhotos/discuss.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            />
          </div>

          <ul>
            <li>No complexities</li>
            <li>Transparent quotes</li>
            <li>Secured development</li>
            <li>Secured development environment</li>
            <li>No compromise with quality</li>
            <li>Calculated costs and budgeted rates</li>
            <li>Close-knit support</li>
            <li>100% Privacy maintain</li>
            <li>Standardized approach</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
