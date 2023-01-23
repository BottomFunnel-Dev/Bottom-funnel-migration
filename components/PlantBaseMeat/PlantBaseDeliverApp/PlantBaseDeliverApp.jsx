import React, { useState } from "react";
import styles from "./PlantBaseDeliverApp.module.css";

export default function                                                 PlantBaseDeliverApp({ consumerdata }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.plantBasedDeliver}>
      <h1>{consumerdata.sectionTitle}</h1>
      <div className={styles.plantBasedDeliversub}>
        <div className={styles.plantBasedDeliverright}>
          {consumerdata.consumerdata.map(({ title, icon, para }, idx) => {
            return (
              <div
                key={title}
                onMouseOver={() => setActive(idx)}
                className={`plantBasedDeliverApp-box-${idx}`}
              >
                
                <div className={styles.plantBasedDeliverAppLogo}>
                  <img src={icon.src} alt={icon.alt} />
                </div>
                <h3>{title}</h3>
                <p>{para}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.plantBasedDeliverleft}
          style={{
            background: `url(${consumerdata.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          <div className={styles.plantBasedDeliverAppCustomerImage}>
            <img
              src={consumerdata.consumerdata[active].img.src}
              alt={consumerdata.consumerdata[active].img.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
