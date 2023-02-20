import Image from 'next/image'
import React from 'react'
import styles from "./Eventbest.module.css"

export const Eventbest = () => {

    const eventbestdata = [
        {
            icon:"/Images/Event page/icons/ha/Group 1000002688.webp", 
            htxt:"Conference Event Mobile Apps",
            stxt:"We make high-end conference Event Apps that help you to make your conferences more professional and insightful.",

        },

        {
            icon:"/Images/Event page/icons/ha/Group 1000002690.webp", 
            htxt:"Enterprise Event Apps",
            stxt:"we not only provide startup services but also Enterprise Event Apps development for the events like trade shows, conference, meetings.",

        },

        {
            icon:"/Images/Event page/icons/ha/Group 1000002689-1.webp", 
            htxt:"Healthcare & Education Event Apps",
            stxt:"Healthcare Event Mobile apps will make your healtcare & education events more convient by saving tons on printing and easy registration scanning.",

        },

        {
            icon:"/Images/Event page/icons/ha/Group 1000002689-3.webp", 
            htxt:"University Event Apps",
            stxt:"Get a developed university Event App and share your documents and notes easily and  echances interactivity with inter-attendedd massaging.",

        },


        {
            icon:"/Images/Event page/icons/ha/Group 1000002689-2.webp", 
            htxt:"Meeting Event Apps",
            stxt:"This Meeting Event App will help you to get notifications with text announcements.It also notifies about the session's time changes as well as other urjent information with in a time.",

        },


        {
            icon:"/Images/Event page/icons/ha/Group 1000002689-3.webp", 
            htxt:"Trade Show Apps",
            stxt:"At mobulous, we also develop high-end and the most affordable Trade show mobile apps.",

        },

    ]


  return (
    <div className={styles.eventbestmainboxes}>
    <div className={styles.eventbestheadingtxtbox}>
    <h1>Our Best Event App Development Services</h1>

    <div className={styles.eventbestdatamapping}>{eventbestdata.map((e)=>{
        return ( 
            <div className={styles.eventbestdatamappingindi}>
            <div className={styles.eventbestdatatxtandicon}>
            <div className={styles.eventbestdataicon}>
            <Image
          src={e.icon}
          alt={"icon"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain" , padding:"5px" }}
        />
            </div>
            <div className={styles.eventbestdatatxt}><h5>{e.htxt}</h5></div>
            </div>
            <p>{e.stxt}</p>
            </div>
        )
    })}</div>
    </div>
    
    </div>
  )
}
