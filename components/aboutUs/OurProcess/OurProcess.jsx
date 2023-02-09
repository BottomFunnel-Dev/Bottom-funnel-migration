import React from "react";
import styles from "./OurProcess.module.css";
import { OurProcessPush } from "./OurProcessPush/OurProcessPush";
import Image from "next/image";

export const OurProcess = () => {
  return (
    <div className={styles.aboutusourprocess}>
      <div className={styles.OurProcessaboutUsmain}>
        <div className={styles.OurProcessaboutUscontent}>
          <p> WHO WE ARE </p>
          <h1>
            About <span>Us</span>
          </h1>
            <p>
            Going digital will bring higher revenues and growth. Marketing is
            all about targeting the right people with the right message, Digital
            marketing helps you do that efficiently. We are your partner in
            building your digital brand, communicating and being found,
            nourishing your customers, followers, and fans, and feeding your
            commercial team. Whatever your industry, we have a path, a solution
            for you. If you are already an international company, or if you want
            to expand your business, we work with you. We help you create
            content that resonates with them and draws them into your online
            world where they will engage with your brand on social media
            platforms like Facebook or Twitter.
          </p>
          <button> Read More </button>
        </div>

        <div className={styles.OurProcessaboutUsimage}>
          <Image
            src={"/Images/aboutusImage/meeting.webp"}
            alt={"meetimage"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
     <OurProcessPush />
    </div>
  );
};
