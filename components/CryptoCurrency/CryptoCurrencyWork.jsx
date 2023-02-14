import React from 'react';
import styles from "./CryptoCurrencyWork.module.css";
import Image from "next/image";

export const CryptoCurrencyWork = () => {
  return (
    <div className={styles.cryptocurrencyworkmainbox}>
      <div className={styles.cryptocurrencyworkborderdivboxingimg}>
        <h3>How Do Cryptocurrencies Work ?</h3>
      </div>
      <div className={styles.cryptocurrencyworkimageboxing}>
          <Image
            src={"/Images/Cryptocurrencypage/Bitcoin 2.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
      </div>

      <div className={styles.cryptocurrencyworklowerboxingimage}>
      </div>
    </div>
  )
}

