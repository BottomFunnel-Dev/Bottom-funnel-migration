import React, { useState } from 'react';
import styles from "./LaundryAdmin.module.css";

const LaundryAdmin = () => {
    const [imageChange, setImageChange] = useState("/Images/Laundrypage/Adminpanelscreens/Admininterface.png")
    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
    }

    const LaundryAdminrData = [
        {
            img: "/Images/Laundrypage/icons/dashboard1.png",
            Htxt: "Easy to use Super Admin Interface",
            stxt: "An on-demand laundry app is exactly what it sounds like, an internet request on demand delivery of their laundry. ",
            tablet: "/Images/Laundrypage/Adminpanelscreens/Admininterface.png"
        },

        {
            img: "/Images/Laundrypage/icons/group.png",
            Htxt: "Manage multiple users",
            stxt: " the app, labeling clothes with barcodes, processing garments in the factory, laundry PoS, to delivery at customers’ doorsteps.",
            tablet: "/Images/Laundrypage/Adminpanelscreens/Multipleusers.png"
        },

        {
            img: "/Images/Laundrypage/icons/sales.png",
            Htxt: "Generate earnings & Sales Report",
            stxt: " the global laundry care market is expected to register 5% CAGR in terms of value between 2021 and 2031.",
            tablet: "/Images/Laundrypage/Adminpanelscreens/Earningssalesreport.png"
        },

        {
            img: "/Images/Laundrypage/icons/tag.png",
            Htxt: "Manage Discount Coupons and Pomos",
            stxt: "Coupons can drive customers to business,existing customer engagement, and generate new revenue.",
            tablet: "/Images/Laundrypage/Adminpanelscreens/Discountspromos.png"
        }

    ]
    return (
        <div className={styles.laundrypageadminmainbox}>
            <div className={styles.laundryadminleftbox}>
                <div className={styles.laundryadminheadingtxt}>
                    <h1> Admin Pannel </h1>
                    <p>
                        By using it, providers can view their statistics and know how many users they have, their earnings, and their commissions.
                    </p>

                    <div className={styles.laundryadminmappingbox}>
                        {LaundryAdminrData.map((e, i) => {
                            return (
                                <div className={styles.laundryadmindatamappingindi}
                                    key={i} onMouseEnter={() => {
                                        handleImageChange(e.tablet)
                                    }}
                                >
                                    <div>
                                        <img src={e.img} alt='images' />
                                    </div>

                                    <h4> {e.Htxt} </h4>
                                    <p> {e.stxt} </p>
                                </div>
                            )
                        })}</div>
                </div>
            </div>

            <div className={styles.laundryadminrightbox}>
                <img src={imageChange} alt="images" />
            </div>
        </div>
    );
};

export default LaundryAdmin;

