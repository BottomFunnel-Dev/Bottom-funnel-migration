import React from 'react';
import styles from "./Escooterhardware.module.css";

export const Escooterhardware = () => {
  const hardware = [
    {
      img: "/Images/Escooter/MapMarker.png",
      p: "GPS"
    },
    {
      img: "/Images/Escooter/Recharge Battery.png",
      p: " Battery Meter"
    },
    {
      img: "/Images/Escooter/Gear.png",
      p: "Maintenance sensor"
    },
    {
      img: "/Images/Escooter/Notification.png",
      p: "Alarm"
    },
  ]
  return (
    <div className={styles.szescooterhardwarecontainer}>
      <div className={styles.szescooterhardwaresub}>
        <div className={styles.szescooterhardwareleft}>
          <div className={styles.szescooterhardwarscooter}>
            <img src="/Images/Escooter/escooters.png" alt='imagescycle' />
          </div>
        </div>
        <div className={styles.szescooterhardwareright}>

          <h1>What hardware do you need for E-scooter App Development</h1>

          <div className={styles.szEscooterhardwarediv}>
            {
              hardware.map((item) => {
                return (
                  <div className={styles.szhardwaregpsdiv}>

                    <div className={styles.szgpsimages}>
                      <img src={item.img} alt="image" />
                    </div>
                    <p>{item.p}</p>

                  </div>
                )
              })
            }
          </div>

        </div>
      </div>

    </div>
  );
};
