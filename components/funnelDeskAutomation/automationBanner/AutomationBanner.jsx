import Image from "next/image";
import React from "react";
import styles from "./AutomationBanner.module.css";

export const AutomationBanner = () => {
  return (
    <div className={styles.AutomationBannerContainer}>
      <div>
        <h1>Customer support, minus the repetitive tasks</h1>
        <p>AI powered automations to streamline your teams' workflows</p>
        <button>Get started for free</button>
      </div>
      <span>
        <Image
          src="/Images/funneldeskAutomation/banner.webp"
          alt="Picture of the author"
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </span>
    </div>
  );
};
