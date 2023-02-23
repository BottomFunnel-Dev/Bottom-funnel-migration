import Image from 'next/image';
import React, { useState } from 'react'
import styles from "./Laundrydelivery.module.css";


export const LaundryDelivery = () => {

   const [imageChange, setImageChange] = useState("/Images/Laundrypage/switchscreens/Notifications.webp")

    const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
    }
  
    const laundrydeliverydata = [
      {
        htxt: "Notification of Upcoming Orders",
        stxt: "Most order, shipping, and customer account notifications are sent to customers automatically, and can't be disabled. When you are processing an order and customer account notifications are sent to customers ",
        img: "/Images/Laundrypage/icons/Rectangle4230.png",
        bigimg: "/Images/Laundrypage/switchscreens/Notifications.webp"
  
      },
      {
        htxt: "Daily Earning Report",
        stxt: "The global online laundry services market size was valued at USD 20.10 billion a CAGR of 30.5%. Rising demand for convenient laundry with less investment will boost product demand in the market.",
        img: "/Images/Laundrypage/icons/report.png",
        bigimg: "/Images/Laundrypage/switchscreens/Earning reports.webp"
      },
  
      {
        htxt: "Order History",
        stxt: "With this app, a client will signup in your portal with his name After successful login, they will choose the services whatever they want to get like washing and iron, washing and fold, ironing only, and dry cleaning only.",
        img: "/Images/Laundrypage/icons/sandclock.png",
        bigimg: "/Images/Laundrypage/switchscreens/Order history.webp"
      },

      {
        htxt: "Notification of Upcoming Orders",
        stxt: "Most order, shipping, and customer account notifications are sent to customers automatically, and can't be disabled. When you are processing an order and customer account notifications are sent to customers ",
        img: "/Images/Laundrypage/icons/Rectangle4230.png",
        bigimg: "/Images/Laundrypage/switchscreens/Notifications.webp"
  
      },
    ]

  
  return (
    <div className={styles.laundrydeliverymainboxes}>
    <div className={styles.laundryapplicationheadingbox}>
    <h4>Delivery Application</h4>
    <p>Get A Customized App With Advanced Delivery Managment Features</p></div>

    <div className={styles.laundrydeliverydatamappingbox}>
    <div className={styles.laundrydeliveryleftbox}>
    <div className={styles.laundrydeliveryleftboxinsiderchangaimage}>
    <Image
          src={imageChange}
          alt={"imagechange"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
    </div>
    </div>
    <div className={styles.laundrydeliveryrightbox}>{laundrydeliverydata.map((e)=>{
      return (
        <div className={styles.laundrydeliverydatamappingindi}
        key={e.htxt} onMouseEnter={() => {
        handleImageChange(e.bigimg)
        }}
        >
        <div className={styles.indivisulaboxiconlaundrydel}>
        <Image
          src={e.img}
          alt={"icon"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain" }}
        />
        </div>
        <div className={styles.laundrydeliverymapinditxtbox}>
        <h5>{e.htxt}</h5>
        <p>{e.stxt}</p>
        </div>
        </div>
      )
    })}</div>
    </div>
    </div>
  )
}

