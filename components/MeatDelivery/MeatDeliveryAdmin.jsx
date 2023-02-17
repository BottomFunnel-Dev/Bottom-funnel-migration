import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./MeatDeliveryAdmin.module.css";

export const MeatDeliveryAdmin = () => {

    const [imageChange, setImageChange]= useState("/Images/meatdelieveryapp/Screenshot_20221215_184703 1.webp")

    const handleImagechange = (imagepath) =>{
        setImageChange(() => imagepath)
    }

    const meatdeliveryadmindata = [
        {
            img:"/Images/meatdelieveryapp/Screenshot_20221215_184703 1.webp",
            htxt: "Manage everything in one place",
            stxt: "This feature allows admin to manage all their activities through this app only, i.e, from one place ir screen",
        },

        {
            img:"/Images/meatdelieveryapp/Screenshot_20221215_185240 1.webp",
            htxt: "Gather information about customer preferences",
            stxt: "The admin will be able to check which products the customers are liking the most and what's generating highest profits.",
        },


        {
            img:"/Images/meatdelieveryapp/Screenshot_20221207_163903 1.webp",
            htxt: "Generating Profit report and draw insights",
            stxt: "This feature will generate profit and sales report so that the admin can draw fruitful insights out it and work on it",
        },

        {
            img:"/Images/meatdelieveryapp/Screenshot_20221215_185330 1.webp",
            htxt: "Various CRM features",
            stxt: "These customer relationship management features for admin pannel will help the admin in improving relationship with their customers.",
        },
    ]


    return (
        <div className={styles.meatdeliveryadminpannelmainboxes}>
            <div className={styles.meatdeliveryadminleftbox}>
                <div className={styles.meatdeliveryadminuppertextbox}>
                    <h2 className={styles.specialcolor}>
                        Admin Pannel
                    </h2>
                </div>

                <div className={styles.meateliverymappingboxforadminpannel}>{meatdeliveryadmindata.map((e) => {
                    return (
                        <div className={styles.meatdeliveryadminboxindivisually}
                        key={e.htxt} onMouseEnter={() => {
                            handleImagechange(e.img)
                        }}
                        >
                            <h4> {e.htxt} </h4>
                            <p> {e.stxt} </p>
                        </div>
                    )
                })}</div>
            </div>

            <div className={styles.meatdeliveryadminrightboxes}>
                <Image src={imageChange}
                    alt={'images'}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "80%", height: "80%" ,marginLeft:"10%", marginTop:"7%" }}
                />
            </div>
        </div>
    );
};
