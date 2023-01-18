import React from "react";
import { UXReviesBanner } from "./UXReviesBanner/UXReviesBanner";
import { UXReviewEmotions } from "./UXReviewEmotions/UXReviewEmotions";
import { UXReviewMidBanner } from "./UXReviewMidBanner/UXReviewMidBanner";
import styles from "./UXReviewPage.module.css";
import { UXReviewWhyBF } from "./UXReviewWhyBF/UXReviewWhyBF";



export default function UXReviewPage  () {

  return (
    <div className={styles.UXReviewPagecontainer}>
    
      <UXReviesBanner />
      <UXReviewEmotions />
      <UXReviewWhyBF />
      <UXReviewMidBanner />

   
    </div>
  );
};
