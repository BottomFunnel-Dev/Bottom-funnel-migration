import Image from 'next/image'
import React from 'react'
import styles from "./PoliticsFramework.module.css"

export const PoliticsFramework = () => {

    const politicalframeworkdata = [
        {
            icon:"/Images/politics Re/.webp",
            htxt:"Cross-platfom solution",

        },

        {
            icon:"/Images/politics Re/.webp",
            htxt:"Blockchain",

        },

        {
            icon:"/Images/politics Re/.webp",
            htxt:"IOT",

        },

        {
            icon:"/Images/politics Re/.webp",
            htxt:"Artificial Intelligent",

        },
    ]

  return (
    <div className={styles.politicsframeworkmainboxes}>
    <h2>Tools & Frameworks that we use to make your political app engaging</h2>
    <p>The journey of your political campaign aoo to reach and engage millions of cinstituents in real time needs a powerful set of technologies to make it happen.Our team of Political App Developers uses just the right combination of technologies to make it all happen.
    Our Team of Political App Developers uses just the right combination of technologies to make it all happen.
    </p>
    <div className={styles.politicsframeworkdatamapping}>{politicalframeworkdata.map((e)=>{
        return (
            <div className={styles.politicsframeworkdataindi}>
            
            <Image
          src={e.icon}
          alt={"icon"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
            <h4>{e.htxt}</h4>
            
            </div>
        )
    })}</div>
    </div>
  )
}
