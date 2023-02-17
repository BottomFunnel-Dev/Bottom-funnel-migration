import Image from "next/image";
import React, { useState } from "react";
import styles from "./FloweDeliveryCustomer.module.css";

export default function FlowerDeliveryCustomer() {
  const [imageChange, setImageChange] = useState(
    "/Images/Flowerdeliverypage/Easy register.webp"
  );
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const flowerdeliverycustomerdata = [
    {
      img: "/Images/Flowerdeliverypage/Easy register.webp",
      htxt: "Easy Registration",
      stxt: "Customize this Flower Delivery App however you see fit with our powerful online app builder. You don’t need any design or coding experience fit with our powerful online app builder fit with our powerful online app builder",
      icon:"/Images/Flowerdeliverypage/icons/driver profile.webp"
    },
    {
      img: "/Images/Flowerdeliverypage/Group 339923.webp",
      htxt: "Buy Flowers",
      stxt: "Nowadays, users prefer apps or online business models instead of calling or live to order. Online flower delivery app is the best way to get ahead of the competition and stay relevant in today’s market.",
      icon:"/Images/Flowerdeliverypage/icons/Card Payment-1.webp"
    },
    {
      img: "/Images/Flowerdeliverypage/MULTIP~1.webp",
      htxt: "Multiple Payment Options",
      stxt: "Less time spent in the ordering process means better user experience. Let your app users pay easily using multiple payment options so as to improve their overall app experience fit with our powerful online app builder fit with our app. ",
      icon:"/Images/Flowerdeliverypage/icons/Performence & analytics.webp"
    },
    {
      img: "/Images/Flowerdeliverypage/Track order.webp",
      htxt: "Tracking Details",
      stxt: "It’s easier to track orders when all of them are in one place. With everything on one dashboard, you’ll never have any mixups again.The bigger the user base, the bigger the arena of customers.",
      icon:"/Images/Flowerdeliverypage/icons/Track Order.webp"
    },
  ];

  return (
    <div className={styles.flowerdeliverycustomermainboxing}>
      <div className={styles.flowerdeliveryflexboxleft}>
        <div className={styles.flowerdeliveryflexboxleftimageone}>
          <Image
            src={"/Images/Flowerdeliverypage/Rectangle4191.webp"}
            alt={"image1"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className={styles.flowerdeliveryflexboxleftimagetwo}>
          <Image
            src={imageChange}
            alt={"image2"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      <div className={styles.flowerdeliveryflexboxright}>
        <h2> Customer Applications </h2>
        <div className={styles.flowerdeliverycustomermapping}>
          {flowerdeliverycustomerdata.map((e) => {
            return (
              <div
                className={styles.flowerdeliverycustomermappingbox}
                key={e.htxt}
                onMouseEnter={() => {
                  handleImageChange(e.img);
                }}
              >
                <div
                  className={styles.flowerdeliverycustomermappingboxicon}
                >
                  <Image
                    src={e.icon}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <h4> {e.htxt} </h4>
                <p> {e.stxt} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

