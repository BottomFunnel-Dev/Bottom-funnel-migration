import React from "react";
import styles from "./SaasCards.module.css";
import Image from "next/image";

export const SaasCards = ({ data }) => {
  return (
    <div className={styles.SaasCardsMain}>
      <div className={styles.SaasCardsIcon}>
            <Image
                src={data.icon}
                alt={data.title}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
      </div>
      <div className={styles.SaasCardsContent}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};
