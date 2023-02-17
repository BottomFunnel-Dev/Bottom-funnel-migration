import React, { useState } from 'react'
import styles from "./OnlinePMobileBrowser.module.css"

export const OnlinePMobileBrowser = () => {

    const [imagechange, setImageChange] = useState("Images/onlinepaymentpage/ha/screens/mobile based paymnets/in app mobile payments.webp")

const handleImageChange = (imagepath) =>{
  setImageChange(() => imagepath)
}

    const onlinepmobilebrowserdata = [
        {
            img:"Images/onlinepaymentpage/ha/screens/mobile based paymnets/in app mobile payments.webp",
            xtt: "In-App Mobile Payments",
        },

        {
            img:"Images/onlinepaymentpage/ha/screens/mobile based paymnets/sms payments.webp",
            xtt: "SMS Payments",
        },
        {
            img:"Images/onlinepaymentpage/ha/screens/mobile based paymnets/wireless credit card.webp",
            xtt: "Wireless Credit Card Terminal",
        },

        {
            img:"Images/onlinepaymentpage/ha/screens/mobile based paymnets/Group 1000002705.webp",
            xtt: "Wireless Credit Card Terminal",
        },


    ]

    return (
        <div className={styles.onlinepmobilebrowsermainboxes}>
            <div className={styles.onlinepmobilebrowserleftbox}>
                <div className={styles.onlinemobilepbrowserleftboxoutermobilebox}>
                    <img src={imagechange} alt='mobile' />
                </div>


            </div>
            <div className={styles.onlinepmobilebrowserrightbox}>
                <div className={styles.onlinepmobilebrowserrightboxheadertext}>
                    <h2>
                        <span className={styles.specialcolor}>Mobile Browser</span> Based Payment
                    </h2>
                </div>

                <div className={styles.onlinepmobilebrowserrightboxmappingtxt}>
                    {onlinepmobilebrowserdata.map((e) => {
                        return (
                            <div className={styles.onlinepmobilebrowseraftermappingdata}
                            key={e.xtt} onMouseEnter={() => {
                                handleImageChange(e.img)
                              }}
                            
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>

                                <div className={styles.onlinepmobilebrowseraftermappingxtt}>
                                    <h5>{e.xtt}</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
