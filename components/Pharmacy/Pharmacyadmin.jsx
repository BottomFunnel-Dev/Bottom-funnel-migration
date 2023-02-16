import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./Pharmacyadmin.module.css";

export default function Pharmacyadmin() {
  let Pharmacyadmindata = [
    {
      img: {
        src: "/Images/pharmacy/Market Overview.png",
        alt: "Marketimage",
      },

      icon: {
        src: "/Images/pharmacy/Market overview icon.png",
        alt: " Marketlogo",
      },

      title: "Market overview",
      para: "Admins have the facilities to check the Market overview in our pharmacy app, allowing us to provide a comprehensive overview of available products and pricing.",
    },

    {
      img: {
        src: "/Images/pharmacy/Product overview.png",
        alt: "Product ",
      },

      icon: {
        src: "/Images/pharmacy/Product overview icon.png",
        alt: "Product logo",
      },
      title: "Product Overview",
      para: "The app allows you to easily browse product details, find directions to nearby pharmacies, and even book appointments with your doctor.",
    },

    {
      img: {
        src: "/Images/pharmacy/Reports and revenue.png",
        alt: "Revenueimage",
      },

      icon: {
        src: "/Images/pharmacy/Revenue & sales icon.png",
        alt: "Revenuelogo",
      },
      title: "Revenue & Sales Analytics",
      para: "In addition to being able to check the data, admins have the facilities to set up and manage reports and dashboards in our pharmacy app.",

    },

    {
      img: {
        src: "/Images/pharmacy/Customer management.png",
        alt: "Customer image",
      },

      icon: {
        src: "/Images/pharmacy/Customer management icon.png",
        alt: "Customer logo",
      },
      title: "Customer Management",
      para: "Admins have the facilities to manage all aspects of customer service in our pharmacy app, from receiving orders to shipping products.",
    },

  ];


  const [active, setActive] = useState(0);
  return (
    <div className={styles.pharmacyadmin}>

      <h1> Admin panel</h1>
      <div className={styles.pharmacyadminsub}>

        <div className={styles.pharmacyadminright}>


          {Pharmacyadmindata.map(({ title, icon, para }, idx) => {
            return (

              <div
                key={title}
                onMouseOver={() => setActive(idx)}
                className={`Pharmacy-box-${idx}`}
              >

                <div className={styles.pharmacyLogo}>
                  <Image src={icon.src}
                    alt={icon.alt}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "23%", height: "100%" }}
                  />
                </div>

                <h3> {title} </h3>

                <p>
                  {para}
                </p>
              </div>
            );
          })}
        </div>

        <div className={styles.pharmacyadminleft}>
          <div className={styles.pharmacyAdminImage}>
            <Image
              src={Pharmacyadmindata[active].img.src}
              alt={Pharmacyadmindata[active].img.alt}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}  
            />
          </div>
        </div>
      </div>
    </div>
  );
};
