import React, { useState } from "react";
import styles from "./Cannabisdrive.module.css";

export default function Cannabisdrive() {
  const [imageChange, setImageChange] = useState(
    "/Images/icecreamchanges/driver app/Profile.png",
  );
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };
  const canabiesdriverappdata = [
    {
      image: "/Images/newcannabispage/driver screens/Driver Profile.png",
      icon: "/Images/newcannabispage/icons/Task Completed-2.png",
      headertext: "Driver's Profile",
      paragraph:
        "Customize this Ice Cream Delivery App however you see fit with our powerful online app builder. You don’t need any design or coding experience",
    },
    {
      image: "/Images/newcannabispage/driver screens/Reports.webp",
      icon: "/Images/newcannabispage/icons/Task Completed-3.png",
      headertext: "Daily Earnings & Reports",
      paragraph:
        "Canbies is important to many people. They use it for more than eating and as a source of dessert. Many people like ice cream in cooking, like pancakes or cupcakes. Ice cream also provides a cooling sensation and can help digestion.",
    },
    {
      image: "/Images/newcannabispage/driver screens/Ordertracking.webp",
      icon: "/Images/newcannabispage/icons/Card Payment-1.png",
      headertext: "Customer order Details",
      paragraph:
        "Less time spent in the ordering process means better user experience. Let your app users pay easily using multiple payment options so as to improve their overall app experience.",
    },
    {
      image: "/Images/newcannabispage/driver screens/Pickup location.webp",
      icon: "/Images/newcannabispage/icons/Track Order-1.png",
      headertext: "Track order",
      paragraph:
        "Better pricing doesn’t always have to be dropping your prices instantly. It’s somehow psychological in nature. There’s a subtle art to make it appear that you’re offering a better price without sacrificing your bottom-line.",
    },
  ];
  return (
    <div className={styles.cannabisdriverappmainboxes}>
      <h2> Driver App </h2>
      <div className={styles.canabisdriverappflexingbox}>
        <div className={styles.canabisdriverappflexingboxleftbox}>
          <div className={styles.canabisdeliveryappleftboxinsiderupperimage}>
            <img src={imageChange} alt="image" />
          </div>
        </div>
        <div className={styles.canabisdriverappflexingboxrightbox}>
          {canabiesdriverappdata.map((e) => {
            return (
              <div
                className={styles.canabisdriverappindivisualbox}
                key={e.headertext}
                onMouseEnter={() => {
                  handleImageChange(e.image);
                }}
              >
                <div className={styles.canabisdeliveryappindivisualboxforlogo}>
                  <img src={e.icon} alt="image" />
                </div>
                <div className={styles.icecreamdeliveryappindivisualboxfortext}>
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
