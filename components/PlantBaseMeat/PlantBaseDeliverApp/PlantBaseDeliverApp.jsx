import Image from "next/image";
import React, { useState } from "react";
import styles from "./PlantBaseDeliverApp.module.css";

export default function PlantBaseDeliverApp({ consumerdata }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.plantBasedDeliver}>
      <h1>
        {consumerdata.sectionTitle}
      </h1>

      <div className={styles.plantBasedDeliversub}>
        <div className={styles.plantBasedDeliverright}>
          {consumerdata.consumerdata.map(({ title, icon, para }, idx) => {
            return (
              <div
                key={title}
                onMouseOver={() => setActive(idx)}
                className={`plantBasedDeliverApp-box-${idx}`}
              >

                <div className={styles.plantBasedDeliverAppLogo}>
                  <Image src={icon.src}
                    alt={icon.alt}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>

                <h3> {title} </h3>
                <p> {para} </p>
              </div>
            );
          })}
        </div>

        <div className={styles.plantBasedDeliverleft}
          style={{
            background: `url(${consumerdata.background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={styles.plantBasedDeliverAppCustomerImage}>
            <Image src={consumerdata.consumerdata[active].img.src}
              alt={consumerdata.consumerdata[active].img.alt}
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
};
