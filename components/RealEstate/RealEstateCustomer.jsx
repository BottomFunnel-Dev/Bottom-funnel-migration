import Image from "next/image";
import React, { useState } from "react";
import styles from "./RealEstateCustomer.module.css";

export default function RealEstateCustomer() {
  const [imageChange, setImageChange] = useState(
    "/Images/RealEstate/Customer App/Simple & Secure Login.webp",
  );

  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const realstatecustomerdata = [
    {
      image: "/Images/RealEstate/Customer App/Simple & Secure Login.webp",
      icon: "/Images/RealEstate/Icons/ha/easily acces through.webp",
      htxt: "Simple & Secure Login",
      stxt: "It is a cross platform application which gives ease to customer of accessing it through both android and iOS",
    },
    {
      image: "/Images/RealEstate/Customer App/User-friendly interface.webp",
      icon: "/Images/RealEstate/Icons/ha/manage product categories-1.webp",
      htxt: "User-friendly interface",
      stxt: "It has easy to understand templates and customization app designs to give the customer comfort of use.",
    },

    {
      image: "/Images/RealEstate/Customer App/Multiple Payment Options.webp",
      icon: "/Images/RealEstate/Icons/ha/multiple paymnet option.webp",
      htxt: "Multiple Payment Options",
      stxt: "Multiple payment gateways denote that a merchant provides several online payment gateways on a single website.It means that users can users can use an alternative payment method if any online payment gateway has a low success rate or is experiencing downtime.",
    },

    {
      image: "/Images/RealEstate/Customer App/Easy To Search.webp",
      icon: "/Images/RealEstate/Icons/ha/order food & track.webp",
      htxt: "Easy To Search",
      stxt: "If you're haveing trouble thinking of new search terms, you can use search suggestions instead.These will usually appear as you're a great way to find new keywords you might not have tried.",
    },
  ];

  return (
    <div className={styles.realestatecustomerboxmain}>
      <div className={styles.realestatecustomerleftbox}>
        <div className={styles.realstatecustomerappleftboxsometextupper}>
          <h2>Customer Application</h2>
        </div>
        <div className={styles.realestatecustomermappingmainbox}>
          {realstatecustomerdata.map((e) => {
            return (
              <div
                className={styles.realstatemapperindivisuallybox}
                key={e.htxt}
                onMouseEnter={() => {
                  handleImageChange(e.image);
                }}
              >
                <div className={styles.realestatecustomericonind}>
                  <Image
                    src={e.icon}
                    alt={"icon"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      padding: "5px",
                    }}
                  />
                </div>
                <h5>{e.htxt}</h5>
                <p>{e.stxt}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.realestatecustomerrightbox}>
        <div className={styles.realestatecustomerapprightboxformobile}>
          <Image
            className="nextholidaysimagemovable"
            src={imageChange}
            alt={"real estate"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
