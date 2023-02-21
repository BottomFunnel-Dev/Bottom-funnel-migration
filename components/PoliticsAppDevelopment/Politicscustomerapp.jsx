import Image from 'next/image'
import React, { useState } from 'react'
import styles from "./Politicscustomerapp.module.css"

export const Politicscustomerapp = () => {

    
    const [imageChange, setImageChange] = useState("/Images/politics Re/Group 1000002444.webp")
    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
    }

    const politicscustomerdata = [
        {
            img:"/Images/politics Re/Group 1000002444.webp",
            icon:"/Images/politics Re/checkmark.webp",
            htxt:"Easy Login/Signup",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non efficitur eros, id iaculis sem. Nunc nec hendrerit sem. Fusce ac pretium orci, in tristique leo. Mauris venenatis odio vitae interdum pharetra. Sed quam risus, interdum id libero in, laoreet pretium nulla. Aliquam et faucibus sem.",
        },

        {
            img:"/Images/politics Re/Podcasts.webp",
            icon:"/Images/politics Re/checkmark.webp",
            htxt:"Short News Videos",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non efficitur eros, id iaculis sem. Nunc nec hendrerit sem. Fusce ac pretium orci, in tristique leo. Mauris venenatis odio vitae interdum pharetra. Sed quam risus, interdum id libero in, laoreet pretium nulla. Aliquam et faucibus sem.",
        },

        {
            img:"/Images/politics Re/Real-time updates.webp",
            icon:"/Images/politics Re/checkmark.webp",
            htxt:"Real-time updates",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non efficitur eros, id iaculis sem. Nunc nec hendrerit sem. Fusce ac pretium orci, in tristique leo. Mauris venenatis odio vitae interdum pharetra. Sed quam risus, interdum id libero in, laoreet pretium nulla. Aliquam et faucibus sem.",
        },

        {
            img:"/Images/politics Re/Podcasts.webp",
            icon:"/Images/politics Re/checkmark.webp",
            htxt:"Podcasts",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non efficitur eros, id iaculis sem. Nunc nec hendrerit sem. Fusce ac pretium orci, in tristique leo. Mauris venenatis odio vitae interdum pharetra. Sed quam risus, interdum id libero in, laoreet pretium nulla. Aliquam et faucibus sem.",
        },
    ]

  return (
    <div className={styles.politicscustomerappmainboxes}>
    <h2>We develop political app development solutions with features that result in trust-inducing mobile apps.</h2>
  
    <div className={styles.politicsdevelopmentcustomermainboxes}>
    <h3>Customer Pannel</h3>
    <div className={styles.politicsdevelopmentleftbox}>
    <Image
          src={imageChange}
          alt={"changable image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain" , }}
        />
    
    
    
    </div>
    <div className={styles.politicsdevelopmentrightbox}>{politicscustomerdata.map((e)=>{
     
        return (
            <div className={styles.politicscustomermappingind}
            
            key={e.htxt} onMouseEnter={() => {
                handleImageChange(e.img)
            }}
            >
            <div className={styles.policsinddatainnerflexbox}>
            <div>
            <Image
          src={e.icon}
          alt={"icon"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" ,padding:"10px", objectFit:"contain" }}
        />
            </div>
            <div className={styles.customerpoliticsh5txt}><h5>{e.htxt}</h5></div>
            </div>
            <p>{e.stxt}</p>
            </div>
        )
    })}</div>
    </div>
    
    </div>
  )
}
