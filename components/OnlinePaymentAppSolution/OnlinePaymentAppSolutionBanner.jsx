import React from "react";
import styles from "./OnlinePaymentAppSolutionBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/oNLINE PAYMENTY.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const OnlinePaymentAppSolutionBanner = () => {
  return (
    <div className={styles.onlinepaymentappsolutionbannermainboxes}>
      <div className={styles.onlonepaymentappbannerimageinsidetext}>
        <h1> Online Payment App Solution </h1>
        <p>
          Create custom mobile payment solutions for P2P payments using debit
          cards, credit cards, mobile wallets, bank accounts, and more for
          Android, iOS, and Windows Mobile platforms. Our developers integrate
          near field communication (NFC), quick response (QR), barcode
          configurations, magnetic secure transmission (MST) technology, and
          more. We provide initiator, target, reader/writer, P2P communications,
          and card emulation software development for mobile devices, payment
          terminals, and other NFC platforms.
        </p>

        <button className={styles.onlinepaymentsolutionbutton}>
          {" "}
          Get Started{" "}
        </button>
      </div>

      <div className={styles.onlinePaymentSolutionBannerAnimationDiv}>
        <Player
          className={styles.onlinePaymentSolutionBannerAnimation}
          src={reactAnimation}
          background="transparent"
          speed="1"
          loop
          controls
          autoplay
        ></Player>
      </div>
    </div>
  );
};
