import Image from "next/image";
import React, { useState } from "react";
import styles from "./FlowerDeliveryAdmin.module.css";

const FlowerDeliveryAdmin = () => {
  const [imageChange, setImageChange] = useState(
    "/Images/Flowerdeliverypage/Business control.webp"
  );

  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const flowerdeliveryadmindata = [
    {
      img: "/Images/Flowerdeliverypage/Business control.webp",
      htxt: "Business Control",
      stxt: "A fabulous feature you can add to your app is the offer & deals. To affect customer satisfaction levels and expand the current customer base, provide discounts and deals daily.",
      icon: "/Images/Flowerdeliverypage/icons/business control.webp"
    },

    {
      img: "/Images/Flowerdeliverypage/Manage customers.webp",
      htxt: "Manage customers",
      stxt: "One of the basic features that will benefit you and your potential customers is the delivery schedule. Same-day delivery and other various time delivery will make you stand out in the market.",
      icon: "/Images/Flowerdeliverypage/icons/manage customers.webp"
    },

    {
      img: "/Images/Flowerdeliverypage/Manage Payment.webp",
      htxt: "Manage Payment",
      stxt: "Real-time tracking is one of the app features customers love when ordering any package. So, in addition to delivery tracking, make sure to allow the users to see each delivery stage.",
      icon: "/Images/Flowerdeliverypage/icons/manage payments.webp"
    },

    {
      img: "/Images/Flowerdeliverypage/Reports & analytics.webp",
      htxt: "Reports & analytics",
      stxt: "One of the must-have features is a customized note when offering flower delivery services. The customer can write a customized note while placing an order to be printed with the bouquet.",
      icon: "/Images/Flowerdeliverypage/icons/reports & analytics.webp"
    },
  ];

  return (
    <div className={styles.flowerdeliveryadminmainbox}>
      <div className={styles.flowerdeliveryadminflexleftbox}>
        <h2> Admin Pannel </h2>
        <div className={styles.flowerdeliveryadminmapping}>
          {flowerdeliveryadmindata.map((e) => {
            return (
              <div
                className={styles.flowerdeliveryadmingboxmapping}
                key={e.htxt}
                onMouseEnter={() => {
                  handleImageChange(e.img);
                }}
              >
                <div
                  className={styles.flowerdeliveryadmingboxmappingicon}
                >
                  <Image
                    src={e.icon}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <h4> {e.htxt} </h4>
                <p> {e.stxt} </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.flowerdeliveryadminflexrightbox}>
        <div className={styles.flowerdeliveryadminrightboxforimageone}>
          <Image
            src={"/Images/Flowerdeliverypage/Rectangle4190.webp"}
            alt={"image1"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className={styles.flowerdeliveryadminrightboxforimagetwo}>
          <Image
            src={imageChange}
            alt={"image2"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default FlowerDeliveryAdmin;
