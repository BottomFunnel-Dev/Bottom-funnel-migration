import Image from 'next/image'
import React from 'react'
import styles from "./Eventwhychoose.module.css"


export const Eventwhychoose = () => {

    const whychooseusdata = [
        {
            icon:"/Images/Event page/icons/ha/Group 1000002700.webp",
            htxt:"Agile Development Process",
            stxt:"our expertise comes in handy.We understand the importance of a aligning stakeholders from various department, taking into account their unique perspective and expectations and working towards a common goal as per project timeline.",

        },

        {
            icon:"/Images/Event page/icons/ha/Group 1000002701.webp",
            htxt:"Data security and protection ",
            stxt:"Our experts know the ins and outs of logistics and transportation so you can rest assured that your data is safe.With our team of web developers on hand, we will work hard to create a stunning website that reflects your company's brand values perfectly.",

        },

        {
            icon:"/Images/Event page/icons/ha/Group 1000002702.webp",
            htxt:"Round-the-clock support",
            stxt:"We use state-of-the-art software and hardware to ensure high availability of service at all times. From automated tracking systems to GPS navigation tools, we have everything you need to run your business smoothly.",

        },

        {
            icon:"/Images/Event page/icons/ha/Group 1000002703.webp",
            htxt:"Quality Development",
            stxt:"Quality development is what you get with us. Our engineers have a deep understanding of the logistics and transportation industry, allowing us to build quality websites that will be easy for your users to navigate.",

        },

    ]

  return (
    <div className={styles.eventwhychooseusmainboxes}>
    <div className={styles.eventwhychooseusdatabox}>{whychooseusdata.map((e)=>{
        return (
            <div className={styles.eventwhychooseusindiboxes}>
            <div className={styles.eventwhychooseusiconbox}>
            <Image
          src={e.icon}
          alt={"icon"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%",objectFit:"contain" }}
        />
            </div>
            <div className={styles.eventwhychooseustxtboxes}>
            <h5>{e.htxt}</h5>
            <p>{e.stxt}</p>
            </div>
            
            
            </div>
        )
    })}</div>
    
    </div>
  )
}
