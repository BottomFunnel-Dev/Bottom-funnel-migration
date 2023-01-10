import React from "react";
import styles from "./softwarebanner.module.css";
export const SoftwareBanner = () => {
  return (
    <div className={styles.softwareBanner}>
      <div className={styles.javaIcon}>
        {" "}
        <img src="Images/banner/webdev/java.png" alt="" />
      </div>
      <div className={styles.jqueryIcon}>
        {" "}
        <img src="Images/banner/webdev/jquery.png" alt="" />
      </div>
      <div className={styles.jsIcon}>
        {" "}
        <img src="Images/banner/webdev/js.png" alt="" />
      </div>
      <div className={styles.nodeIcon}>
        {" "}
        <img src="Images/banner/webdev/node.png" alt="" />
      </div>
      <div className={styles.reactIcon}>
        {" "}
        <img src="Images/banner/webdev/react.png" alt="" />
      </div>
     
    </div>
  );
};
