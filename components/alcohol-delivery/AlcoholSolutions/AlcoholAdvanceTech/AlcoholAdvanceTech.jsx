import Image from "next/image";
import React, { useState } from "react";
import styles from "./AlcoholAdvanceTech.module.css";

export default function AlcoholAdvanceTech({ customerData }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.alcoholcustomer}>
      <h1> Customer App </h1>

      <div className={styles.alcoholcustomersub}>
        <div className={styles.alcoholcustomerleft}>
          <div className={styles.alcoholCustomerImage}>
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

        <div className={styles.alcoholcustomerright}>
          {customerData.customerdata.map(({ title,icon, para }, idx) => {
            return (
              <div key={title} onMouseOver={() => setActive(idx)} className={`logistic-box-${idx}`}>
                <div className={styles.logisticLogo}>
                  <Image src={icon.src}
                    alt={icon.alt}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "13%", height: "100%" }}
                  />
                </div>

                <h3> {title} </h3>
                <p> {para} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


