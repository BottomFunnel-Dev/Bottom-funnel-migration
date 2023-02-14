import React from "react";
import styles from "./eventsdevelopment.module.css";
import Image from "next/image";

export const EventsDevelopment = () => {
  return (
    <div className={styles.eventsdevelopment}>
      <div className={styles.eventsdevelopmentText}>
        <div>
          <h1>The event app development company</h1>
          <h5>Company which mobalizes all the elements of the event domain</h5>
          <p>
            Event app development is the graphical representation of all that
            you can experience in one. Through the events, they give a chance to
            connect with your customers and understand them better. So, this is
            why we treat every event app as the extension of the brand image.
            Our team of event mobile app developers understands how important it
            is to offer an enjoyable experience and bring the experience on your
            fingertips. This understanding and presence of skills has helped us
            in becoming one of the leading Event App Development Agencies
            worldwide for which we hold high admiration for our work.
          </p>
        </div>
      </div>
      <div className={styles.eventsdevelopmentImage}>
              <Image
                  src={"/Images/Eventpage/eventservice1.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
      </div>
    </div>
  );
};
