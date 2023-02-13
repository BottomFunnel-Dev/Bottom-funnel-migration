import React, { useState } from "react";
import styles from "./adminPannelComp.module.css";

export default function AdminPannelComp() {
  const [imageChange, setImageChange] = useState(
    "/Images/Car-Rental-Page-Images/Component189.png",
  );
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const RGadminPannelData = [
    {
      img: "Images/Car-Rental-Page-Images/login.png",
      head: "Login",
      para: "We are excited to announce that we have made it easier to access the admin panel of our app. You can now login with your email address and password, or with your Facebook or Google account. This makes logging in easier, faster, and more secure!",
    },

    {
      img: "Images/Car-Rental-Page-Images/owner-management.png",
      head: "Owner Management",
      para: "With Owner Management, you can have control over who can access your admin panel. Create a group of users and give them access to the admin panel. With this feature, you can also block any user from accessing your admin panel.",
    },

    {
      img: "Images/Car-Rental-Page-Images/dashboard(2).png",
      head: "Dashboard",
      para: "It is a dashboard which will help you to manage your apps and their details. You can easily see the number of active users and their activity on your app. You can also see the number of downloads, ratings and comments for each of your apps.",
    },

    {
      img: "Images/Car-Rental-Page-Images/rental-management.png",
      head: "Retail Management",
      para: "We can make your admin panel look more professional and user-friendly. We can help you create a better user experience. You will be able to manage your store with ease, as well as track everything in real time.",
    },
  ];

  return (
    <div className={styles.RGadminPannelContainer}>
      <div className={styles.RGadminPannelLeftDiv}>
        {RGadminPannelData.map((e) => {
          return (
            <div
              className={styles.RGadminPannelLeftDivBoxex}
              key={e.head}
              onMouseEnter={() => {
                handleImageChange(e.img);
              }}
            >
              <div>
                <h4> {e.head} </h4>
                <p> {e.para} </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.RGadminPannelTextDiv}>
        <h1>
          <span className={styles.RGadminPannelSpan}> Admin </span> Pannel
        </h1>
      </div>

      <div className={styles.RGadminPannelMobileRightDiv}>
        <div className={styles.RGadminPannelMobileRightDivFrameForImages}>
          <img src={imageChange} alt="images" />
        </div>
      </div>
    </div>
  );
}
