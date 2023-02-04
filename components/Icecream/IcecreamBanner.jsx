import React from 'react'
import styles from "./IcecreamBanner.module.css"
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/tool deliver.json";
import Lottie from "react-lottie";

export const IcecreamBanner = () => {

  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={styles.icecreambannermainboxes}>
      <div className={styles.icreambannersometextbox}>
        <h1> Launch an On-Demand </h1>
        <h2>
          <span className={styles.specialcolor}>Ice-cream</span> Delivery App
        </h2>
        <p>
          Looking to build an online presence for your ice cream delivery service? Create and customize your very own branded app in
          seconds with Jotform’s ready-made Ice Cream Delivery App. You can include an online menu with photos and descriptions,
          create a catering form, link to your social media accounts, and list your contact information. Share your app by sending
          email invitations, generating a unique QR code, or by seamlessly embedding it in your website.
        </p>
        <button className={styles.icecreambannerbutton}>Get Started</button>
      </div>

      <div className={styles.iceCreamBannerAnimationDiv}>
        <Lottie options={lottieDefaultOptions} width={700} height={600} />
      </div>

    </div>
  )
}
