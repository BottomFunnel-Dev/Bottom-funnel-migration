import React from 'react'
import styles from "./DigitalMarketingHiring.module.css";


export const DigitalMarketingHiring = () => {

  const digitalmarkethiringdata = [

    {
      htxt: "Share Your Requirements",
      stxt: "Share Your Requirements. Easily send your requirements to our team of digital marketers using our drag-and-drop form, and you'll be contacted quickly for an initial quote."
    },

    {
      htxt: "Shorting Of Best Talent",
      stxt: "The digital marketing agency that has the experience and skills to help you reach your business goals. We are a small and passionate team, with a great passion for solving problems!"
    },


    {
      htxt: "Find the right person for your Business",
      stxt: "At Creative Digital Marketing Agency, we understand that you need to find the right person for your Business. We offer a variety of services so you can choose the one that is best for you and your business."
    },


    {
      htxt: "Our Support 24/4",
      stxt: "Our Support 24/4 provides you with the best performance, security, and reliability for your online business.Get your business noticed with our award-winning digital marketing agency. Our solutions and solutions are created to deliver positive results for your company."
    },


  ]


  return (
    <div className={styles.digitalmarketinghiringmainbox}>
      <div className={styles.digitalmarkethiringtextbox}>
        <h1>Our Hiring Process For Your Projects</h1>
      </div>
      
      <div className={styles.digitalmarketinghiringimageboxes}>
        <img src='Images/digitalmarket/Component186.png' alt='image' />
      </div>
      

      <div className={styles.digitalmarketafterimageflexingbox}>{digitalmarkethiringdata.map((e) => {
        return (
          <div className={styles.digitalmarkethiringflexingtxt}>
            <h4>{e.htxt}</h4>
            <p>{e.stxt}</p>
          </div>
        )
      })}

      </div>
    </div>
  )
}

