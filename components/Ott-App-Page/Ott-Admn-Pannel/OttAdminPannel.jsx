import React, { useState } from 'react';
import styles from './ottAdminPannel.module.css';

export const OttAdminPannel = () => {
  const [imageChange, setImageChange] = useState("Images/ott-app/MacBookPro1.png")
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
  }

  const OttAdminPannelData = [
    {
      img: "/Images/ott-app/Group901188.png",
      head: "Dashboard",
      para: "To check without the listing",
    },

    {
      img: "/Images/ott-app/Group901187.png",
      head: "Analytics",
      para: "Check system with the same",
    },

    {
      img: "/Images/ott-app/Group901188.png",
      head: "Categories",
      para: "Separate categories for shows",
    },
  ]

  return (
    <div className={styles.ottAdminPannelContainer}>
      <div className={styles.ottAdminPannelLeftDiv}>
        <div className={styles.ottAdminPannelLeftDivHeading}>
          <h1>Admin Pannel</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum autem
            in veniam nemo, minima quisquam ipsa esse nesciunt, nulla vero
            inventore quas hic modi ratione assumenda adipisci soluta eaque
            veritatis.
          </p>
        </div>

        {OttAdminPannelData.map((e) => {
          return (
            <div
              className={styles.ottAdminPannelLeftDivForCards}
              key={e.head}
              onMouseEnter={() => {
                handleImageChange(e.img);
              }}
            >
              <h3>{e.head}</h3>
              <p>{e.para}</p>
            </div>
          );
        })}
      </div>

      <div className={styles.ottAdminPannelRightDiv}>
        <div className={styles.ottAdminPannelRightDivFrameForImages}>
          <img src={imageChange} alt="image" />
        </div>
      </div>
    </div>
  );
};
