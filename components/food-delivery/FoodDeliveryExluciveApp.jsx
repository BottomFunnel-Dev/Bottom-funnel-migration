import React, { useState } from "react";
import styles from "./FoodDeliveryExluciveApp.module.css";

export default function FoodDeliveryExluciveApp({ foodDeliverycustomerdata }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.logiccustomer}>
      <h1>{foodDeliverycustomerdata.sectionTitle}</h1>
      
      <div className={styles.logiccustomersub}>
        <div className={styles.logiccustomerright}>
          {foodDeliverycustomerdata.foodDeliverycustomerdata.map(({ title, icon, para }, idx) => {
            return (
              <div key={title} onMouseOver={() => setActive(idx)} className={`logistic-box-${idx}`} >
                {/* <div className={styles.logisticLogo}>
                  <img src={icon.src} alt={icon.alt} />
                </div> */}

                <h3> {title} </h3>
                <p> {para} </p>
              </div>
            );
          })}
        </div>

        <div className={styles.logiccustomerleft}
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
