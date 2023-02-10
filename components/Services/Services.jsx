import React, { useState } from "react";
import styles from "./services.module.css";
import { FaMobileAlt } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  let arr = [
    {
      serviceIcon: <FaMobileAlt />,
      serviceName: "Mobile & Wearables",
      serviceImages: "/Images/services/mobile-services.webp",
      serviceTypes: [
        { serName: "IOS", path: "ios-development" },
        { serName: "ANDROID", path: "android-development" },
        { serName: "FLUTTER", path: "flutter-development" },
        { serName: "REACT NATIVE", path: "reactnative-development" },
      ],
      Link: "mobile-app-development",
      serviceDesc:
        "Experience the power of intuitive mobile and wearables apps. We specialize in cross-platform wearable app development that can be used on any digital device.",
    },
    {
      serviceIcon: <FaMobileAlt />,
      serviceName: "Web Development",
      serviceImages: "/Images/services/webdevelopment.webp",
      serviceTypes: [
        { serName: "MERN", path: "mernstack-development" },
        { serName: "MEAN", path: "meanstack-development" },
        { serName: "JAVA", path: "java-development" },
        { serName: "PHP", path: "php-development" },
        { serName: "PYTHON", path: "python-development" },
      ],
      Link: "web-development",
      serviceDesc: `Own your market with a mobile app from Web Development! Our team of experts will help you build your next big thing with the
         latest in mobile app technology.`,
    },
    {
      serviceIcon: <FaMobileAlt />,
      serviceName: "Digital Marketing",
      serviceImages: "/Images/services/digital.webp",
      serviceTypes: [
        { serName: "SEO", path: "seo-services" },
        { serName: "PPC", path: "seo-ppc" },
        { serName: "SEM", path: "seo-sem" },
        { serName: "LOCALSEO", path: "local-seo" },
        { serName: "GUEST POSTING", path: "seo-guest-post" },
      ],
      Link: "Digital-marketing",
      serviceDesc: `Unleash the power of your brand with our digital marketing services. Get more customers and revenue with SEOs, social media,
         and email marketing from the experts.`,
    },
    {
      serviceIcon: <FaMobileAlt />,
      serviceName: "Cloud Services",
      serviceImages: "/Images/services/cloud-service.webp",
      serviceTypes: [
        { serName: "AWS", path: "" },
        { serName: "GCP", path: "" },
        { serName: "AZURE", path: "" },
        { serName: "VULTR", path: "" },
        { serName: "CLOUDFARE", path: "" },
      ],
      Link: "cloud",
      serviceDesc: `We provide you a suite of cloud services for modern and data-intensive applications, with custombuilt infrastructure and 
        leading tools & services.`,
    },
    {
      serviceIcon: <FaMobileAlt />,
      serviceName: "Software Product Development",
      serviceImages: "/Images/services/machine-learning.webp",
      serviceTypes: [
        { serName: "IOT", path: "internet-of-things" },
        { serName: "AI", path: "artificial-inteligence" },
        { serName: "ML", path: "machine-learning" },
        { serName: "BLOCKCHAIN", path: "block-chain" },
        { serName: "DATA SCIENCE", path: "data-science" },
      ],
      Link: "Products",
      serviceDesc: `You need software that can scale with your company's needs and work as hard as you do, it's time to let us help you with 
        product development.`,
    },
    {
      serviceIcon: <FaMobileAlt />,
      serviceName: "Salesforce Development",
      serviceImages: "/Images/services/salesforce.webp",
      serviceTypes: [
        { serName: "QUIP", path: "" },
        { serName: "NFT CLOUD", path: "" },
        { serName: "TABLEAU", path: "" },
        { serName: "CRM ANALYTICS", path: "" },
      ],
      Link: "salesforce",
      serviceDesc: `Want to grow your business with salesforce development? We're your one-stop-shop for all of your Salesforce needs! Automate
         and integrate your Salesforce with the help of our experts.`,
    },
  ];

  return (
    <div className={styles.mainService}>
      <div className={styles.serviceIntro}>
        <Image
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
          src="/Images/services/service.webp"
          alt="image"
        />
        <div>
          <h1>Our Services</h1>
          <p>
            Our Services will provide an aggressive edge to your business. We
            are committed to serving your business needs by utilizing
            cutting-edge marketing technologies and strategies that are designed
            to increase visibility, engagement and conversion. Our approach is
            based on the belief that a strategic digital marketing plan will
            result in more sales for your business.
          </p>
          <button>Explore Our All Services</button>
        </div>
      </div>

      <div className={styles.services}>
        {arr.map((item, i) => (
          <div key={i}>
            <div className={styles.serviceHeadingFullPart}>
              <div className={styles.serviceHeading}>
                <h4>{item.serviceName}</h4>
                <div className={styles.vectorImage}>
                  <Image
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    src={item.serviceImages}
                    alt="image"
                  />
                </div>
              </div>
              <div
                className={styles.supportableDevices}
                style={{ textDecoration: "none" }}
              >
                {item.serviceTypes.map((element, index) => (
                  <Link href={element.path} key={index}>
                    <li>{element.serName}</li>
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.serviceDescriptionVisible}>
              <p>{item.serviceDesc}</p>
              <p onClick={() => {}}>READ MORE</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
