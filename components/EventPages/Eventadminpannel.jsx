import Image from 'next/image'
import React, { useState } from 'react'
import styles from "./Eventadminpannel.module.css"


export const Eventadminpannel = () => {

    const [imageChange, setImageChange] = useState("/Images/Event page/Admin panel screens/ha/Frame 1000002391.webp")


    const handleImageChange = (imagepath) => {
       setImageChange(() => imagepath)
       
     }

    const eventadminpanneldata = [
        {
            icon:"/Images/Event page/icons/ha/checkmark.webp",
            htxt:"Real-Time Statics",
            stxt:"Nunc rhoncus fermentum neque ut scelerisque. Aenean vitae ultrices odio, sodales maximus erat. Etiam nibh arcu, eleifend ac gravida eu, viverra nec ante. Aliquam varius lacus vitae tempus efficitur. Nullam sed porta nibh. Integer et lorem molestie, aliquam neque sit amet, tincidunt.",
            images:"/Images/Event page/Admin panel screens/ha/Frame 1000002391.webp",

        },

        {
            icon:"/Images/Event page/icons/ha/checkmark.webp",
            htxt:"Attendee List",
            stxt:"Nunc rhoncus fermentum neque ut scelerisque. Aenean vitae ultrices odio, sodales maximus erat. Etiam nibh arcu, eleifend ac gravida eu, viverra nec ante. Aliquam varius lacus vitae tempus efficitur. Nullam sed porta nibh. Integer et lorem molestie, aliquam neque sit amet, tincidunt.",
            images:"/Images/Event page/Admin panel screens/ha/Schedule List.webp",

        },

        {
            icon:"/Images/Event page/icons/ha/checkmark.webp",
            htxt:"Create Events",
            stxt:"Nunc rhoncus fermentum neque ut scelerisque. Aenean vitae ultrices odio, sodales maximus erat. Etiam nibh arcu, eleifend ac gravida eu, viverra nec ante. Aliquam varius lacus vitae tempus efficitur. Nullam sed porta nibh. Integer et lorem molestie, aliquam neque sit amet, tincidunt.",
            images:"/Images/Event page/Admin panel screens/ha/Create event.webp",

        },

        {
            icon:"/Images/Event page/icons/ha/checkmark.webp",
            htxt:"Schedule Events",
            stxt:"Nunc rhoncus fermentum neque ut scelerisque. Aenean vitae ultrices odio, sodales maximus erat. Etiam nibh arcu, eleifend ac gravida eu, viverra nec ante. Aliquam varius lacus vitae tempus efficitur. Nullam sed porta nibh. Integer et lorem molestie, aliquam neque sit amet, tincidunt.",
            images:"/Images/Event page/Admin panel screens/ha/Schedule List.webp",

        },

    ]


  return (
    <div className={styles.eventadminpannelmainboxes}>
    <div className={styles.eventadminpannelleftboxes}>
    <Image
          src={imageChange}
          alt={"admin pannel"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" ,objectFit:"contain" , padding:"10px" }}
        />
    </div>

    <div className={styles.eventadminpannelrightboxes}>
    <h2>Admin Pannel</h2>
    <div className={styles.eventadminpanneldatamapping}>{eventadminpanneldata.map((e)=>{
        return (
            <div className={styles.eventadminpanneldatamappingindi}
            
            key={e.htxt} onMouseEnter={() => {
                handleImageChange(e.images)
              }}
            
            >
            <div className={styles.eventadminpanneldataimgandhtxtbox}>
            <div className={styles.eventadminpanneldataimg}>
            
            <Image
          src={e.icon}
          alt={"icon"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain" ,padding:"10px" }}
        />
            
            </div>
            <div className={styles.eventadminpanneltxtbox}> <h5>{e.htxt}</h5></div>
            </div>
            <p>{e.stxt}</p>
            </div>
        )
    })}</div>
    </div>
    
    
    </div>
  )
}
