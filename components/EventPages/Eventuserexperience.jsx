import Image from 'next/image'
import React, { useState } from 'react'
import styles from "./Eventuserexperience.module.css"


export const Eventuserexperience = () => {

    const [imageChange, setImageChange] = useState("/Images/Event page/User application/ha/Group 1000002735.webp")


    const handleImageChange = (imagepath) => {
       setImageChange(() => imagepath)
       
     }

    const eventuserexperiencedata = [
        {
            icon:"/Images/Event page/icons/ha/checkmark.webp",
            htxt:"Easy on-boarding",
            stxt:"Nunc rhoncus fermentum neque ut scelerisque. Aenean vitae ultrices odio, sodales maximus erat. Etiam nibh arcu, eleifend ac gravida eu, viverra nec ante. Aliquam varius lacus vitae tempus efficitur. Nullam sed porta nibh. Integer et lorem molestie, aliquam neque sit amet, tincidunt. ",
            image:"/Images/Event page/User application/ha/Group 1000002735.webp",
        },

        {
            icon:"/Images/Event page/icons/ha/checkmark.webp",
            htxt:"See all events",
            stxt:"Nunc rhoncus fermentum neque ut scelerisque. Aenean vitae ultrices odio, sodales maximus erat. Etiam nibh arcu, eleifend ac gravida eu, viverra nec ante. Aliquam varius lacus vitae tempus efficitur. Nullam sed porta nibh. Integer et lorem molestie, aliquam neque sit amet, tincidunt. ",
            image:"/Images/Event page/User application/ha/Group 1000002734.webp",
        },

        {
            icon:"/Images/Event page/icons/ha/checkmark.webp",
            htxt:"Event details",
            stxt:"Nunc rhoncus fermentum neque ut scelerisque. Aenean vitae ultrices odio, sodales maximus erat. Etiam nibh arcu, eleifend ac gravida eu, viverra nec ante. Aliquam varius lacus vitae tempus efficitur. Nullam sed porta nibh. Integer et lorem molestie, aliquam neque sit amet, tincidunt. ",
            image:"/Images/Event page/User application/ha/Group 1000002708.webp",
        },

        {
            icon:"/Images/Event page/icons/ha/checkmark.webp",
            htxt:"Notifications",
            stxt:"Nunc rhoncus fermentum neque ut scelerisque. Aenean vitae ultrices odio, sodales maximus erat. Etiam nibh arcu, eleifend ac gravida eu, viverra nec ante. Aliquam varius lacus vitae tempus efficitur. Nullam sed porta nibh. Integer et lorem molestie, aliquam neque sit amet, tincidunt. ",
            image:"/Images/Event page/User application/ha/Component 205.webp",
        },
    ]


  return (
    <div className={styles.userexpeventapptxtbox}>
    <h1>Features of Event App Development</h1>
    <h3><span>User Experience</span></h3>
    <div className={styles.eventuserexperiencemainboxes}>
    <div className={styles.userexperienceleftbox}>{eventuserexperiencedata.map((e)=>{
        return (
            <div className={styles.eventuserexperiencemappingdataindi}
            key={e.htxt} onMouseEnter={() => {
                handleImageChange(e.image)
              }}
              
            
            >
            <div className={styles.eventuserexperienceindiflexforiconhtxt}>
            <div className={styles.eventuserexpimgindi}>
            <Image
          src={e.icon}
          alt={"images"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain",padding:"10px" }}
        />
            
            </div>
            <div className={styles.eventuserexphtxtmappingdata}><h5>{e.htxt}</h5></div>
            </div>
            <p>{e.stxt}</p>
            </div>
        )
    })}
    
    
    
    </div>
    <div className={styles.userexperiencerightbox}>
    <div className={styles.userexperiencerightboximagechanges}>
    <Image
    src={imageChange}
    alt={"images"}
    width={"0"}
    height={"0"}
    sizes={"100vw"}
    style={{ width: "100%", height: "100%", objectFit:"contain",padding:"10px" }}
        />
    
    </div>
    
    </div>
    
    
    </div>

    </div>
  )
}
