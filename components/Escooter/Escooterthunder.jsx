import React from 'react';
import styles from "./Escooterthunder.module.css";
import Image from 'next/image';

export default function Escooterthunder() {
  const thunderblue = [
    {
      img: "/Images/Escooter/traffic.webp",
      p: "Turns your vision into reality"
    },
    {
      img: "/Images/Escooter/takecare.webp",
      p: "Take care of the minutest details"
    },
    {
      img: "/Images/Escooter/setting.webp",
      p: "Keeps up with the latest tech and trends"
    },
    {
      img: "/Images/Escooter/Builds.webp",
      p: "Builds an efficient UI for a user-Frienly app"
    },
  ]

  return (
    <div className={styles.Escooterdivcontainer}>

      {<div className={styles.Escooterthundersub}>
        <div>
          <h1>Why Bottom Funnel for an E-Scooter App Development ?</h1>
        </div>

        <div className={styles.szEscooterthunderdiv}>
          {
            thunderblue.map((item) => {
              return (
                <div className={styles.szwhythunder}>

                  <div className={styles.szwhythunderimages}>
                  <Image
                      src={item.img}
                      alt={"image"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <p>{item.p}</p>

                </div>
              )
            })
          }
        </div>
      </div>}
    </div>
  );
};
