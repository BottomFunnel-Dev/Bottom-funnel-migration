import Image from "next/image";
import React from "react";
import styles from "./EcommerceWhyChooseUs.module.css";

export default function EcommerceWhyChooseUs() {
  const logoData = [
    "/Images/EcommercePhotos/icons/customer-review.webp",
    "/Images/EcommercePhotos/icons/team.webp",
    "/Images/EcommercePhotos/icons/opacity.webp",
    "/Images/EcommercePhotos/icons/proactive.webp",
    "/Images/EcommercePhotos/icons/diagram.webp",
  ];
  return (
    <div className={styles.ecommerceWhyChooseUsContaier}>
      <h1>
        Why Choose Bottom Funnel as your E-commerce app development company
      </h1>
      <div>
        <div>
          {logoData.map((elem) => (
            <div className={styles.ecommerceWhyChooseUsLogo}>
              <Image
                src={elem}
                alt={elem}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          ))}
        </div>
        <div>
          <Image
            src={"/Images/EcommercePhotos/background/whyus.webp"}
            alt={"EcommercePhotos/background/whyus.webp"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
