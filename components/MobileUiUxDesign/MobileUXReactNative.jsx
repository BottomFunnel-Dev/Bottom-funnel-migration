import React from 'react'
import styles from "./MobileUXReactNative.module.css"

export const MobileUXReactNative = () => {

const mobileuxrectnativedata= [
    {
        icon:"Images/MobileUIUXDesign/Icons/platform 1.png",
        htxt:"Cross-Platform App Development",
        stxt:"We offer everything you need to build an amazing app from scratch including UI/UX design, mobile app development, and cross-platform compatibility.",

    },
 
    
    {
        icon:"Images/MobileUIUXDesign/Icons/approved 1.png",
        htxt:"Hire Developers",
        stxt:"Our developers have vast experience in web application development and this has helped us build large-scale applications that are robust, stable, secure, and error-free.",

    },


    {
        icon:"Images/MobileUIUXDesign/Icons/app-development (2) 1.png",
        htxt:"Industry-Specific Solutions",
        stxt:"With our team's years of experience in building apps for various verticals and industries, we know how to identify the unique requirements of each business and translate that into an app that's sure to be effective.",

    },

    {
        icon:"Images/MobileUIUXDesign/Icons/technical-support 1.png",
        htxt:"End-to-End Support and Maintenance",
        stxt:"We offers end-to-end support and maintenance for your app. So not only do they develop it for you, but also help optimise its performance and user experience.end-to-end support and maintenance for your app. So not only do end.",

    },
]

  return (
    <div className={styles.mobileuxreactnativemainbox}>
    <div className={styles.mobileuxreactnativeleftbox}>{mobileuxrectnativedata.map((e)=>{
        return (
            <div className={styles.mobileuxreactnativeleftboxindivisalyy}>
            <div className={styles.mobileuxuireacthtxtandimageflex}>
            <div className={styles.mobileuxuireacthtxtandimageflexiconindi}><img src={e.icon} alt='image' /></div>
            <div><h2>{e.htxt}</h2></div>
            </div>
            <div className={styles.mobileuxuireacthtxtandimageflexparagraph}><p>{e.stxt}</p></div>
            </div>
        )
    })}</div>


    <div className={styles.mobileuxreactnativerightbox}>
    <h1>React Native App Development Expertise</h1>
    <p>Thanks for considering our company, Bottom funnel, for your React Native app development needs! We have a wealth of experience in developing high-quality apps using React Native, and we're confident that we can deliver the same level of quality for your project.
    When it comes to React Native app development, we know what it takes to produce a great product. We have a team of experienced developers who are well-versed in all aspects of the React Native platform. With their expertise, we're confident that we can deliver a top-notch product that meets your specific needs and requirements.</p>
    </div>
    
    
    </div>
  )
}
