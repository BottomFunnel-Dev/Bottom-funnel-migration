import React, { useState } from "react";
import styles from "./ottAdminPannel.module.css";

export default function OttAdminPannel() {
  const [imageChange, setImageChange] = useState(
    "Images/ott-app/ha/Group 1000002417.webp",
  );
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const OttAdminPannelData = [
    {
      img: "/Images/ott-app/ha/Group 1000002417.webp",
      head: "Dashboard",
      para: "To check without the listing",
    },

    {
      img: "/Images/ott-app/ha/Group 1261152765.webp",
      head: "Analytics",
      para: "Check system with the same",
    },

    {
      img: "/Images/ott-app/ha/Group 1261152766.webp",
      head: "Categories",
      para: "Separate categories for shows",
    },

    {
      img: "/Images/ott-app/ha/Group 1261152782.webp",
      head: "Payments",
      para: "Separate Payments for shows",
    },
  ];

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
              <h5>{e.head}</h5>
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
}
