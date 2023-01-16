import React from "react";
import styles from "./mernbanner.module.css";

export const Mernbanner = ({ bannerdata }) => {
  return (
    <div
      className={styles.mernBanner}
      style={{
        background: `url(${bannerdata.background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.mernbannercontent}>
        <h1>{bannerdata.title}</h1>
        <p>{bannerdata.description}</p>
        <button className={styles.mernButton} style={bannerdata.buttonStyle}>
          Request A Quote
        </button>
      </div>

      <div className={styles.bannerIcons}>
        {bannerdata.icons.map((item, index) => (
          <div key={index} className={styles.mernskills}>
            <img src={item.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
