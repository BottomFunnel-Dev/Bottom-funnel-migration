

import React, { useState } from "react";
import styles from "./foodDeliveryAdvanceTech.module.css";

export default function FoodDeliveryAdvanceTech({ fooddeliverydrivedata }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.foodDeliveryAdvanceTech}>
      <h1>{fooddeliverydrivedata.sectionTitle}</h1>
      <div className={styles.foodDeliveryAdvanceTechsub}>
        <div className={styles.foodDeliveryAdvanceTechleft}
          style={{
            background: `url(${fooddeliverydrivedata.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >

          <div className={styles.logisticDriveImage}>
            <img
              src={fooddeliverydrivedata.fooddeliverydrivedata[active].img.src}
              alt={fooddeliverydrivedata.fooddeliverydrivedata[active].img.alt}
            />
          </div>
        </div>

        <div className={styles.foodDeliveryAdvanceTechright}>
          {fooddeliverydrivedata.fooddeliverydrivedata.map(({ title, icon, para }, idx) => {
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
