import React from "react";
import styles from "./AIContentApplication.module.css";
import Image from "next/image";

export default function AIContentApplication() {
  return (
    <div className={styles.aicontentapplicationmaiboxes}>
      <div className={styles.aicontentapplicationsmalltypebanner}>
        <Image
          src={
            "/Images/AiContentsolution/bannersBackgrounds/Rectangle line.webp"
          }
          alt={"images"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className={styles.aicontentbannertextboxesupper}>
        <h1>AI CONTENT APP FEATURES WE OFFERS</h1>
      </div>
    </div>
  );
}
