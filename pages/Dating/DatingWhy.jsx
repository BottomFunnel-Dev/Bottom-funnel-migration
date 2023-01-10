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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere exercitationem pariatur incidunt consectetur ipsam
              tempore, quam porro obcaecati, nesciunt natus praesentium provident error consequuntur esse expedita nam tempora.
              Voluptates, similique.
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
