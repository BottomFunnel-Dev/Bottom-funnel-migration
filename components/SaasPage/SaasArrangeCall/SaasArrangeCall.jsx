import React from "react";
import styles from "./SaasArrangeCall.module.css";
import Image from "next/image";

export const SaasArrangeCall = () => {
  return (
    <>
      <div className={styles.arrangeCallMainDiv}>
        <div className={styles.arrangeCallImage}>
                <Image
                  src={"/Images/saasPhotos/SaasImages/div.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                <h1>Arrange a Call</h1>
                <p>
                    Do you need an expert opinion or advice for your software development ? <br/>
                    If so,connect with us now for a free consultation call. Our solution
                    architects and CTO can nudge you towards success.
                </p>
                <button>BOOK A 30 MIN CALL</button>
        </div>
      </div>
    </>
  );
};
