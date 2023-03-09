import React from "react";
import styles from "./Awards.module.css";
import Image from "next/image";

export default function Awards() {
  return (
    <div className={styles.awardSection}>
      <div>
        <h2>The One Stop Shop For All Your Needs</h2>
        <p>
          Let's put an end to your bottom of the funnel issues. From design to
          development, Bottom Funnel's hand is always there to help you craft a
          successful campaign.
        </p>

        <h4> AWARDS AND ACCOLADES </h4>

        <div id={styles.awards}>
          <div>
            <Image
              src={
                "/Images/AwardsImageMainServicePage/appfutura.webp"
              }
              alt={"images"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div>
            <Image
              src={
                "/Images/AwardsImageMainServicePage/clutch.webp"
              }
              alt={"images"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div>
            <Image
              src={
                "/Images/AwardsImageMainServicePage/goodfirms.webp"
              }
              alt={"images"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div>
            <Image
              src={
                "/Images/AwardsImageMainServicePage/itfirms.webp"
              }
              alt={"images"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div>
            <Image
              src={
                "/Images/AwardsImageMainServicePage/topdev.webp"
              }
              alt={"images"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div>
            <Image
              src={
                "/Images/AwardsImageMainServicePage/upwork.webp"
              }
              alt={"images"}
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
