import React, { useState } from 'react';
import styles from "./Pharmacycustomer.module.css";
import Image from 'next/image';

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
      para: "Easy app onboarding for pharmacy apps is a great way to make your pharmacy app more user-friendly and engaging.",
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
      para: "Find local pharmacies and pharmacists, and stay up to date on all the latest news and tips on health and wellness.",
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
      para: "It allows you to search for a doctor based on your specific needs, such as location, specialty, and availability.",
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
      para: "We have multiple payment options available in our pharmacy app, including Paypal, Visa, Mastercard, and American Express. ",
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
      para: "All you need to do is to select the city, state, and hospital where your emergency is located and we will provide you with a list of trusted companies.",
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
      para: "User can track an order in our pharmacy app with ease! Just enter the needed information and our app will take care of the rest. ",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className={styles.pharmacycustomer} >
      <h1>
        Customer app
      </h1>

      <div className={styles.pharmacycustomersub}>

        <div className={styles.pharmacycustomerright}>
          {pharmacycustomerdata.map(({ title, icon,para }, idx) => {
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
                   {para}
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
  );
};
