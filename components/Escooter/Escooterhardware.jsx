import React from 'react';
import styles from "./Escooterhardware.module.css";
import Image from 'next/image';

export const Escooterhardware = () => {
  const hardware = [
    {
      img: "/Images/Escooter/MapMarker.webp",
      p: "GPS"
    },
    {
      img: "/Images/Escooter/Recharge Battery.webp",
      p: " Battery Meter"
    },
    {
      img: "/Images/Escooter/Gear.webp",
      p: "Maintenance sensor"
    },
    {
      img: "/Images/Escooter/Notification.webp",
      p: "Alarm"
    },
  ]
  return (
    <div className={styles.szescooterhardwarecontainer}>
      <div className={styles.szescooterhardwaresub}>
        <div className={styles.szescooterhardwareleft}>
          <div className={styles.szescooterhardwarscooter}>
              <Image
                  src={"/Images/Escooter/escooters.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                  />
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

        </div>
      </div>

    </div>
  );
};
