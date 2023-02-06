// let customerAppData = [
//   {
//     title: "Can be easily accessed through both android/iOS",
//     description:
//       "It is a cross platform application which gives ease to customer of accessing it through both android and iOS",
//   },
//   {
//     title: "User-friendly interface",
//     description:
//       "It has easy to understand templates and customisable app designs to give the customer comfort of use.",
//   },
//   {
//     title: "Order food and ltrack their service",
//     description:
//       "Customers can easily order their favourite food and track when the food will get prepared and delivered.",
//   },
//   {
//     title: "Smart search and add-to-your-favorites list",
//     description:
//       "The app will give suggestionsbased on what customers search. The customers can also add their favourite dishes in a list to avoid repetitive searches",
//   },
// ];

// export const FoodDeliveryAdvanceTech = (foodDeliveryDrivedata) => {

import React, { useState } from "react";
import styles from "./foodDeliveryAdvanceTech.module.css";
export const FoodDeliveryAdvanceTech = ({ foodDeliverydriveData }) => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.logicdrive}>
      <h1>{foodDeliverydriveData.sectionTitle}</h1>
      <div className={styles.logicdrivesub}>
        <div className={styles.logicdriveleft}
          style={{
            background: `url(${foodDeliverydriveData.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >

          <div className={styles.logisticDriveImage}>
          <img
              src={foodDeliverydriveData.foodDeliveryDrivedata[active].img.src}
              alt={foodDeliverydriveData.foodDeliveryDrivedata[active].img.alt}
            />
          </div>
        </div>

        <div className={styles.logicdriveright}>
          {foodDeliverydriveData.foodDeliverydriveData.map(({ title, icon, para }, idx) => {
            return (
              <div key={title} onMouseOver={() => setActive(idx)} v className={`logistic-box-${idx}`}>
                {/* <div className={styles.logisticLogo}>
                  <img src={icon.src} alt={icon.alt} />
                </div> */}

                <h3> {title} </h3>
                <p> {para} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
