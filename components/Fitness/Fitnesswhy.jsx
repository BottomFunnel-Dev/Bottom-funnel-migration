import React from 'react';
import styles from "./fitnesswhy.module.css";
import Image from 'next/image';

export default function Fitnesswhy() {

  const whychoose = [
    {
      img: "/Images/education/security.webp",
      p: "On Time Delivery"
    },
    {
      img: "/Images/education/customer.webp",
      p: "24*7 Supports"

    },

    {
      img: "/Images/education/arrow.webp",
      p: "Flexibility"

    },
    {
      img: "/Images/education/teaching.webp",
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
                  <Image
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                      src={item.img}
                      alt="image"
                    />
               </div>
                <p>{item.p}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};
