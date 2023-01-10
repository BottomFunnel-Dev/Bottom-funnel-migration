import React from "react";
import styles from "./SaasCards.module.css";

export const SaasCards = ({ data }) => {
  return (
    <div className={styles.SaasCardsMain}>
      <div className={styles.SaasCardsIcon}>
        <img src={data.icon} alt={data.title} />
      </div>
      <div className={styles.SaasCardsContent}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};
