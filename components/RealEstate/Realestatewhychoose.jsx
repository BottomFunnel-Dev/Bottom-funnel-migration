import React from 'react'
import styles from "./Realestatewhychoose.module.css"

export const Realestatewhychoose = () => {
  
    const Realestatewhychoose = [
        {
            htxt:"100% Customization",
            icon:"Images/RealEstate/Icons/Rectangle 133.webp",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id bibendum lorem, ac ullamcorper neque. ",
        },

        {
            htxt:"Highly Scalable",
            icon:"Images/RealEstate/Icons/Rectangle 133-2.webp",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id bibendum lorem, ac ullamcorper neque. ",
        },

        {
            htxt:"Dedicated Support",
            icon:"Images/RealEstate/Icons/Rectangle 133-1.webp",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id bibendum lorem, ac ullamcorper neque. ",
        },

        {
            htxt:"Global Solution",
            icon:"Images/RealEstate/Icons/Rectangle 133-3.webp",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id bibendum lorem, ac ullamcorper neque. ",
        },

    ]

  return (
    <div className={styles.realestatewhychoosemainboxes}>
    <div className={styles.realestatewhychoosebottomtextbox}>
    <h1>Why Choose Bottom Funnel As your Real Estate App Development Company ?</h1>
    </div>
    <div className={styles.realestatewhychoosemapperbox}>{Realestatewhychoose.map((e)=>{
        return (
            <div className={styles.realestatewhychooseindivisuallybox}>
            <h3>{e.htxt}</h3>
            <div className={styles.whychooserealestateicon}><img src={e.icon} alt='icon' /></div>
            <p>{e.stxt}</p>
            </div>
        )
    })}</div>
    </div>
  )
}
