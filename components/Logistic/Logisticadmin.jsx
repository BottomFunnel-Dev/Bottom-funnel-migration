import React, { useState } from "react";
import styles from "./Logisticadmin.module.css";
import Image from "next/image";

export default function Logisticadmin({ adminData }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.logicadmin}>
      <h1>{adminData.sectionTitle}</h1>
      <div className={styles.logicadminsub}>
        <div className={styles.logicadminright}>
          {adminData.admindata.map(({ title, icon, para }, idx) => {
            return (
              <div
                key={title}
                onMouseOver={() => setActive(idx)}
                className={`logistic-box-${idx}`}
              >
                <div className={styles.logisticLogo}>
                  <span>
                    <Image
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                      src={icon.src}
                      alt={icon.alt}
                    />
                  </span>
                  <h3>{title}</h3>
                </div>

                <p>{para}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.logicadminleft}>
          <div className={styles.logisticAdminImage}>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src={adminData.admindata[active].img.src}
              alt={adminData.admindata[active].img.alt}
            />
          </div>
          <div className={styles.logisticAdminImagesBackground}></div>
        </div>
      </div>
    </div>
  );
}
