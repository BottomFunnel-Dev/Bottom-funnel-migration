import React, { useState } from 'react';
import styles from "./EscooterAdminpannel.module.css";
export const EscooterAdminpannel = () => {

    const [imageChange, setImageChange] = useState("https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Escooterchanges/Admin screens/Dahboard.png")
    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
    }

    const escooteradmindata = [
        {
            adminheadtxt: "Daily Statistics",
            adminsmalltxt: "The global popularity of motor scooters dates from the post-World War II introductions of the Vespa and Lambretta models in Italy. These scooters were intended to provide economical personal transportation (engines fro have been developed for Western markets.",
            adminpannelscreen: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Escooterchanges/Admin screens/Dahboard.png",
        },


        {
            adminheadtxt: "Sales & Earnings Reports",
            adminsmalltxt: "The earnings report is the predominant method for a publicly-traded company to report its financial results for a specific period. Investors can use a company's earnings report to gain insight into how well a company is run and whether the company is performing well.",
            adminpannelscreen: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Escooterchanges/Admin screens/ba405ca238c71e8e88574ce0c5b057f7.png",
        },

        {
            adminheadtxt: "Customer Details",
            adminsmalltxt: "When you work in customer success, your days might be filled with emails, phone calls, and meetings, but those tasks aren't what defines your career. After all, you weren't hired to answer a phone -- you were hired to help customers succeed by solving problems.",
            adminpannelscreen: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Escooterchanges/Admin screens/7f09e3adfac27a27718fa9bc5757b13a.png",
        },
    ]


    return (
        <div className={styles.escooteradminpanneluppertxt}>
            <h1 className={styles.colorescooty}>Admin Pannel</h1>
            <div className={styles.escooteradminpannelmainboxes}>
                <div className={styles.escooteradminpannelboxleftside}>
                    <img src={imageChange} alt='image' />
                </div>

                <div className={styles.escooteradminpannelboxrighttside}>
                    {escooteradmindata.map((e) => {
                        return (
                            <div className={styles.escooteradminpannelboxrighttsideindivboxes}
                                key={e.htxt} onMouseEnter={() => {
                                    handleImageChange(e.adminpannelscreen)
                                }}
                            >
                                <h4>{e.adminheadtxt}</h4>
                                <p>{e.adminsmalltxt}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
