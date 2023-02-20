import React, { useState } from "react";
import styles from "./Newspaper.module.css";
import Image from "next/image";

export default function NewspaperCustomer() {
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
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat modi reprehenderit quasi quod soluta ab
                    exercitationem, fugiat eveniet nulla omnis odit ad,
                    recusandae consectetur autem porro, itaque atque. Molestiae,
                    deleniti.`,
    },

    {
      text: "Notifications",
      image: "/Images/News/Screens/Notification.webp",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat modi reprehenderit quasi quod soluta ab
                    exercitationem, fugiat eveniet nulla omnis odit ad,
                    recusandae consectetur autem porro, itaque atque. Molestiae,
                    deleniti.`,
    },

    {
      text: "Latest Updates",
      image: "/Images/News/Screens/Home.webp",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat modi reprehenderit quasi quod soluta ab
                    exercitationem, fugiat eveniet nulla omnis odit ad,
                    recusandae consectetur autem porro, itaque atque. Molestiae,
                    deleniti.`,
    },

    {
      text: "Search Your Interest",
      image: "/Images/News/Screens/Search.webp",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat modi reprehenderit quasi quod soluta ab
                    exercitationem, fugiat eveniet nulla omnis odit ad,
                    recusandae consectetur autem porro, itaque atque. Molestiae,
                    deleniti.`,
    },
  ];

  return (
    <div className={styles.newspaperCustomerContainer}>
      <h1>Features Of Event App Development</h1>
      <div className={styles.newspapermainboxes}>
        <div className={styles.newspaperrightboxforsometext}>
          <h1>User Application</h1>

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
                  <div>
                    <span>
                      <Image
                        src={"/Images/News/icons/checkmark.webp"}
                        alt={"News/icons/checkmark.webp"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </span>
                    <h4>{e.text}</h4>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat modi reprehenderit quasi quod soluta ab
                    exercitationem, fugiat eveniet nulla omnis odit ad,
                    recusandae consectetur autem porro, itaque atque. Molestiae,
                    deleniti.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
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
      </div>
    </div>
  );
}
