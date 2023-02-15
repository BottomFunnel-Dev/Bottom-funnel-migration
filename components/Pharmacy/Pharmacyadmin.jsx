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
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
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
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
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
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",

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
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },

  ];


  const [active, setActive] = useState(0);
  return (
    <div className={styles.pharmacyadmin}>

      <h1> Admin panel</h1>
      <div className={styles.pharmacyadminsub}>

        <div className={styles.pharmacyadminright}>


          {Pharmacyadmindata.map(({ title, icon }, idx) => {
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, quis eum ev
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
