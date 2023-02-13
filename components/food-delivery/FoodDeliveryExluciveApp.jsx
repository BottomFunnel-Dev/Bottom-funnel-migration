import React, { useState } from "react";
import styles from "./FoodDeliveryExluciveApp.module.css";

export default function FoodDeliveryExluciveApp({ foodDeliverycustomerdata }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.foodDeliveryExclusiveApp}>
      <h1>{foodDeliverycustomerdata.sectionTitle}</h1>
      
      <div className={styles.foodDeliveryExclusiveAppsub}>
        <div className={styles.foodDeliveryExclusiveAppright}>
          {foodDeliverycustomerdata.foodDeliverycustomerdata.map(({ title, icon, para }, idx) => {
            return (
              <div key={title} onMouseOver={() => setActive(idx)} className={`logistic-box-${idx}`} >
                

                <h3> {title} </h3>
                <p> {para} </p>
              </div>
            );
          })}
        </div>

        <div className={styles.foodDeliveryExclusiveAppleft}
          style={{
            background: `url(${foodDeliverycustomerdata.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={styles.logisticCustomerImage}>
            <img
              src={foodDeliverycustomerdata.foodDeliverycustomerdata[active].img.src}
              alt={foodDeliverycustomerdata.foodDeliverycustomerdata[active].img.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
