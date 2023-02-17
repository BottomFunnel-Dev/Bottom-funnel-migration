import Image from 'next/image';
import React, { useState } from 'react'
import styles from "./MeatDeliveryCustomerApp.module.css"

export const MeatDeliveryCustomerApp = () => {

const [imagechange, setImageChange] = useState("/Images/meatdelieveryapp/search.webp")

const handleImageChange = (imagepath) =>{
  setImageChange(() => imagepath)
}

  const meatcustomerappdata = [

    {
      img:"/Images/meatdelieveryapp/search.webp",
      htxt: "Can be easily accessed through both android/iOS",
      stxt: "Forget about going to the store to get a meat package, it is possible to have it delivered at your doorstep with the use of our app. Also, this app is useful for those who have compromised taste buds. This Meat Delivery App is perfect for those who can't eat meat."
    },

    {
      img:"/Images/meatdelieveryapp/communicate on orders.webp",
      htxt: "User-Friendly Interface",
      stxt: "Going out for a night on the town? Don't miss out on the delights of eating out while you're there! With Solution for Your Meat Delivery App, you can now enjoy great food without having to worry about your meat getting cold. When you order meat delivery through our app."
    },

    {
      img:"/Images/meatdelieveryapp/Screenshot_20221216_161300 1.webp",
      htxt: "Order food and track their service",
      stxt: "You're at a restaurant now, and you have a craving for pizza. What do you do? You take out your phone, order one online, and wait for it to get delivered. Riding on your trusty-yet-unpredictable app that knows when you'll be home is the best way to go about it!"
    },

    {
      img:"/Images/meatdelieveryapp/agile delivery.webp",
      htxt: "Smart search and add to your favorites list",
      stxt: "Meat is a guilty pleasure and we all enjoy a nice steak now and then. But ordering it in restaurants can get confusing and complicated. That's why we have developed an app that makes it easy for you to order meat online or in restaurants, so you can enjoy your favorite dishes."
    },

  ]


  return (
    <div className={styles.meatdeliverycustomerappmainboxes}>
      <div className={styles.meatdeliverycustomerapptextbox}>
        <h1>
          SOLUTION FOR YOUR <span className={styles.specialcolor}> MEAT DELIVERY APP </span>
        </h1>
      </div>

      <div className={styles.customerapponlyformeatdeliveryapp}>
        <div className={styles.customerappmeatdeliveryappleftbox}>
          <div className={styles.meatdeliverycustomerappmobilebox}>
            <Image src={imagechange}
              alt={'images'}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%",objectFit:"contain" }}
            />
          </div>
        </div>

        <div className={styles.customerappmeatdeliveryapprightbox}>
          <div className={styles.customerappmeatdeliveryapprightboxfortext}>
            <h2 className={styles.specialcolor}>Customer Application</h2>
          </div>

          <div className={styles.meatappflexingforrightdiv}>{meatcustomerappdata.map((e) => {
            return (
              <div className={styles.meatdeliverymappingboxes}
              key={e.htxt} onMouseEnter={() => {
                handleImageChange(e.img)
              }}
              >
                <h3> {e.htxt} </h3>
                <p> {e.stxt} </p>
              </div>
            )
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

