import React from 'react'
import styles from "./WhatDigitalMarket.module.css"

export const WhatDigitalMarket = () => {

  const whatdigitalmarketdata= [ 
 {
  htxt:"Global Rech",
},

{
  htxt:"Local Reach",
},

{
  htxt:"Lower Cost",
},

{
  htxt:"Easy to learn",
},

{
  htxt:"Lower Cost",
},

{
  htxt:"Easy to Learn",
}
  ]

  return (
    <div className={styles.whatdigitalmarketmainboxes}>
    <div className={styles.whatdigitamarketleftboxes}>
    <img src='Images/digitalmarket/OBJECTS.png' alt='images' />
    </div>
    
    <div className={styles.whatdigitalmarketrightbox}>
    <h1>What is Digital Marketing?</h1>
    <p>Digital Marketing is the Componen
    t of marketing that uses the Internet
     and online based digital technologies
      such as desktop computers,mobile phones 
      and other digital media and platforms 
      to promote products and service</p>

      <div className={styles.whatdigitalmarketmappingbox}>{whatdigitalmarketdata.map((e)=>{
        return (
          <div className={styles.whatdigitamarketingmappinindi}>
          <div> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FF8787" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          
                       </svg></div>
                       <div className={styles.whatdigitamarketingmappinindifortxt}>{e.htxt}</div>
          </div>
        )
      })}</div>
      </div>
      

    </div>
  )
}


