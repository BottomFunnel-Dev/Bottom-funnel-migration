import React from 'react';
import styles from "./OnlinePaymentAppSolutionBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/oNLINE PAYMENTY.json";
import Lottie from "react-lottie";

export const OnlinePaymentAppSolutionBanner = () => {
  
  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={styles.onlinepaymentappsolutionbannermainboxes}>
      <div className={styles.onlonepaymentappbannerimageinsidetext}>
        <h1> Online Payment App Solution </h1>
        <p>
          Create custom mobile payment solutions for P2P payments using debit cards, credit cards, mobile wallets, bank accounts,
          and more for Android, iOS, and Windows Mobile platforms. Our developers integrate near field communication (NFC), quick
          response (QR), barcode configurations, magnetic secure transmission (MST) technology, and more. We provide initiator,
          target, reader/writer, P2P communications, and card emulation software development for mobile devices, payment terminals,
          and other NFC platforms.
        </p>

        <button className={styles.onlinepaymentsolutionbutton}> Get Started </button>
      </div>

      <div className={styles.onlinePaymentSolutionBannerAnimationDiv}>
        <Lottie className={styles.onlinePaymentSolutionBannerAnimation} options={lottieDefaultOptions} width={600} height={600} />
      </div>
    </div>
  )
}
