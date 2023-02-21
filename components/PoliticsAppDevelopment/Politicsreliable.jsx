import Image from 'next/image'
import React from 'react'
import styles from "./Politicsreliable.module.css"

export const Politicsreliable = () => {

    const politicsreliabledata = [
        {
            htxt:"Real-time updates",
            stxt:"They dynamic content updation part of our political app development services gives you the facility to constantly update the constituents of everything new happeniing in your political party in real-time. ",
            icon:"/Images/politics Re/Rectangle 34624135.webp",

        },

        {
            htxt:"Volunteer Management",
            stxt:"We gelp you bring all the volunteer working towards the common goal of making your party win the elections, in one place. we add features like gamification and rewards system in your app to ensure complete volunteer engagement within the app.",
            icon:"/Images/politics Re/Rectangle 34624135-1.webp",

        },
        
        {
            htxt:"Donations and sponsorship Management",
            stxt:"With the help of certified and encrypted payment modules. we ensure that the donors and sponsors feel no difficulty and inhibitions in sending money in your account to extend support to your party.",
            icon:"/Images/politics Re/Rectangle 34624135-2.webp",

        },

        {
            htxt:"Social Connection",
            stxt:"Our political app development services have social media connection at the centre of system.Desugned at the back of understanding that the future of the success of all political campaigns lies in the social media engagement levels, our social connection helps you take the utmost benifits of your political apps.",
            icon:"/Images/politics Re/Rectangle 34624135-3.webp",

        },

        {
            htxt:"Live feeds",
            stxt:"Our political app development services have social media connection at the centre of system.Designed at the back of the understanding that the future of success if all political camoaigns lies in the social media engagement levels, our social media engagement levels, our social connection helps you take the utmost benefit if your political apps.",
            icon:"/Images/politics Re/Rectangle 34624135-4.webp",

        },

        {
            htxt:"Content Management",
            stxt:"We help political parties develop visual and text content that brings them much closer to the millennial constituents around the nation.",
            icon:"/Images/politics Re/Rectangle 34624135-5.webp",

        },

    ]


  return (
    <div className={styles.politicsreliablemainboxes}>
    <h2>What makes us Reliable</h2>
    <p>Why have political parties embedded their trust in us and made us the top political app development company in India and the USA?</p>

    <div className={styles.politicalreliabledatamapping}>{politicsreliabledata.map((e)=>{
        return (
            <div className={styles.politicsreliabledataindi}>
            
            <div className={styles.politicalreliableindiflexboximgandtxt}>
            <div className={styles.politicsreliabletxthbox}><h5>{e.htxt}</h5></div>
            <div className={styles.politicsreliableiconbox}>
            <Image
          src={e.icon}
          alt={"icon"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain",  }}
        />
            
            </div>
            </div>
            <p>{e.stxt}</p>
            
            </div>
        )
    })}</div>
    
    
    </div>
  )
}
