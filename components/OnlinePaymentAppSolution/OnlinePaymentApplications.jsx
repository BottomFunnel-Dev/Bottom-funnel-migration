import React, { useState } from 'react'
import styles from "./OnlinePaymentApplications.module.css"

export const OnlinePaymentApplications = () => {

    const [imagechange, setImageChange] = useState("Images/onlinepaymentpage/ha/screens/payment app features/contactless mobile payments.webp")

const handleImageChange = (imagepath) =>{
  setImageChange(() => imagepath)
}

    const onlinepaymentmobilesoulutiondata = [
        {
            img:"Images/onlinepaymentpage/ha/screens/payment app features/contactless mobile payments.webp",
            xtt: "Contactless Mobile Payments",
        },

        {
            img:"Images/onlinepaymentpage/ha/screens/payment app features/mobile wallet apps.webp",
            xtt: "Mobile Wallet Apps",
        },

        {
            img:"Images/onlinepaymentpage/ha/screens/payment app features/ecommerce payments.webp",
            xtt: "E-Commerce Payment",
        },

        {
            img:"Images/onlinepaymentpage/ha/screens/payment app features/Review summary.webp",
            xtt: "Review Summary"
        }

    ]

    return (
        <div className={styles.onlinepaymentmobileapplicationmainbox}>
            <div className={styles.onlinepaymentmobileapplicationleftbox}>

                <div className={styles.onlinepaymentmobileapplicationleftboxformobileimage}>
                    <img src={imagechange} alt='images' />
                </div>
            </div>

            <div className={styles.onlinepaymentmobileapplicationrightbox}>
                <div className={styles.onlinepaymentmobileapplicationtetxtupperheadline}>
                    <h2>
                        <span className={styles.specialcolor}>Payment</span> Application Features
                    </h2>
                </div>

                {onlinepaymentmobilesoulutiondata.map((e) => {
                    return (
                        <div className={styles.onlinepaymentmobileapplicationmappingbox}
                        key={e.xtt} onMouseEnter={() => {
                            handleImageChange(e.img)
                          }}
                        
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>

                            <h5>{e.xtt}</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
