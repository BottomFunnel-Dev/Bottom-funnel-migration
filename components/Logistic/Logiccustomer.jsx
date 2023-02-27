import Image from "next/image";
import React, { useState } from "react";
import styles from "./Logiccustomer.module.css";

export default function Logiccustomer({ customerData }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.logiccustomer}>
      <h1>{customerData.sectionTitle}</h1>

      <div className={styles.logiccustomersub}>
        <div className={styles.logiccustomerright}>
          {customerData.customerdata.map(({ title, icon, para }, idx) => {
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

        <div className={styles.logiccustomerleft}>
          <div className={styles.logisticCustomerImage}>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src={customerData.customerdata[active].img.src}
              alt={customerData.customerdata[active].img.alt}
            />
          </div>
          <div className={styles.logisticCustomerImageBackground}></div>
        </div>
      </div>
    </div>
  );
}
