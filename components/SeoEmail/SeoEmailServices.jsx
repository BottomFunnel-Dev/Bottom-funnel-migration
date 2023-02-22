import React from "react";
import styles from "./SeoEmailreviews.module.css";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { IoLocationSharp } from "react-icons/io5";
import { ImLink } from "react-icons/im";
import { SiGoogleanalytics } from "react-icons/si";
import { AiOutlineAudit } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

export default function SeoEmailServices() {
  const [more, setmore] = useState(false);
  const [num, setnum] = useState();
  const [a, seta] = useState();

  const arr1 = [
    {
      servicename: "Google ads",
      icons: <BsSearch />,
      data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      servicename: "Bing Ads",
      icons: <IoLocationSharp />,
      data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      servicename: "Ad Remarketing",
      icons: <SiGoogleanalytics />,
      data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      servicename: "Seo Services",
      icons: <ImLink />,
      data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      servicename: "Local Seo Service",
      icons: <AiOutlineAudit />,
      data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      servicename: "Content Marketing services",
      icons: <FaShoppingCart />,
      data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      servicename: "Full Suite Seo",
      icons: <BsSearch />,
      data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      servicename: "Full Suite Seo",
      icons: <BsSearch />,
      data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
  ];

  const toggle = (i) => {
    let b = i;
    if (b != a) {
      setnum(i);
      setmore(true);
    }
    if (b == a) {
      setmore(!more);
    }
    seta(i);
  };

  return (
    <div className={styles.seoEmailservicesmaindiv}>
      <span className={styles.seoEmailServicesheading}>
        OUR SERVICES INCLUDES....
      </span>

      <div className={styles.seoEmailservicesslider}>
        {arr1.map((items, i) => {
          return (
            <div className={styles.seoEmailServicesnames}>
              <IconContext.Provider
                value={{
                  className:
                    more && num == i
                      ? styles.seoEmailicons2
                      : styles.seoEmailicons1,
                }}
              >
                {items.icons}
              </IconContext.Provider>
              <div
                className={
                  more && num == i ? styles.seoEmailName2 : styles.seoEmailName
                }
              >
                {items.servicename}
              </div>
              {/* <div className="seoEmailuppericon">{<MdExpandLess onClick={()=>toggle(i)}/>}</div> */}
              <div
                className={
                  more && num == i
                    ? styles.seoEmailservicedata1
                    : styles.seoEmailservicedata
                }
                onClick={() => toggle(i)}
              >
                {items.data}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
