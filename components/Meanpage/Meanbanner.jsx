import React from 'react';
import styles from './Meanbanner.module.css';
import * as reactAnimation from "../../../public/Animation/android.json";
import Lottie from "react-lottie";


export const Meanbanner = () => {
   
  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (

    <div>
     <div className={styles.androidIcon}>
        <Lottie options={lottieDefaultOptions} width={400} height={500} />
        </div>
    </div>
  );
};
