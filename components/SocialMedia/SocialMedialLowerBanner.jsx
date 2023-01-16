import React from 'react'
import styles from "./SocialMedialLowerBanner.module.css"

export const SocialMedialLowerBanner = () => {

const socialmedialowerbannerdata = [

  {
    img:"Images/socialmedia/Icons/customer-review.png",
    txt:"Customer Satisfaction",
  },


  {
    img:"Images/socialmedia/Icons/proactive.png",
    txt:"Agile Procedure",
  },

  {
    img:"Images/socialmedia/Icons/team.png",
    txt:"Dedicated Teams",
  },


  {
    img:"Images/socialmedia/Icons/opacity.png",
    txt:"Integrity & Transparancy",
  },

  {
    img:"Images/socialmedia/Icons/diagram.png",
    txt:"Flexible Engagement Models",
  },





]

  return (
    <div className={styles.socialmedialowerbannermainboxes}>
  
    <div className={styles.socialmediaflexboxlowerbanner}>{socialmedialowerbannerdata.map((e)=>{

      return (
      <div className={styles.medialowerbannerimagedivflexing}><img src={e.img} alt="image" />
      <h5>{e.txt}</h5>
      
      </div>

      )
    })}</div>
    
    </div>
  )
}

