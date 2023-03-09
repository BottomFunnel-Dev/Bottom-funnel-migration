

import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
// import styles from "./foodDeliveryAdvanceTech.module.css";

export default function FoodDeliveryAdvanceTech({ fooddeliverydrivedata }) {
  const [active, setActive] = useState(0);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="/components/food-delivery/foodDeliveryAdvanceTech.module.css"
        />
      </Head>

      <div className="foodDeliveryAdvanceTech">
        <h1>{fooddeliverydrivedata.sectionTitle}</h1>
        <div className="foodDeliveryAdvanceTechsub">
          <div className="foodDeliveryAdvanceTechleft"
            style={{
              background: `url(${fooddeliverydrivedata.background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            <div className="logisticDriveImage">
              <Image
                src={fooddeliverydrivedata.fooddeliverydrivedata[active].img.src}
                alt={fooddeliverydrivedata.fooddeliverydrivedata[active].img.alt}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>

          <div className="foodDeliveryAdvanceTechright">
            {fooddeliverydrivedata.fooddeliverydrivedata.map(({ title, icon, para }, idx) => {
              return (
                <div key={title} onMouseOver={() => setActive(idx)} className={`logistic-box-${idx}`}>
                  <div className="logisticLogo">
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
    </>
  );
};
