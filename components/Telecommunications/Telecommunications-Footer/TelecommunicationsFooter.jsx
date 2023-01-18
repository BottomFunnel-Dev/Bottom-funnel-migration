import React, { useState } from 'react';
import styles from './telecommunicationsFooter.module.css';

export const TelecommunicationsFooter = () => {
  const [imageChange, setImageChange] = useState(
    "/Images/Telecommunication/Admin-Panel/Dashboard-Management.png"
  );
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const TelecommunicationsFooterData = [
    {
      img: "/Images/Telecommunication/Admin-Panel/Dashboard-Management.png",
      title: "Dashboard Management",
      para: "We provide best in class solutions to help you grow your business online. From analytics to marketing, we have it all covered with our team of experts. We can create a e-commerce appthat will boost your sales and profits.",
    },

    {
      img: "/Images/Telecommunication/Admin-Panel/Manage-Users.png",
      title: "Manage Users",
      para: "Using our user-friendly interface , You will be able to analyze everthing about your app right on your fingertips. Data will be updated automatically every day with real time information about user engagement, transactions ect.",
    },

    {
      img: "/Images/Telecommunication/Admin-Panel/Manage-Categories.png",
      title: "Manage Categories",
      para: "When you're managing a large catalog of products, efficiency is key from settings up products categories to installing integration, we'll do everything we can to ensure your website runs smoothly and efficiently",
    },
  ];

  return (
    <div className={styles.telecommunicationsFooterContainerMain}>

      <div className={styles.telecommunicationsFooterBoxMainDivRight}>

        <div className={styles.telecommunicationsFooterTitle}>
          <h1>Admin Panel</h1>
        </div>
        <div className={styles.telecommunicationsFooterBoxContentDivRight}>
          {TelecommunicationsFooterData.map((e) => {
            return (
              <div
                className={styles.telecommunicationsFooterCardsDivRight}
                key={e.htxt}
                onMouseEnter={() => {
                  handleImageChange(e.img);
                }}
              >

                <div className={styles.telecommunicationsFooterTextDivRight}>
                  <h3>{e.title}</h3>
                  <p>{e.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.telecommunicationsFooterImgMainDivLeft}>

        <div className={styles.telecommunicationsFooterImgFrameLeft}>
          <img src={imageChange} alt="image" />
        </div>
      </div>
    </div>
  );
};
