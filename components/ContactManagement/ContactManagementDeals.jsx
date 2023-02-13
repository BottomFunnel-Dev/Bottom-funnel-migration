import React from "react";
import { useState } from "react";
import styles from "./ContactManagementDeals.module.css";

export const ContactManagementDeals = () => {
  const [imageChange, setImageChange] = useState(
    "Images/contactmanagement/surface leads.png",
  );

  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const contactmanagementdeals = [
    {
      txt: "Surface your hottest leads",
      img: "Images/contactmanagement/surface leads.png",
    },

    {
      txt: "Accelerate sales prospecting",
      img: "Images/contactmanagement/accelerate sales.png",
    },

    {
      txt: "Manage sales teams across geographics",
      img: "Images/contactmanagement/manage sales.png",
    },

    {
      txt: "Be more productive",
      img: "Images/contactmanagement/be productive.png",
    },
  ];

  return (
    <div className={styles.contactmanagementdealsmainbox}>
      <h1>Improve sales productivity and win deals faster.</h1>
      <div className={styles.contactmanagementdealsflexbox}>
        {contactmanagementdeals.map((e) => {
          return (
            <div
              className={styles.contactmanagementmappingdataindivisual}
              key={e.txt}
              onClick={() => {
                handleImageChange(e.img);
              }}
            >
              <h4>{e.txt}</h4>
            </div>
          );
        })}
      </div>

      <div className={styles.contactmanagementimagechangerandflexbox}>
        <div className={styles.contactmanagementimageandflexleftbox}>
          <h2>
            Intelligent rank your prospects based on their profile and
            engagement level using contact scoring.
          </h2>
        </div>

        <div className={styles.contactmanagementimageandflexrightbox}>
          <img src={imageChange} alt="" />
        </div>
      </div>
    </div>
  );
};
