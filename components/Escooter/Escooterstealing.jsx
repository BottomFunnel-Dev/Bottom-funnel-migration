import React from 'react';
import styles from "./Escooterstealing.module.css";
import Image from 'next/image';

export default function Escooterstealing() {
  const thunder = [
    {
      img: "/Images/Escooter/eco friendly.webp",
      p: "Environment-Friendly"
    },


    {
      img: "/Images/Escooter/cost.webp",
      p: "Inexpensive"
    },
    {
      img: "/Images/Escooter/Sustainability.webp",
      p: "A Sustainable subtitute"
    },
    {
      img: "/Images/Escooter/traffic.webp",
      p: " Keep from traffic congetion"
    },

    {
      img: "/Images/Escooter/Kick Scooter.webp",
      p: "Easy maintenance"
    },
    {
      img: "/Images/Escooter/Parking.webp",
      p: " Easy Parking "
    },
    {
      img: "/Images/Escooter/Happy.webp",
      p: "Fun to ride"
    },


  ]

  return (
    <div className={styles.escooterthundercontainer}>
      <h1>Why E-Scooters Apps Stealing the Thunder ?</h1>
      {<div className={styles.escooterthundersubdiv}>

        {
          thunder.map((item) => {
            return (
              <div className={styles.indivisualmappingboxescooterstealing}>

                <div className={styles.szthunderimages}>
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
      </div>}
    </div>
  );
};
