import React from 'react';
import styles from './servicesOffer.module.css';

export const ServicesOffer = () => {
  return (
    <div className={styles.rGServicesOfferContainer}>

      <h1 className={styles.rGServiceOfferHeading}>
        <span className={styles.rGServiceOfferSpan}>SERVICES </span>THAT WE OFFER FOR YOUR TRADING & INVESTING APP
        </h1>

      <div className={styles.rGServiceOfferThreeBoxesMain}>

        <div className={styles.rGserviceOfferBox12Combo}>

          <div className={styles.rGserviceOfferBox1}>

            <img width="100%" src="/Images/Trading-investing-App/banners-backgrounds/Rectangle-4804.png" alt="images" />
            <div className={styles.rGServiceOfferBox1Img2}>
              <img width="85%" src="/Images/Trading-investing-App/banners-backgrounds/Frame.png" alt="images" />
            </div>

            <h2 className={styles.rGServiceOfferBox1Head}>Seamless Account Opening</h2>
            <p className={styles.rGServiceOfferBox1Para}>Requires PAN + Aadhaar + KEYC Only</p>
          </div>

          <div className={styles.rGServiceOfferBox2}>
            <img width="100%" src="/Images/Trading-investing-App/banners-backgrounds/Rectangle-4805.png" alt="images" />
            <div className={styles.rGServiceOfferBox2Img2}>
              <img width="100%" src="/Images/Trading-investing-App/banners-backgrounds/Frame-2.png" alt="images" />
            </div>

            <h2 className={styles.rGServiceOfferBox2Head}>Instant Withdrawl</h2>
            <p className={styles.rGServiceOfferBox2Para}>Transfer Funds from upstox To Your Bank Account In Just 15 Minutes</p>
          </div>

        </div>

        <div className={styles.rGServiceOfferBox3}>

          <img width="100%" src="/Images/Trading-investing-App/banners-backgrounds/Rectangle-4806.png" alt="image" />
          <div className={styles.rGServiceOfferBox3Img2}>
            <img width="100%" src="/Images/Trading-investing-App/banners-backgrounds/Frame-1.png" alt="image" />
          </div>
          <h2 className={styles.rGServiceOfferBox3Head}>Learn. Decide. Invest.</h2>
          <p className={styles.rGServiceOfferBox3Para}>Learn All About Investments From Experts. Make Informed Decisions Using Smart Tools. Invest Easily With Just A Click.</p>

        </div>
      </div>

      <div className={styles.rGServiceOfferButtonDiv}>
        <button className={styles.rGServiceOfferButton}>
          Get Started
        </button>

      </div>
    </div>
  )
}