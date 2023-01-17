import React from 'react'
import styles from "./MeatDeliveryAdmin.module.css"

export const MeatDeliveryAdmin = () => {

    const meatdeliveryadmindata = [
        {
            htxt: "Manage everything in one place",
            stxt: "This feature allows admin to manage all their activities through this app only, i.e, from one place ir screen",
        },

        {
            htxt: "Gather information about customer preferences",
            stxt: "The admin will be able to check which products the customers are liking the most and what's generating highest profits.",
        },


        {
            htxt: "Generating Profit report and draw insights",
            stxt: "This feature will generate profit and sales report so that the admin can draw fruitful insights out it and work on it",
        },

        {
            htxt: "Various CRM features",
            stxt: "These customer relationship management features for admin pannel will help the admin in improving relationship with their customers.",
        },
    ]


    return (
        <div className={styles.meatdeliveryadminpannelmainboxes}>
            <div className={styles.meatdeliveryadminleftbox}>
                <div className={styles.meatdeliveryadminuppertextbox}>
                    <h1 className={styles.specialcolor}>Admin Pannel</h1>
                </div>
                <div className={styles.meateliverymappingboxforadminpannel}>{meatdeliveryadmindata.map((e) => {
                    return (
                        <div className={styles.meatdeliveryadminboxindivisually}><h4>{e.htxt}</h4>
                            <p>{e.stxt}</p>
                        </div>
                    )
                })}</div>

            </div>


            <div className={styles.meatdeliveryadminrightboxes}>
                <img src='Images/meatdelieveryapp/Rectangle-1.png' alt='images' />
            </div>

        </div>
    )
}
