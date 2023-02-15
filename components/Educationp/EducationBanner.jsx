import Image from 'next/image';
import React from 'react'
import styles from "./EducationBanner.module.css";

export default function EducationBanner () {
  return (
    <div className={styles.EducationBannerMain}>
        <div className={styles.EducationBannerText}>
            <p>Bridge the gap between</p>
            <h1>Tutors & Students with the Best  <br/>Education App</h1>
            <p>Get branded App & Website for your business</p>
            <button>Start 15 Days Risk-Free Trail</button>
        </div>
        <div className={styles.EducationBannerimg}>
            <Image 
            src={"/Images/Educationp/Group 1000002699.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            />
        </div>
    </div>
  )
}
