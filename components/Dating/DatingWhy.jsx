import React from 'react';
import styles from "./DatingWhy.module.css";

export default function DatingWhy() {
  const datingwhy = [
    {
      img: "Images/Dating/ontimedelivery.png",
      p: "On Time Delivery"
    },
    {
      img: "Images/Dating/24customerservice.png",
      p: "24*7 Supports"
    },
    {
      img: "Images/Dating/flexible.png",
      p: "Flexibilety"
    },
    {
      img: "Images/Dating/rating.png",
      p: "Customer Satisfaction"
    },
  ]
  return (
    <div className={styles.szdatingwhysection}>
      <div className={styles.szdatingwhysub}>
        <div className={styles.szdatingwhyleft}>
          <div>
            <h2>Why Choose Us</h2>
            <p>
               Bottom funnel is the most popular choice for dating app solutions because it is a cost-effective solution that has been tested on many different platforms and will work with any platform you choose. Bottom funnel is a web application that uses a simple drag-and-drop process to create your custom dating site. You can then add all of the features you want, such as photo galleries, blogs, message boards, and more!
            </p>
          </div>

        </div>
        
        <div className={styles.szdatingwhyright}>
          {
            datingwhy.map((item) => {
              return (
                <div>
                  <div className={styles.szdatingwhyimages}>
                    <img src={item.img} alt="images"/>
                  </div>
                  <p>{item.p}</p>

                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  );
};
