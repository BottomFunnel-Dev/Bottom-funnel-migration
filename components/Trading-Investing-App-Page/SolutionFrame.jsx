import React, { useState } from 'react';
import styles from './solutionFrame.module.css';

export const SolutionFrame = () => {

  const [imageChange, setImageChange] = useState("/Images/Trading-investing-App/Admin-Customer-Screens/Component110.png")
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)

  }

  const SolutionFrameData = [
    {
      icon: "/Images/Trading-investing-App/icons/prototyping.png",
      txt: "Stocks Analysis",
      img: "/Images/Trading-investing-App/Admin-Customer-Screens/Component110-1.png"
    },
    {
      icon: "/Images/Trading-investing-App/icons/prototyping-3.png",
      txt: "Easy Buying Options",
      img: "/Images/Trading-investing-App/Admin-Customer-Screens/Component111.png"
    },
    {
      icon: "/Images/Trading-investing-App/icons/prototyping-1.png",
      txt: "Debts Reports",
      img: "/Images/Trading-investing-App/Admin-Customer-Screens/Component111.png"
    },
    {
      icon: "/Images/Trading-investing-App/icons/prototyping-2.png",
      txt: "Stocks Activity",
      img: "/Images/Trading-investing-App/Admin-Customer-Screens/Component112.png"
    },
  ]


  return (
    <div className={styles.solutionFrameMainContainer}>

      <div className={styles.solutionFrameMainHeading}>
        <h1>SOLUTIONS FOR YOUR TRADING & INVESTMENT APP</h1>
      </div>

      <div className={styles.solutionFrameContentBoxHeading}>
        <h1> Customer's App</h1>
      </div>

      <div className={styles.solutionFrameSubContainer}>

        {/* box/cards part */}

        <div className={styles.solutionFrameLeftContentHolder}>{SolutionFrameData.map((e) => {
          return (
            <div className={styles.solutionFrameLeftDivBoxes}
              key={e.txt} onMouseEnter={() => {
                handleImageChange(e.img)
              }}>

              <div key={e.txt}>
                <div>
                  <img className={styles.solutionFrameIcons} src={e.icon} alt={e.txt} />
                </div>
                <p className={styles.solutionFrameBoxText}>{e.txt}</p>
              </div>
            </div>
          )
        })}
        </div>

        {/* IMAGE PART */}

        <div className={styles.solutionFrameRightContentHolder}>
          <div className={styles.solutionFrameRightImageHolderDiv}>
            <img src={imageChange} alt="images" />
          </div>
        </div>
      </div>
    </div>
  );
};
