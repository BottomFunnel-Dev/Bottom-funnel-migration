import React from 'react'
import styles from "./AviationdevProcess.module.css"
import Image from 'next/image';

export default function AviationDevProcess () {
    const Processcard = [
        {
          cardtitle: "Requirement Analysis",
          cardIcon: "/Images/aviation/Newpage/icons/checkmark.webp",
        },
    
        {
          cardtitle: "Software Developement",
          cardIcon: "/Images/aviation/Newpage/icons/checkmark-1.webp",
        },
    
        {
          cardtitle: "Testing & Deployment",
          cardIcon: "/Images/aviation/Newpage/icons/checkmark-2.webp",
        },
    
        {
          cardtitle: "Post Launch maintainance",
          cardIcon: "/Images/aviation/Newpage/icons/checkmark-3.webp",
        },
      ];

  return (
    <div className={styles.AviationProcessmain}>
        <div className={styles.AviationProcesstext}>
            <h2>Custom Aviation Software Developement Process Made Simple</h2>
            <p>As a leading aviation consultancy Service firm, Bottom Funnel ensures excellence at each stage of the software developement process.
                Our team follows devOps or agile methodology as per the business needs of the client and meets all the deliverables successfully.</p>
        </div>
        <div className={styles.ProcessFeatures}>
        {Processcard.map((item, index) => (
          <div className={styles.ProcesCards}>
            <div className={styles.ProcesscardIcon}>
              <Image src={item.cardIcon}
                alt={"images"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className={styles.ProcessContent}>
              <h5> {item.cardtitle} </h5>
            </div>
          </div>
        ))}
        </div>

        <div>      
            <div className={styles.AviationProcesstexts}>
                <h2>
                    Why Hire Us as Your Airline Software Developement Partner?
                </h2>
                <p>At appinventiv, We have the experties, experience and resources to implement cutting age aviation software developement solution by utilizing inventive Technologies. </p>
            </div>
            <div className={styles.AviationLowertext}>
                <ol>
                <li>Actionable industy insight</li>
                <li>Extensive AI and ML</li>
                <li>Data Security</li>
                <li>Compliance with Aviation industry Regulations</li>
                <li>Scalability</li>
                <li>Experties in the latest Aviation software developement tools</li>
                </ol>
            </div>

        </div>    
    </div>
  )
};
