import React, { useState } from "react";
import styles from "./WellnessAdmin.module.css";

export default function WellnessAdmin({ customerData }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.wellnessAdmin}>
      <h1>Admin Panel</h1>
      <div className={styles.wellnessAdminsub}>

        <div className={styles.wellnessAdminleft}>
          <div className={styles.wellnessAdminCustomerImage}>
            <img
              src={customerData.customerdata[active].img.src}
              alt={customerData.customerdata[active].img.alt}
            />
          </div>
        </div>

        <div className={styles.wellnessAdminright}>
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


      </div>
    </div>
  );
}
