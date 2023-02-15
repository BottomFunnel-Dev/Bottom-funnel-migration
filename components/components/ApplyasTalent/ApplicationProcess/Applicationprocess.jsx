import React from 'react'
import styles from "./Applicationprocess.module.css"
export const Applicationprocess = () => {
 
    const processdata=[
        
        {
htxt:"Fill the Application Form",
stxt:"As soon as you fill the form we'll assign you a dedicated recruiter who will guide you throughout the application process.",
icon:"Images/applyastalent/1.webp"
},

{
    htxt:"Take the Assesment Test",
    stxt:"As soon as you fill the form we'll assign you a dedicated recruiter who will guide you throughout the application process.",
    icon:"Images/applyastalent/2.webp",
    },

    {
htxt:"We onboard",
stxt:"As soon as you fill the form we'll assign you a dedicated recruiter who will guide you throughout the application process.",
icon:"Images/applyastalent/3.webp"
},

{
    htxt:"We Matchmake",
    stxt:"As soon as you fill the form we'll assign you a dedicated recruiter who will guide you throughout the application process.",
    icon:"Images/applyastalent/4.webp"
    },

    ]


  return (


    <div className={styles.applicationprocessmainboxes}>
    <h1>Application Process</h1>
    <div className={styles.applicationprocessmappingdata}>{processdata.map((e)=>{
return (
    <div>
    
    <div><h4>{e.htxt}</h4>
    <p>{e.stxt}</p></div>
  <div className={styles.applicationprocesshireatalentimagebox}><img src={e.icon} alt="images" /></div>
    </div>
)
    })}</div>
    
    </div>
  )
}
