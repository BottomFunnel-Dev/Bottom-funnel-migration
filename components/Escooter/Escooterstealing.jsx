import React from 'react';
import styles from "./Escooterstealing.module.css";

export default function Escooterstealing() {
  const thunder = [
    {
      img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Escooter/eco friendly.png",
      p: "Environment-Friendly"
    },


    {
      img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Escooter/cost.png",
      p: "Inexpensive"
    },
    {
      img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Escooter/Sustainability.png",
      p: "A Sustainable subtitute"
    },
    {
      img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Escooter/traffic.png",
      p: " Keep from traffic congetion"
    },

    {
      img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Escooter/Kick Scooter.png",
      p: "Easy maintenance"
    },
    {
      img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Escooter/Parking.png",
      p: " Easy Parking "
    },
    {
      img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Escooter/Happy.png",
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
                  <img src={item.img} alt="image" />
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
