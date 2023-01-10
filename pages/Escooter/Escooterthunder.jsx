import React from 'react';
import styles from "./Escooterthunder.module.css";

export default function Escooterthunder() {
  const thunderblue = [
    {
      img: "/Images/Escooter/traffic.png",
      p: "Turns your vision into reality"
    },
    {
      img: "/Images/Escooter/takecare.png",
      p: "Take care of the minutest details"
    },
    {
      img: "/Images/Escooter/setting.png",
      p: "Keeps up with the latest tech and trends"
    },
    {
      img: "/Images/Escooter/Builds.png",
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
                    <img src={item.img} alt="image" />
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
