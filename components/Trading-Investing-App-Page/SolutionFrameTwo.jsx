import React, { useState } from 'react';
import styles from './solutionFrameTwo.module.css';

export const SolutionFrameTwo = () => {

  const [imageChange, setImageChange] = useState("/Images/Trading-investing-App/Admin-Customer-Screens/Dashboard-Admin-Panel-PSD-Template-1.png")
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
  }

  const SolutionFrameTwoData = [
    {
      icon: "/Images/Trading-investing-App/icons/dashboard-3.png",
      txt: "Dashboard Analysis",
      img: "/Images/Trading-investing-App/Admin-Customer-Screens/Dashboard-Admin-Panel-PSD-Template-1.png"
    },
    {
      icon: "/Images/Trading-investing-App/icons/feed-back.png",
      txt: "Market Reports",
      img: "/Images/Trading-investing-App/Admin-Customer-Screens/Dashboard-Admin-Panel-PSD-Template-2.png"
    }
  ]

  return (
    <div className={styles.solutionFrameTwoMainContainer}>
      <div className={styles.solutionFrameTwoSubContainer}>
        <h1> Admin's Pannel </h1>
      </div>

      <div className={styles.solutionFrameTwoSubContainer}>
        {/* IMAGE PART */}
        <div className={styles.solutionFrameTwoRightContentHolder}>
          <div className={styles.solutionFrameTwoRightImageHolderDiv}>
            <img src={imageChange} alt="images" />
          </div>
        </div>

        {/* box/cards part */}

        <div className={styles.solutionFrameTwoLeftContentHolder}>{SolutionFrameTwoData.map((e) => {
          return (
            <div className={styles.solutionFrameTwoLeftDivBoxes}
              key={e.txt} onMouseEnter={() => {
                handleImageChange(e.img)
              }}>

              <div key={e.txt}>
                <div>
                  <img className={styles.solutionFrameTwoIcons} src={e.icon} alt={e.txt} />
                </div>
                <p className={styles.solutionFrameBoxText}>{e.txt}</p>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  );
};
