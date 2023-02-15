import React, { useState } from "react";
import styles from "./Datingmobile.module.css";
import Image from "next/image";

export default function Datingmobile({ customerData }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.datingAdmin}>
      <h1>{customerData.sectionTitle}</h1>
      <div className={styles.datingAdminsub}>
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
