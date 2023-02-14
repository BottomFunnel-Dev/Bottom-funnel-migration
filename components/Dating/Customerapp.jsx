import React, { useState } from "react";
import styles from "./Customerapp.module.css";
import Image from "next/image";

export default function Customerapp({ customerData }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.datingcustomer}>
      <h1>{customerData.sectionTitle}</h1>
      <div className={styles.datingcustomersub}>
        <div className={styles.datingcustomerright}>
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
          className={styles.datingcustomerleft}
          style={{
            background: `url(${customerData.background})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            backgroundPosition:"center",
          }}
        >
          <div className={styles.logisticCustomerImage}>
              <Image
                src={customerData.customerdata[active].img.src}
                alt={customerData.customerdata[active].img.alt}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
          </div>
        </div>
      </div>
    </div>
  );
}
