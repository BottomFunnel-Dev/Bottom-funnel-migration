import React, { useState } from 'react';
import styles from "./GroceryCustomer.module.css";
import Image from "next/image";

export const GroceryCustomer = () => {

    const [imageChange, setImageChange] = useState("/Images/grocery/Customer App/Simple & Secure Login.png")
    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
    }

    const Grocerycustomerappdata = [
        {
            image: "/Images/grocery/Customer App/Simple & Secure Login.png",
            headertext: "Simple & Secure Login ",
            icon: "/Images/grocery/icons/Customer/easily acces through.png",
            paragraph: "The bottom funnel is the final stage in the customer journey before purchase. In this stage, customers are narrowing down their options and considering which product to buy. It is a cross platform application which gives ease to customer of accessing it through both android and iOS",
        },

        {
            image: "/Images/grocery/Customer App/User friendly interface.png",
            headertext: "User-Friendly interface",
            icon: "/Images/grocery/icons/Customer/user friendly interface.png",
            paragraph: "The bottom funnel is the part of the user journey where users are ready to take action. This is typically the last step in the user journey, and it's important to make sure that your website or app is optimized for conversions at this stage. It has easy to understand template and customization app degins to give the customer comfort of use.",
        },

        {
            image: "/Images/grocery/Customer App/My cards.png",
            headertext: "Multiple Payment Options",
            icon: "/Images/grocery/icons/Customer/multiple paymnet option.png",
            paragraph: "Multiple Playment gateways denote that a merchant provides several online payment gateways on a single website.It means that users can use an alternative payment method if any online payment gateway has a low sucess rate or is experiencing downtime.",
        },

        {
            image: "/Images/grocery/Customer App/Track order.png",
            headertext: "Track Order",
            icon: "/Images/grocery/icons/Customer/order food & track.png",
            paragraph: "The Customer can use this number to track the progress of their order.The software will also update the traking information as the order process.The final step in order tracking is delivering the product to the customer.Once the product has been delivered,the tracking information will be updated to reflect the completed order."
        },
    ]


    return (
        <div className={styles.grocerycustomerappmainboxes}>

            <h2> Customer App </h2>

            <div className={styles.grocerydeliveryappflexingbox}>
                <div className={styles.grocerydeliveryappflexingboxleftbox}>
                    <div className={styles.grocerydeliveryappleftboxinsiderupperimage}>
                        <Image src={imageChange}
                            alt={'image'}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                </div>

                <div className={styles.grocerydeliveryappflexingboxrightbox}>
                    {Grocerycustomerappdata.map((e) => {
                        return (
                            <div className={styles.grocerydeliveryappindivisualbox}
                                key={e.htxt} onMouseEnter={() => {
                                    handleImageChange(e.image)
                                }}
                            >
                                <div className={styles.groceruyCustomerappindivisualboxforlogo}>
                                    <Image src={e.icon}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                </div>

                                <div>
                                    <h4> {e.headertext} </h4>
                                    <p> {e.paragraph} </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
