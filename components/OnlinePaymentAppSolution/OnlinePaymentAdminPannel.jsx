import React, { useState } from 'react'
import styles from "./OnlinePaymentAdminPannel.module.css"

export const OnlinePaymentAdminPannel = () => {

    const [imagechange, setImageChange] = useState("Images/onlinepaymentpage/ha/screens/admin panel/payment integration.webp")

const handleImageChange = (imagepath) =>{
  setImageChange(() => imagepath)
}

    const onlinepaymentadminpanneldata = [
        {
            img:"Images/onlinepaymentpage/ha/screens/admin panel/payment integration.webp",
            xtt: "Payment Integrations",
        },

        {
            img:"Images/onlinepaymentpage/ha/screens/admin panel/budgt analysis.webp",
            xtt: "Budget Analysis",
        },

        {
            img:"Images/onlinepaymentpage/ha/screens/admin panel/fraud and risk.webp",
            xtt: "Froud & Risk Management",
        },

        {
            img:"Images/onlinepaymentpage/ha/screens/admin panel/Dashboard management.webp",
            xtt: "Dashboard Management",
        },
    ]

    return (
        <div className={styles.onlinepaymentadminpannelmainbox}>
            <div className={styles.onlinepaymentadminpannelleftbox}>
                <div className={styles.onlinepaymentadminpanneltxtbox}>
                    <h2>
                        <span className={styles.specialcolor}>Admin</span> Pannel Features
                    </h2>
                </div>
                
                <div className={styles.onlinepaymentadminmappingdata}>{onlinepaymentadminpanneldata.map((e) => {
                    return (
                        <div className={styles.onlinepaymentadminpannelaftermapping}
                        
                        key={e.htxt} onMouseEnter={() => {
                            handleImageChange(e.img)
                          }}
                        
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>

                            <div className={styles.onlinepaymentadminpannelmappertxtallign}>
                                <h5> {e.xtt} </h5>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>

            <div className={styles.onlinepaymentadminpannelrightbox}>
                <div className={styles.onlinepaymentadminpannelrightboxchangerimages}>
                    <img src={imagechange} alt='admin' />
                </div>
            </div>
        </div>
    );
};
