import React from "react";
import styles from "./eventsdevservices.module.css";
import Image from "next/image";

export const EventsDevservices = () => {
  return (
    <div className={styles.eventsdevservices}>
      <div className={styles.eventsdevserviceImage}>
        <div className={styles.eventsbackImage}>
              <Image
                  src={"/Images/Eventpage/eventserviceback.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
        </div>
        <div className={styles.eventstopImage}>
          <img src="/Images/Eventpage/eventservicetop.webp" alt="images" />
        </div>
      </div>
      <div className={styles.eventsdevserviceText}>
        <div>
          <h1>Offering services that make events successful</h1>
          <p>
            When it comes to organising an event, you need a lot of things going
            on for it. From printing flyers to social media strategies, every
            step has to be thought through. With the help of an app, you can
            manage the entire event with ease! We offer services that make
            events successful so that everyone involved in them enjoys their
            time there without any hindrances. Contact us now if you're looking
            for a reliable partner who can do wonders with your ideas!
          </p>
        </div>
      </div>
    </div>
  );
};
