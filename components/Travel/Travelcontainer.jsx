import React from "react";
import styles from "./Travelcontainer.module.css";
import Image from "next/image";

export default function Travelcontainer() {
  return (
    <div className={styles.szTravelcontainer}>
      <div className={styles.sztravelsub}>
        <div className={styles.sztravelleft}>
          <div className={styles.sztravelpara}>
            <h1>Travel App Development Company</h1>
            <p>
              Whether you're looking for a new way to pay for gas or finding the
              fastest route home, Bottom Funnel has you covered. We've created
              an easy-to-use mobile app that works with all major car rental
              agencies so you can access all the features of your rental from
              anywhere.
            </p>
            <button className={styles.travelgetbtn}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            
            
            >Get Started</button>
          </div>
        </div>
        <div className={styles.sztravelright}>
          <div className={styles.travelgirl}>
              <Image
                  src={"/Images/Travel/travelgirl.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
          </div>
        </div>
      </div>
    </div>
  );
}
