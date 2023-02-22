import React, { useState } from "react";
import styles from "./OnDemandCustomer.module.css";
import Image from "next/image";

export default function OnDemandCustomerSection() {
  const [imageChange, setImageChange] = useState(
    "/Images/ondemand/OnDemandSwitchScreens/Login.webp"
  );
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const canabiescustomerappdata = [
    {
      image: "/Images/ondemand/OnDemandSwitchScreens/Login.webp",
      icon: "/Images/newcannabispage/icons/image 15.png",
      headertext: "Easy app onboarding",
      paragraph:
        "Customize this Canabbis App however you see fit with our powerful online app builder. You don’t need any design or coding experience fit with our powerful online app builder fit .",
    },

    {
      image:
        "/Images/ondemand/OnDemandSwitchScreens/Simplicity In Searching.webp",
      icon: "/Images/newcannabispage/icons/image 16.png",
      headertext: "Browse By Categories",
      paragraph:
        "Cannabies is important to many people. They use it for more than eating and as a source of dessert. Many people like ice cream in cooking, like pancakes or cupcakes. Ice cream also provides a cooling sensation and can help digestion.",
    },

    {
      image: "/Images/ondemand/OnDemandSwitchScreens/Easy To Contact.webp",
      icon: "/Images/newcannabispage/icons/image 18.png",
      headertext: "Easy to Contact",
      paragraph:
        "Less time spent in the ordering process means better user experience. Let your app users pay easily using multiple payment options so as to improve their overall app experience.",
    },

    {
      image: "/Images/ondemand/OnDemandSwitchScreens/Easy to Schedule.webp",
      icon: "/Images/newcannabispage/icons/image 17.png",
      headertext: "Easy to Schedule",
      paragraph:
        "Better pricing doesn’t always have to be dropping your prices instantly. It’s somehow psychological in nature. There’s a subtle art to make it appear that you’re offering a better price without sacrificing your bottom-line.",
    },
  ];

  return (
    <div className={styles.cannbiescustomerappmainboxes}>
      <h2> Customer App </h2>
      <div className={styles.cannbiesdeliveryappflexingbox}>
        <div className={styles.cannabiesdeliveryappflexingboxleftbox}>
          <div className={styles.cannabiesdeliveryappleftboxinsiderupperimage}>
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

        <div className={styles.cannbiesdeliveryappflexingboxrightbox}>
          {canabiescustomerappdata.map((e) => {
            return (
              <div
                className={styles.cannabiesdeliveryappindivisualbox}
                key={e.htxt}
                onMouseEnter={() => {
                  handleImageChange(e.image);
                }}
              >
                <div className={styles.cannbiesdeliveryappindivisualboxforlogo}>
                  <Image
                    src={e.icon}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>

                <div className={styles.cannabisDeliveryTextDiv}>
                  <h4> {e.headertext} </h4>
                  <p> {e.paragraph} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
