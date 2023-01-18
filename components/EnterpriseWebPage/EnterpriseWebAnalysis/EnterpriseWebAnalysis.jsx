import React from "react";
import styles from "./EnterpriseWebAnalysis.module.css";

export const EnterpriseWebAnalysis = () => {
  return (
    <div className={styles.EnterpriseWebAnalysisContainer}>
      <div className={styles.EnterpriseWebAnalysisCard}>
        <h1>1800+</h1>
        <h3>
          Completed <br /> Projects
        </h3>
      </div>
      <div className={styles.EnterpriseWebAnalysisCard}>
        <h1>21+</h1>
        <h3>
          Years of <br /> Experience
        </h3>
      </div>
      <div className={styles.EnterpriseWebAnalysisCard}>
        <h1>810+</h1>
        <h3>
          Global <br /> Customers
        </h3>
      </div>
      <div className={styles.EnterpriseWebAnalysisCard}>
        <h1>36</h1>
        <h3>
          Countries <br /> Clients Served{" "}
        </h3>
      </div>
      <div className={styles.EnterpriseWebAnalysisImage}>
        <img src="Images/enterpriseWebPhotos/microsoft.png" alt="Microsoft" />
      </div>
    </div>
  );
};
