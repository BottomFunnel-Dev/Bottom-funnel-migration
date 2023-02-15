import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./Pharmacycustomer.module.css";

export default function Pharmacycustomer() {

  let pharmacycustomerdata = [
    {
      img: {
        src: "/Images/pharmacy/Register.png ",
        alt: "Register image",
      },

      icon: {
        src: "/Images/pharmacy/Easy app oboarding.png",
        alt: "easy app",
      },
      title: "Easy app onboarding",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos",
    },
    {
      img: {
        src: "/Images/pharmacy/Buy medicine.png",
        alt: "Buy Medicines",
      },

      icon: {
        src: "/Images/pharmacy/Pills.png",
        alt: "Schedule logo",
      },
      title: "Buy Medicines",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos",
    },

    {
      img: {
        src: "/Images/pharmacy/Book doctor.png",
        alt: "Book doctor",
      },

      icon: {
        src: "/Images/pharmacy/Hospital.png",
        alt: "book",
      },
      title: "Book doctors",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos",
    },

    {
      img: {
        src: "/Images/pharmacy/Multiple Payment option.png",
        alt: "multiplepayment",
      },

      icon: {
        src: "/Images/pharmacy/Multiple payment.png",
        alt: "Multiple Payment Option logo",
      },
      title: "Multiple Payment Option",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos",
    },

    {
      img: {
        src: "/Images/pharmacy/Book Ambulance.png",
        alt: "Track Order image",
      },

      icon: {
        src: "/Images/pharmacy/Ambulance.png",
        alt: "bookambulance",
      },
      title: "Book Ambulance",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos",
    },

    {
      img: {
        src: "/Images/pharmacy/trackorderimage.png ",
        alt: "Track Order image",
      },

      icon: {
        src: "/Images/pharmacy/Track Order.png",
        alt: "Track Order",
      },
      title: "Track Order",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos",
    },
  ];


  const [active, setActive] = useState(0);

  return (
    <div className={styles.pharmacycustomer}>
      <h1>
        Customer app
      </h1>

      <div className={styles.pharmacycustomersub}>

        <div className={styles.pharmacycustomerright}>
          {pharmacycustomerdata.map(({ title, icon }, idx) => {
            return (
              <div
                key={title}
                onMouseOver={() => setActive(idx)}
                className={`pharmacy-box-${idx}`}
              >
                <div className={styles.pharmacyLogo}>
                  <Image src={icon.src}
                    alt={icon.alt}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "25%", height: "100%" }}
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

        <div className={styles.pharmacycustomerleft}>

          <div className={styles.pharmacyCustomerImage}>
            <Image src={pharmacycustomerdata[active].img.src}
              alt={pharmacycustomerdata[active].img.alt}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>

  )
}
