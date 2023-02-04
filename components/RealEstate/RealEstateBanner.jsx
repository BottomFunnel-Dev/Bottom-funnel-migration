import React from 'react';
import styles from "./RealEstateBanner.module.css";
// import * as reactAnimation from "../../public/Animation/SolutionsAnimation/Agriculture.json";
import Lottie from "react-lottie";

export const RealEstateBanner = () => {
      
  // const lottieDefaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: reactAnimation,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // };

  const txtx = [
    {
      txt: "7K+",
      stxt: "Premimum products",
    },

    {
      txt: "3K+",
      stxt: "Happy Customer",
    },

    {
      txt: "8K+",
      stxt: "Award Winning",
    },
  ]

  return (
    <div className={styles.realestatebannermainbox}>

      <div className={styles.realestatebannersometextandimages}>
        <div className={styles.realestatebannersometext}>
          <h1> Find Your Most Comfortable Place </h1>
          <p>
            find a vanity of properties that suit you very easily forget all dificulties in finding a residence for you
          </p>
          <div className={styles.textboxinsidetextrealestatebox}>{txtx.map((e) => {
            return (
              <div className={styles.txtinsidetxtrealstateindi}>
                <h1>{e.txt}</h1>
                <p>{e.stxt}</p>
              </div>

            )
          })}</div>

          {/* <div className={styles.realEstateBannerAnimationDiv}>
            <Lottie options={lottieDefaultOptions} width={700} height={700} />
          </div> */}
        </div>

      </div>

    </div>
  )
}
