import React, { useState } from 'react';
import styles from "./FlowerDeliveryAdmin.module.css";

const FlowerDeliveryAdmin = () => {

  const [imageChange, setImageChange] = useState("/Images/Flowerdeliverypage/Businesscontrol.png")

  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
  }

  const flowerdeliveryadmindata = [
    {
      img: "/Images/Flowerdeliverypage/Businesscontrol.png",
      htxt: "Business Control",
      stxt: "A fabulous feature you can add to your app is the offer & deals. To affect customer satisfaction levels and expand the current customer base, provide discounts and deals daily."
    },

    {
      img: "/Images/Flowerdeliverypage/Manage customers.png",
      htxt: "Manage customers",
      stxt: "One of the basic features that will benefit you and your potential customers is the delivery schedule. Same-day delivery and other various time delivery will make you stand out in the market."
    },

    {
      img: "/Images/Flowerdeliverypage/Manage Payment.png",
      htxt: "Manage Payment",
      stxt: "Real-time tracking is one of the app features customers love when ordering any package. So, in addition to delivery tracking, make sure to allow the users to see each delivery stage."
    },


    {
      img: "/Images/Flowerdeliverypage/Reports & analytics.png",
      htxt: "Reports & analytics",
      stxt: "One of the must-have features is a customized note when offering flower delivery services. The customer can write a customized note while placing an order to be printed with the bouquet."
    },
  ]

  return (
    <div className={styles.flowerdeliveryadminmainbox}>
      <div className={styles.flowerdeliveryadminflexleftbox}>
        <h2>Admin Pannel</h2>
        {flowerdeliveryadmindata.map((e) => {
          return (
            <div className={styles.flowerdeliveryadmingboxmapping}
              key={e.htxt} onMouseEnter={() => {
                handleImageChange(e.img)
              }}
            >
              <h4>{e.htxt}</h4>
              <p>{e.stxt}</p>
            </div>
          )
        })}
      </div>

      <div className={styles.flowerdeliveryadminflexrightbox}>
        <div className={styles.flowerdeliveryadminrightboxforimageone}>
          <img src='/Images/Flowerdeliverypage/Rectangle4190.png' alt='image1' />
        </div>
        <div className={styles.flowerdeliveryadminrightboxforimagetwo}>
          <img src={imageChange} alt='image2' />
        </div>
      </div>
    </div>
  );
};

export default FlowerDeliveryAdmin;
