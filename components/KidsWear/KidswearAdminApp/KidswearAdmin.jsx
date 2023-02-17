import Image from 'next/image'
import React, { useState } from 'react'
import styles from "./KidswearAdmin.module.css"

export const KidswearAdmin = () => {

  const [imageChange, setImageChange] = useState("/Images/kidswearappservice/ha/Component 226.webp")
  const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
  }
    const kidswearadmindata=[
        {
            img:"/Images/kidswearappservice/ha/Component 226.webp",
            icon:"/Images/kidswearappservice/28-Dashboard.webp",
            htxt:" Dashboard Management",
            stxt:"Manage buyers , sellers & affiliates and streamline orders, right from our powerful dashboard.",
        },
       
        
        {
            img:"/Images/kidswearappservice/ha/manage users.webp",
            icon:"/Images/kidswearappservice/management 2.webp",
            htxt:"Manage Users",
            stxt:"Admin have the right to manage users and give the right roles as editor, manager or co-admin.",
        },


        {
            img:"/Images/kidswearappservice/ha/track sales.webp",
            icon:"/Images/kidswearappservice/business-and-finance 1.webp",
            htxt:"Track Sales",
            stxt:"Our ecommerce app solution will track every sale and even provide you monthly reports of it.",
        },


        {
            img:"/Images/kidswearappservice/ha/CMS.webp",
            icon:"/Images/kidswearappservice/Group.webp",
            htxt:"Content Management System",
            stxt:"This Feature will let you amend your content right from your dashboard without any hassel.",
        },

    ]





  return (
    <div className={styles.kidswearadminpannermainboxes}>
    <div className={styles.babyandkidswearleftboxes}>
    <div className={styles.babykidswearinnerimagebox}>
  
    <Image
    src={imageChange}
    alt={"images"}
    width={"0"}
    height={"0"}
    sizes={"100vw"}
    style={{ width: "100%", height: "100%" ,objectFit:"contain",padding:"10px"

  }}
        />
    
    </div>
    
    </div>
    <div className={styles.babyandkidswearrightboxes}>
    <div className={styles.babyandkidswearadminheading}><h2><span>Admin Pannel</span> Features</h2>
    
    <div className={styles.babyandkidswearadmindatamappingbox}>{kidswearadmindata.map((e)=>{
      return (
        <div className={styles.babykidswearadmindataindi}
        key={e.htxt} onMouseEnter={() => {
          handleImageChange(e.img)
      }}
        
        >
        <div className={styles.babykidsindiconbox}>
        <Image className='nextholidaysimagemovable'
        src={e.icon}
        alt={"next holiday"}
        width={"0"}
        height={"0"}
        sizes={"100vw"}
        style={{ width: "100%", height: "100%" ,objectFit:"contain", padding:"2px"
  
      }}
        />
        </div>
        <div className={styles.babykidswearmappingtextbox}>
        <h5>{e.htxt}</h5>
        <p>{e.stxt}</p>
        
        
        </div>
        
        </div>
      )
    })}</div>
    
    
    </div>
    
    
    
    </div>


    </div>
  )
}
