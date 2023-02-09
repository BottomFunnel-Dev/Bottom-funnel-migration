import Image from "next/image";
import React, { useState } from "react";
import styles from "./Logicdrive.module.css";

export default function Logicdrive({ driveData }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.logicdrive}>
      <h1>{driveData.sectionTitle}</h1>
      <div className={styles.logicdrivesub}>
        <div
          className={styles.logicdriveleft}
          style={{
            background: `url(${driveData.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          {/* <div className={styles.logisticDriveImage}>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src={driveData.driverdata[active].img.src}
              alt={driveData.driverdata[active].img.alt}
            />
          </div> */}
        </div>
        <div className={styles.logicdriveright}>
          {driveData.driverdata.map(({ title, icon, para }, idx) => {
            return (
              <div
                key={title}
                onMouseOver={() => setActive(idx)}
                className={`logistic-box-${idx}`}
              >
                <div className={styles.logisticLogo}>
                  <Image
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "fit-content", height: "50px" }}
                    src={icon.src}
                    alt={icon.alt}
                  />
                </div>

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
