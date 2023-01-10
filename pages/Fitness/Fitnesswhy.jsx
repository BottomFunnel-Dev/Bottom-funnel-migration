import React from 'react';
import styles from "./fitnesswhy.module.css";

export default function Fitnesswhy() {

  const whychoose = [
    {
      img: "/Images/education/security.png",
      p: "On Time Delivery"
    },
    {
      img: "Images/education/customer.png",
      p: "24*7 Supports"

    },

    {
      img: "Images/education/arrow.png ",
      p: "Flexibility"

    },
    {
      img: "Images/education/teaching.png",
      p: "Customer Satisfaction"
    }
  ]

  return (
    <div className={styles.szfitwhy}>
      <h1>Why choose us</h1>
      <p className={styles.szwhypara}> </p>
      <div className={styles.szfitchoose}>
        {
          whychoose.map((item, i) => {
            return (
              <div key={i}  >
                <div className={styles.szfitanalysis}>
                  <img src={item.img} alt="images"/>  </div>
                <p>{item.p}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};
