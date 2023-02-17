import React, { useState } from "react";
import styles from "./Newspaper.module.css";
import Image from "next/image";

export default function Newspaper() {
  const [imageChange, setImageChange] = useState(
    "/Images/News/Screens/News Detail.webp",
  );
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const newspaperdata = [
    {
      text: "News Details",
      image: "/Images/News/Screens/News Detail.webp",
    },

    {
      text: "Notifications",
      image: "/Images/News/Screens/Notification.webp",
    },

    {
      text: "Latest Updates",
      image: "/Images/News/Screens/Home.webp",
    },

    {
      text: "Search Your Interest",
      image: "/Images/News/Screens/Search.webp",
    },
  ];

  return (
    <div className={styles.newspapermainboxes}>
      <div className={styles.newspaperleftboxforimages}>
        <Image
          src={imageChange}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className={styles.newspaperrightboxforsometext}>
        <h1>
          {" "}
          We take the benefits of Newspaper development beyond easy
          accessibility
        </h1>

        <div className={styles.newstextboxdisplyaflex}>
          {newspaperdata.map((e) => {
            return (
              <div
                className={styles.newstextboxdisplayindi}
                key={e.text}
                onMouseEnter={() => {
                  handleImageChange(e.image);
                }}
              >
                <h4>{e.text}</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat modi reprehenderit quasi quod soluta ab
                  exercitationem, fugiat eveniet nulla omnis odit ad, recusandae
                  consectetur autem porro, itaque atque. Molestiae, deleniti.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
