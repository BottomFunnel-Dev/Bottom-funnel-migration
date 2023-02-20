import React from "react";
import styles from "./SaasApplicationDevelopment.module.css";
import Image from "next/image";

export const SaasApplicationDevelopment = () => {
  return (
    <>
      <div className={styles.saasAppDevMainDiv}>
          <div className={styles.saasAppDevDataDiv}>
            <div className={styles.saasAppData}>
            <p>Human Resources</p>
            <h1>
                Custom SaaS Application <br/>
                Development for HRMS Company
            </h1>
            <p>
                The founders of a SaaS company came to us with an idea and some rough <br/>
                written requirements for an HRMS System. Our design team created mockups for their 78-screens <br/>
                responsive custom SaaS application, and our SaaS development team delivered the first-version product within 4-months.The MVP we built helped <br/>
                the founders raise seed funding and they retained members of our <br/>
                engineering team for 18 months to build out features on their SaaS prroduct <br/>
                roadmap.This HRMS startup recently sold for $20M USD.
            </p>
            <button>Contact Us</button>
            </div>
            <div className={styles.saasAppDataImage}>
              <Image
                  src={"/Images/saasPhotos/SaasImages/screen4.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
          </div>

          <div className={styles.saasAppDevDataDiv1}>
            <div className={styles.saasAppDataImage}>
            <Image
                src={"/Images/saasPhotos/SaasImages/screen3.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                />
            </div>
            <div className={styles.saasAppData1}>
            <p>Sourcing and Procurement</p>
            <h1>
                First-version SaaS App Development<br/>
                for Automation Company
            </h1>
            <p>
                Manufacturing Source Parts from many suppliers and large manufactures<br/>
                have teams dedicated to obtaining the best price for each part.The founders of<br/>
                PartAnalytics tasked our team to design their end-to-end SaaS application that automates manual research,data entry,and cost savings calculations.Over 4+<br/>
                Years, our team was a reliable partner to PartAnalytics,helping them create an<br/>
                MVP,first-version product,and many other major and minor feature additions.<br/>
                The SaaS applictions we developed enabled PartAnalytics to raise multiple<br/>
                rounds of funding and close deals with fortune 500 companies.
            </p>
            <button>Contact Us</button>
            </div>
          </div>

          <div className={styles.saasAppDevDataDiv}>
            <div className={styles.saasAppData}>
            <p>Automotive</p>
            <h1>
                Unified SaaS Application Development <br/>
                for Automotive Company
            </h1>
            <p>
                An electric vehicle (EV) manufacturer with a connected car fleet designed to bring the<br/>
                "Future of Mobility" to the world lacked the SaaS software development skills to create<br/>
                a unified platform to leverage each vehicle's data-sharing capabilites.The<br/>
                automotive company retained our team to create a scalable cloud database to fetch<br/>
                and store data from the fleet of connected vehicles.Our team also designed and<br/>
                and developed companion web and mobile applications for fleet management, car-sharing<br/>
                ride-hailing, and more.For 29 months,our developers crafted a complex SaaS application for this innovative automotive company.
            </p>
            <button>Learn More</button>
            </div>
            <div className={styles.saasAppDataImage}>
              <Image
                  src={"/Images/saasPhotos/SaasImages/screen1.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
          </div>

          <div className={styles.saasAppDevDataDiv1}>
            <div className={styles.saasAppDataImage}>
            <Image
                src={"/Images/saasPhotos/SaasImages/screen2.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                />
            </div>
            <div className={styles.saasAppData1}>
            <p>Health Care</p>
            <h1>
                HIPAA Compliant SaaS Application<br/>
                Development for Telemedicine Company
            </h1>
            <p>
                With the onset of the coronavirus pandemic, virtual medical consultations and<br/>
                therapy sessions became the safest and sometimes the only way to provide<br/>
                healthcare services.Nova Telehealth seelcted our SaaS application<br/>
                development company to create a secure, HIPAA-compliant,patient-centric<br/>
                web application to facilitate telemedicine consultations via web and mobile<br/>
                devices.Patients simply click on a URL and enter their dcotor's virtual waiting<br/>
                room without the need to download an app or create an account.Nova<br/>
                Telehealth successfully launched its SaaS product and is growing its market<br/>
                share with hospitals and clinics.
            </p>
            <button>Contact Us</button>
            </div>
          </div>
      </div>
    </>
  );
};
