import React, { useEffect, useState } from "react";
import styles from "./FoodDeliveryNeedSuccess.module.css";

export const FoodDeliveryNeedSuccess = () => {
  let foodDeliveryNeedData = [
    {
      img: {
        src: "/Images/foodDeliveryphotos/market-analysis-image.png",
        alt: "Market analysis image",
      },
      icon: {
        src: "/Images/foodDeliveryphotos/Marketing-analysis-logo.png",
        alt: "Market analysis logo",
      },
      title: "Market analysis",
    },
    {
      img: {
        src: "/Images/foodDeliveryphotos/Gen-revenue-image.jpg",
        alt: "Generating Revenue image",
      },
      icon: {
        src: "/Images/foodDeliveryphotos/Gen-revenue-logo.png",
        alt: "Generating Revenue logo",
      },
      title: "Generating Revenue",
    },
    {
      img: {
        src: "/Images/foodDeliveryphotos/custom-software-image.png",
        alt: "Customizable software image",
      },
      icon: {
        src: "/Images/foodDeliveryphotos/custom-software-logo.png",
        alt: "Customizable software logo",
      },
      title: "Customizable software",
    },
    {
      img: {
        src: "/Images/foodDeliveryphotos/buisness-plan-image.png",
        alt: "Business plan image",
      },
      icon: {
        src: "/Images/foodDeliveryphotos/buisness-plan-logo.png",
        alt: "Business plan logo",
      },
      title: "Business plan",
    },
    {
      img: {
        src: "/Images/foodDeliveryphotos/marketing-branding-image.png",
        alt: "Marketing & Branding image",
      },
      icon: {
        src: "/Images/foodDeliveryphotos/marketing-branding-logo.png",
        alt: "Marketing & Branding logo",
      },
      title: "Marketing & Branding",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className={styles.foodDeliveryNeedSuccessMain}>
      <h1>All You Need to Know For A Successfull Food Business</h1>
      <div>
        <div className={styles.foodDeliveryNeedSuccessImage}>
          <img
            src={foodDeliveryNeedData[active].img.src}
            alt={foodDeliveryNeedData[active].img.alt}
          />
        </div>
        <div className={styles.foodDeliveryNeedSuccessImage}>
          {foodDeliveryNeedData.map(({ title, icon }, idx) => {
            return (
              <div
                key={title}
                onMouseOver={() => setActive(idx)}
                className={`foodDeliveryNeedSuccessImage-box-${idx}`}
              >
                <div className={styles.foodDeliveryNeedSuccessImageLogo}>
                  <img src={icon.src} alt={icon.alt} />
                </div>
                <h3>{title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
