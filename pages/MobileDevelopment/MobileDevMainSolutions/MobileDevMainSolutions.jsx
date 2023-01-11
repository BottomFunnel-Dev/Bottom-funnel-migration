import React from 'react'
import styles from "./MobileDevMainSolutions.module.css"

export const MobileDevMainSolutions = () => {


  const mobiledevmainsolutionsdata = [
    {
      img:"Images/MobileDevMain/prototyping.png",
      htxt:"Custom Mobile App Development",
      stxt:"There's no denying that custom mobile app development is one of the most exciting things you can do with your business. Not only does it give you a chance to create a truly unique experience for your customers, but it also allows you to tap into new markets and reach new audiences."
    },

    {
      img:"Images/MobileDevMain/code.png",
      htxt:"Mobile App Prototyping",
      stxt:"Mobile app prototyping is an essential part of the app development process. It allows you to test out your ideas and see how they work in a real-world setting. Prototyping also helps you to identify any potential problems with your app before it goes live."
    },

    {
      img:"Images/MobileDevMain/ui.png",
      htxt:"Mobile App UI/UX Design",
      stxt:"Mobile app UI/UX design is a hot topic in the tech world right now. With so many new apps being released every day, it's important for developers to create unique and user-friendly designs that will help their app stand out from the rest."
    },

    {
      img:"Images/MobileDevMain/solutions.png",
      htxt:"Mobile App Third Party Integration",
      stxt:"The mobile app industry is booming and there is no signs of it slowing down anytime soon. With that said, more and more businesses are looking to get in on the action by creating their own mobile apps. However, many businesses don't have the in-house expertise or resources to develop a high-quality app."
    },

  ]



  return (
    <div className={styles.mobiledevmainsolutionmainbox}>
    <div className={styles.mobiledevmainsolutionmappingbox}>{mobiledevmainsolutionsdata.map((e)=>{
      return ( 
        <div className={styles.mobiledevmainsolutionmappingboxindivisually}>
        <div className={styles.mobilesolutionindivisuallyimagbox}><img src={e.img} alt="image" /></div>
        <div className={styles.mobilesolutionindivisualtxtbox}>
        <h4>{e.htxt}</h4>
        <p>{e.stxt}</p>
        </div>
        
        
        </div>
      )
    })}</div>
    
    </div>
  )
}

