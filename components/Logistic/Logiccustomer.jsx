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

        <div
          className={styles.logiccustomerleft}
          style={{
            background: `url(${customerData.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
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
        </div>
      </div>
    </div>
  );
}
