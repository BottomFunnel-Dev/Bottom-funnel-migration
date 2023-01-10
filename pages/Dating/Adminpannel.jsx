import React, { useState } from "react";
import styles from "./Adminpannel.module.css";

export default function Adminpannel({ customerData }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.datingAdmin}>
      <h1>Admin Panel</h1>
      <div className={styles.datingAdminsub}>

        <div
          className={styles.datingAdminleft}
          style={{
            background: `url(${customerData.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={styles.datingAdminImage}>
            <img
              src={customerData.customerdata[active].img.src}
              alt={customerData.customerdata[active].img.alt}
            />
          </div>
        </div>
        
        <div className={styles.datingAdminright}>
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
