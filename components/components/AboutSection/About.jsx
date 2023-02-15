import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.newAbout}>
      <div className={styles.aboutContent}>
        <h1>The Dream Team For Your Digital Needs</h1>
        <p>
          Bottom Funnel is a team of passionate people, driven by one relentless
          pursuit- to craft innovative solutions and deliver unparalleled
          results.
        </p>
      </div>

      <div id={styles.aboutStats1} className={styles.aboutStats}>
        <div>
          <Image
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            src="https://d1krs40fxb67ye.cloudfront.net/Images/about/aboutbtn.webp"
            alt="Images/about/aboutbtn.webp"
          />
        </div>
        <h1>1000+</h1>
        <p>creative nerds under one roof</p>
      </div>
      <div id={styles.aboutStats2} className={styles.aboutStats}>
        <div>
          <Image
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            src="https://d1krs40fxb67ye.cloudfront.net/Images/about/aboutbtn.webp"
            alt="Images/about/aboutbtn.webp"
          />
        </div>

        <h1>1000+</h1>
        <p>Products (Apps) Delivered</p>
      </div>
      <div id={styles.aboutStats3} className={styles.aboutStats}>
        <div>
          <Image
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            src="https://d1krs40fxb67ye.cloudfront.net/Images/about/aboutbtn.webp"
            alt="Images/about/aboutbtn.webp"
          />
        </div>

        <h1>$700m</h1>
        <p>Investment Raised for startups</p>
      </div>
    </div>
  );
}
