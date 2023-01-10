import React, { useState } from "react";
import styles from "./WellnessDoctor.module.css";

export default function WellnessDoctor({ customerData }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.wellnessDoctor}>
      <h1>Doctor Panel</h1>
      <div className={styles.wellnessDoctorsub}>
        <div className={styles.wellnessDoctorright}>
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

        <div className={styles.wellnessDoctorleft}>
          <div className={styles.wellnessDoctorCustomerImage}>
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
