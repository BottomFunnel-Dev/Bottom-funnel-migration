import React from 'react'
import { useState } from 'react'
import styles from "./IceCreamAdminPannel.module.css"

export const IceCreamAdminPannel = () => {

    const [imageChange,setImageChange] =useState("Images/icecreamchanges/Admin panel/Dashboard Screen.png")
    const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
   
   }
  
    const icecreamadmindata = [
        {
            image:"Images/icecreamchanges/Admin panel/Dashboard Screen.png",
            icon:"Images/icecreamchanges/icons/prototyping-5.png",
            headertext:"Dashboard",
            paragraph:"Build an admin panel for your web app or backend panel with Ready Dashboard.It’s built sophisticatedly with a clean and colorful user interface and modern web building methods and technology. ",

        },
       
        
        {
            image:"Images/icecreamchanges/Admin panel/Analytics Screen.png",
            icon:"Images/icecreamchanges/icons/prototyping-7.png",
            headertext:"Reports & Analytics",
            paragraph:"A report allows you to summarize and chart record data. A dashboard can present summary reports on a single page. It is a collection of Reports.Here is my next exploration of Mersy. Hope you guys like it Cheers! ",

        },


        {
            image:"Images/icecreamchanges/Admin panel/review Screen.png",
            icon:"Images/icecreamchanges/icons/prototyping-6.png",
            headertext:"Review Dashboard",
            paragraph:"This design is about managing customer reviews. The business owner can see all reviews, and average ratings and give any customer instant feedback using this dashboard. ",

        },

        {
            image:"Images/icecreamchanges/Admin panel/order list  Screen.png",
            icon:"Images/icecreamchanges/icons/prototyping-10.png",
            headertext:"Order Management",
            paragraph:"Customer relationship management (CRM) is a technology for managing all your company's relationships and interactions with customers and potential customers.",

        },
    ]


  return (
    <div className={styles.icecreamadminpannelmainboxes}>
    <div className={styles.icecreamadminpannelmainboxsometextupper}>
    <h2>Admin Pannel</h2>
    </div>
    <div className={styles.icecreamadminpannelmainflexboxclass}>
    <div className={styles.icecreamadminpannelleftbox}>{icecreamadmindata.map((e)=>{
        return (
            <div className={styles.icecreamadminpannelmapperboxindivisyal}
            key={e.htxt} onMouseEnter={() => {
            
                handleImageChange(e.image)
            }}
            
            >
            <div className={styles.icecreamadminpannelmapperboxindivisyalicon}>
            <img src={e.icon} alt="" />
            </div>
            <div className={styles.icecreamadminpannelmapperboxindivisyaltxt}>
            <h4>{e.headertext}</h4>
            <p>{e.paragraph}</p>
            </div>
            </div>
        )
    })}</div>
    <div className={styles.icecreamadminpannelrightbox}>
    <div className={styles.icecreamadminpannelrightboxinnerimage}>
    <img src={imageChange} alt='' />
    </div>
    </div>
    </div>
    </div>
  )
}
