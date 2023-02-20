import Image from 'next/image'
import React, { useState } from 'react'
import styles from "./Politicsadminpannel.module.css"


export const Politicsadminpannel = () => {

    const [imageChange, setImageChange] = useState("/Images/politics Re/Group 1000002417.webp")
    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
    }
    const politicsadminpanneldata = [
        {
            icon:"/Images/politics Re/checkmark.webp",
            htxt:"Dashboard Management",
            stxt:"Mauris tempus orci justo, eget tempor ipsum vehicula eu. Vivamus eget risus dolor. Sed non vestibulum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis a ultricies mauris. Vivamus consequat nisl vitae arcu accumsan, quis lobortis lorem eleifend. Integer a mattis quam.",
            img:"/Images/politics Re/Group 1000002417.webp",
        },

        {
            icon:"/Images/politics Re/checkmark.webp",
            htxt:"Manage Users",
            stxt:"Mauris tempus orci justo, eget tempor ipsum vehicula eu. Vivamus eget risus dolor. Sed non vestibulum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis a ultricies mauris. Vivamus consequat nisl vitae arcu accumsan, quis lobortis lorem eleifend. Integer a mattis quam.",
            img:"/Images/politics Re/Group 1000002417.webp",
        },
        
        {
            icon:"/Images/politics Re/checkmark.webp",
            htxt:"Manage Categories",
            stxt:"Mauris tempus orci justo, eget tempor ipsum vehicula eu. Vivamus eget risus dolor. Sed non vestibulum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis a ultricies mauris. Vivamus consequat nisl vitae arcu accumsan, quis lobortis lorem eleifend. Integer a mattis quam.",
            img:"/Images/politics Re/Group 1000002417.webp",
        },
        
        {
            icon:"/Images/politics Re/checkmark.webp",
            htxt:"Track News",
            stxt:"Mauris tempus orci justo, eget tempor ipsum vehicula eu. Vivamus eget risus dolor. Sed non vestibulum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis a ultricies mauris. Vivamus consequat nisl vitae arcu accumsan, quis lobortis lorem eleifend. Integer a mattis quam.",
            img:"/Images/politics Re/Group 1000002417.webp",
        },
        
    ]
  return (
    <div className={styles.politicsadminpannelmainboxes}>
    <div className={styles.policsadminpannelleftboxes}>{politicsadminpanneldata.map((e)=>{
        return (
            <div className={styles.politicsadminpannelindboxes}
            
              
            key={e.htxt} onMouseEnter={() => {
                handleImageChange(e.img)
            }}
            
            >
            <div className={styles.politicsadminpannelindtxtandimagesbox}>
            <div className={styles.politicsadminindiconbox}>
            <Image
          src={e.icon}
          alt={"icon"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%",objectFit:"contain" ,padding:"10px"}}
        />
            </div>
            <div className={styles.politicsadminindtxtbox}>
            <h5>{e.htxt}</h5>
            </div>
            </div>
            <p>{e.stxt}</p>
            
            
            </div>
        )
    })}</div>
    <div className={styles.politicsadminpannelrightboxes}>
    
    <Image
          src={imageChange}
          alt={"images"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain" ,padding:"10px"}}
        />
    
    </div>
    </div>
  )
}
