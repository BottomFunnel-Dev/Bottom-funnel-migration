import React, { useState } from "react";
import styles from "./WellnessPatient.module.css";

export default function WellnessPatient({ customerData }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.wellnessPatient}>
      <h1>Patient App</h1>
      <div className={styles.wellnessPatientsub}>
        <div className={styles.wellnessPatientright}>
          {customerData.customerdata.map(({ title, para }, idx) => {
            return (
              <div
                key={title}
                onMouseOver={() => setActive(idx)}
                className={`logistic-box-${idx}`}
              >
                <h3>{title}</h3>
                <p>{para}</p>
              </div>
            );
          })}
        </div>

        <div
          className={styles.wellnessPatientleft}
          style={{
            background: `url(${customerData.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={styles.wellnessCustomerImage}>
            <img
              src={customerData.customerdata[active].img.src}
              alt={customerData.customerdata[active].img.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
