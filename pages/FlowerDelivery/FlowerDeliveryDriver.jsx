import React, { useState } from 'react';
import styles from "./FlowerDeliveryDriver.module.css";

const FlowerDeliveryDriver = () => {

  const [imageChange, setImageChange] = useState("/Images/Flowerdeliverypage/DriverProfile.png")
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
  }

  const flowerdeliverydriverdata = [
    {

      img: "/Images/Flowerdeliverypage/DriverProfile.png",
      htxt: "Driver's Profile",
      stxt: "To make a flower delivery app is to meet the demands of the current market. This will surely increase the number of orders, popularity, and therefore, revenue."
    },
    {
      img: "/Images/Flowerdeliverypage/Pickup location.png",
      htxt: "Pickup Details",
      stxt: "Nowadays, users prefer apps or online business models instead of calling or live to order. Online flower delivery app is the best way to get ahead of the competition and stay relevant in today’s market."
    },
    {
      img: "/Images/Flowerdeliverypage/Reports.png",
      htxt: "Performance Analysis",
      stxt: "In the United States and the United Kingdom, developers charge from $70-$ 250. In Europe, on the other hand, developers charge between 50 and 150 dollars an hour. "
    },
    {
      img: "/Images/Flowerdeliverypage/Orderdetails.png",
      htxt: "Order",
      stxt: "It’s easier to track orders when all of them are in one place. With everything on one dashboard, you’ll never have any mixups again.The bigger the user base, the bigger the arena of customers."
    },
  ]

  return (
    <div className={styles.flowerdeliverydrivermainboxing}>
      <div className={styles.flowerdeliveryflexboxleft}>
        <div className={styles.flowerdeliveryflexboxleftimageone} >
          <img src='/Images/Flowerdeliverypage/Rectangle 4192.png' alt='image1' />
        </div>

        <div className={styles.flowerdeliveryflexboxleftimagetwo}>
          <img src={imageChange} alt='image2' />
        </div>
      </div>

      <div className={styles.flowerdeliveryflexboxright}>

        <h2>Driver Applications</h2>
        {flowerdeliverydriverdata.map((e) => {
          return (

            <div className={styles.flowerdeliverydrivermappingbox}
              key={e.htxt} onMouseEnter={() => {
                handleImageChange(e.img)
              }}
            >
              <h4>{e.htxt}</h4>
              <p>{e.stxt}</p>
            </div>
          )

        })}
      </div>
    </div>
  );
};

export default FlowerDeliveryDriver
