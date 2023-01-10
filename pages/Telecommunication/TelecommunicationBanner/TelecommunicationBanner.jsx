import React from 'react';
import styles from "./TelecommunicationBanner.module.css";

export const TelecommunicationBanner = () => {
    return (

        <div className={styles.telecomBannerOuterDiv}>
            <img src='/Images/Telecommunication/BannerImage.png' alt='image' />

            <div className={styles.telecomBannerContentDiv}>
                <h1> Custom Telecommunication </h1>
                <h1> Software Development </h1>

                <p>
                    Telecommunication software is used to organize and manage all aspectsof electronic data (text, voice, video, etc.)
                    exchange. A software development partner of T-Mobile, Orange, and Viber with 17 years in telecom software development,
                    ScienceSoft builds OSS, BSS, customized VoIP/IPTV software,etc.
                </p>

                <button> Get Started </button>
            </div>
        </div>
    )
}
