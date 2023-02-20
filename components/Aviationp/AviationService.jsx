import React from 'react'
import styles from "./AviationService.module.css"
import Image from 'next/image';

export default function AviationService () {
    const servicecard = [
        {
          cardtitle: "Airplane parking reservation System",
          CardDescription:
            "our expert group of aviation consultants assists you in designing a robust custom-made airplane parking reservation system. The Softwere service Offers special billing and costing processes for arriving at the appropriate airplane parking charges.",
          cardIcon: "/Images/aviation/Newpage/icons/Rectangle 34624101.webp",
        },
    
        {
          cardtitle: "Departure Control System",
          CardDescription:
            "Appinventiv's custom Departure Control System (DCS) services have got you covered for automated passenger check- ins, APIS capture & submission, sale of services, boarding, and post-flight communications. Specifically designed for airports charter airlines, low-cost carriers.",
          cardIcon: "/Images/aviation/Newpage/icons/Rectangle 34624101-1.webp",
        },
    
        {
          cardtitle: "Avionics Risk Management",
          CardDescription:
            "Our Experts can help you integrates a risk management system into your airline management softwere development lifecycle. The system allows you to identify the potential hazards and implement a control risk management workflow that eliminates mistales or manual errors at the earliest.",
          cardIcon: "/Images/aviation/Newpage/icons/Rectangle 34624101-2.webp",
        },
    
        {
          cardtitle: "Crew Management Service",
          CardDescription:
            "As a leading aviation consulting company, our team also builds avaition softwere services specifically designed for improvising your crew management process,ensuring that all your team members are on the right track.If You are struggling with aircraft scheduling, crew tracking,or managing passenger logistics.",
          cardIcon: "/Images/aviation/Newpage/icons/Rectangle 34624101-3.webp",
        },
      ];

  return (
    <div className={styles.AviationServicemain}>
        <div className={styles.AviationServicetext}>
            <h2>Airline Software Developement Service We Offer</h2>
            <p>Being one of the pioneering aviation consulting firms,we offer best-in-class aviation software developement sevice that ensure complete efficiency and precision in your business operation.</p>
        </div>
        <div className={styles.servicesFeatures}>
        {servicecard.map((item, index) => (
          <div className={styles.serviceCards}>
            <div className={styles.servicecardIcon}>
              {" "}
              <Image src={item.cardIcon}
                alt={"images"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className={styles.serviceContent}>
              <h5> {item.cardtitle} </h5>
              <p> {item.CardDescription} </p>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}
