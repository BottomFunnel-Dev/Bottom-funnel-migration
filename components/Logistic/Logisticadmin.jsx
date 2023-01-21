import React, { useState } from "react";
import styles from "./Logisticadmin.module.css";

export default function Logisticadmin({ adminData }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.logicadmin}>
      <h1>{adminData.sectionTitle}</h1>
      <div className={styles.logicadminsub}>
        <div className={styles.logicadminright}>
          {adminData.admindata.map(({ title, icon, para }, idx) => {
            return (
              <div key={title} onMouseOver={() => setActive(idx)} className={`logistic-box-${idx}`} >
                <div className={styles.logisticLogo}>
                  <img src={icon.src} alt={icon.alt} />
                </div>

                <h3>{title}</h3>
                <p>{para}</p>
              </div>
            );
          })}
        </div>

        <div
          className={styles.logicadminleft}
          style={{
            background: `url(${adminData.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <div className={styles.logisticAdminImage}>
            <img
              src={adminData.admindata[active].img.src}
              alt={adminData.admindata[active].img.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
