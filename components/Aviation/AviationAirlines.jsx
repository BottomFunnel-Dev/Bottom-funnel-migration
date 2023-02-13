import React from 'react'
import styles from "./AviationAirlines.module.css"

export default function AviationAirlines () {

    const aviationairlinesdata =[
        {
            logo:"Images/aviation/Frame-1.png" , 
            htxt:"Crew Management Software",
            stxt:"As a leading aviation consulting company, our team also builds avaition softwere solutions specifically designed for improvising your crew management process,ensuring that all your team members are on the right track.If You are struggling with aircraft scheduling, crew tracking,or managing passenger logistics,crew management softwere can help you affress such ussues,thus allowing you to manage your entire crew effectively.",
        },

        {
            logo:"Images/aviation/Frame-3.png" , 
            htxt:"Airplane Parking Reservation System",
            stxt:"our expert group of aviation consultants assists you in designing a robust cistom-made airplane parking reservation system.The Softwere Solution Offers special billing and costing processes for arriving at the appropriate airplane parking charges.Also the  airplane parking reservation modulehandles information like service class, accessible seats,piolet details,fuel costs,and others.",
        },

        {
            logo:"Images/aviation/Frame.png" , 
            htxt:"Airline Ticketing Services",
            stxt:"With the airline ticketing software solution, you can offer your customers robust and sustainable airline ticketing scheduling system and assists in managing tasks such as boarding pass printing, online payments and online tickting softwere solution,our experts utilize tools like c#, Xcode,NET,SQL,Server,etc",
        },


        {
            logo:"Images/aviation/Frame-2.png" , 
            htxt:"Avionics RiskManagement",
            stxt:"Our Experts can help you integrates a risk management system into your airline management softwere development lifecycle.The system allowsyou to identify potential hazards and implement a control risk management workflow that eliminates mistales or manual errors at the earliest.With an avionics risk management system you can considerably reduce the effortsto comply with risk-related requirements of aviation regulations.",
        },
    ]

  return (
    <div className={styles.aviationairlinesmainboxes}>
    <div className={styles.aviationairlinesupperboxamazing}>
    <div className={styles.aviationupperbox1}>
    <h1>7+</h1>
    <p>Years in industry</p>
    </div>
    <div className={styles.aviationupperbox1}>
    <h1>1000+</h1>
    <p>team of experts</p>
    
    </div>
    <div className={styles.aviationupperbox2}>
    <h1>99 %</h1>
    <p>customer satisfaction</p>
    
    </div>
    </div>

<div className={styles.avitaionairlinesagaintextonlytext}>
<h1><span className={styles.specialcolor}>Airline Software</span> Development Service We Offer</h1>
<p>One of the largest aviation software development 
services in India, we offer comprehensive services that 
ensure complete efficiency and precision in your operations. 
From developing custom-built solutions to maintaining existing 
systems, our team of experts has you covered from start to finish.

</p>
<div className={styles.datamappingindivisalboxairlineaviation}>{aviationairlinesdata.map((e)=>{
    return(
        <div className={styles.aviationairlinesdatamappingboxes}>
        <div className={styles.logoboxairlinesaviations}>
        <img src={e.logo} alt="logo" />
        </div>
        <div className={styles.aviationairlinesmappertextboxes}><h4>{e.htxt}</h4>
        <p>{e.stxt}</p>
        
        </div>
        
        </div>
    )
})}</div>




</div>



    
    
    </div>
  )
}

