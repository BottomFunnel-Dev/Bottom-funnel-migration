import React from "react";
import styles from "./Logicsticcontainer.module.css";
import Image from "next/image";

export default function Logisticcontainer() {
  return (
    <div className={styles.szlogisticcontainer}>
      <div className={styles.szlogisticsubcontainer}>
        <div className={styles.szlogisticleft}>
          <div>
            <h1>Logistics & Transportation Software Devlopment</h1>
            <p>
              You are in the right place! Our team of experts has vast experience creating modern websites that look
              great on any device. We build them with mobile-first approach and use best practices to ensure your site
              works well on all devices. Using our expertise, you will get an app-like navigation, responsive design, and more.
            </p>
            <button className={styles.szlogisticbtn}>Get Started</button>
          </div>
        </div>

        <div className={styles.szlogisticright}>
          <div className={styles.szrecpurple}>
                <Image
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    src={"/Images/logistic/logistic.webp"}
                    alt={"image"}
                  />
              
          </div>
        </div>
      </div>
    </div>
  );
}
