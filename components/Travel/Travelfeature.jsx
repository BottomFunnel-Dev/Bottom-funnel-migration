import React from "react";
import styles from "./Travelfeature.module.css";
import Image from "next/image";

export default function Travelfeature() {
  const travelfeature = [
    {
      img: "/Images/Travel/gps.webp",
      p: "GPS based location services",
    },
    {
      img: "/Images/Travel/hotdeals.webp",
      p: "Hot deals",
    },
    {
      img: "/Images/Travel/currency.webp",
      p: "Currency Exchange",
    },
    {
      img: "/Images/Travel/guide.webp",
      p: "Complete travel guide",
    },
    {
      img: "/Images/Travel/admin.webp",
      p: "Easy to use admin control panel",
    },
    {
      img: "/Images/Travel/secure.webp",
      p: "Secure payment",
    },
  ];
  return (
    <div className={styles.travelfeaturecontainer}>
      <div className={styles.travelfeaturesub}>
        <div className={styles.travelfeatureleft}>
          {travelfeature.map((item) => {
            return (
              <div className={styles.travelfeaturdocs}>
                <div className={styles.traveldocimg}>
                <Image
                    src={item.img}
                    alt={item.p}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <p>{item.p}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.travelfeatureright}>
          <div>
            <h1>Features</h1>
            <p>
              Your business depends on understanding your customers and their
              needs. Bottom Funnel is an all-in-one travel app solution that
              offers you a comprehensive set of tools to make sure the customer
              experience is seamless and enjoyable for both parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
