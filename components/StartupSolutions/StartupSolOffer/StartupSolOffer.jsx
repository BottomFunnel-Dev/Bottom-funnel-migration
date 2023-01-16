import React from "react";
import styles from "./StartupSolOffer.module.css";

export const StartupSolOffer = () => {
  return (
    <div className={styles.StartupSolOfferContainer}>
      <div className={styles.StartupSolOfferMain}>
        <h1>Startup Solutions We Offers</h1>
        <div className={styles.StartupSolPartnerHrLine}>
          <span></span>
          <div></div>
          <span></span>
        </div>
        <p>
          Bottom Funnel is your new partner in business. We understand how hard
          it can be to build a business, and we are here to help you every step
          of the way! From providing expert consulting services to helping you
          develop a solid understanding of all the different aspects involved in
          running a successful business, Bottom Funnel has everything you need
          to get started on the right foot. Our team of experienced
          professionals will work with you one-on-one to ensure that you have
          everything you need to successfully launch your new venture. We'll
          help you navigate through all the different aspects of running a
          successful company, from marketing strategies to accounting software -
          and everything in between! When you work with Bottom Funnel, there's
          no limit on what we can do for your business. No matter how big or
          small your needs may be, we're here 100% focused on helping our
          clients succeed so that they can focus on what they do best: building
          an thriving company full of passionate employees and loyal customers!
        </p>
      </div>
      <div className={styles.StartupSolofferImages}>
        <img
          src="Images/startupSolPhotos/solBF.png"
          alt="Startup Solutions with bottom funnel"
        />
      </div>
    </div>
  );
};
