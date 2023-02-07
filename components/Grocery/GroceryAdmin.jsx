import React, { useState } from 'react';
import styles from "./GroceryAdmin.module.css";

export const GroceryAdmin = () => {
    const [imageChange, setImageChange] = useState("/Images/grocery/Admin Panel/Dashboard Management.png")
    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
    }

    const groceryadmindata = [
        {
            image: "/Images/grocery/Admin Panel/Dashboard Management.png",
            headertext: "Dashboard Management",
            paragraph: "We provide best in class solutions to help you grow your business online.From analytics to marketing,we have it all covered.With our team of experts, we can create an ecommerce app that will boost your sales and profits.",

        },

        {
            image: "/Images/grocery/Admin Panel/Manage Users.png",
            headertext: "Manage Users",
            paragraph: "Using our user-friendly interface,you will be able to analyze everything about your app right on your fingertips.Data will be updated automatically every day with real time information about user engagement,transactions etc.",

        },


        {
            image: "/Images/grocery/Admin Panel/Manage Product Categories.png",
            headertext: "Manage Product Categories",
            paragraph: "When you're managing a large catalog of products, efficiency is key.from setting up product categories to installing integration, we'll do everything we can to ensure your website runs smoothly and efficiently.",

        },

        {
            image: "/Images/grocery/Admin Panel/Track Sales.png",
            headertext: "Track Sales",
            paragraph: "We specialize is helping businessess with their Home Service needs by providing a wide range of solutions that will help you track your Work effectively and efficiently.From marketing automation tools to site optimization services.",

        },
    ]


    return (
        <div className={styles.groceryadminpannelmainboxes}>
            <div className={styles.groceryadminpannelmainboxsometextupper}>
                <h2> Admin Pannel </h2>
            </div>

            <div className={styles.groceryadminpannelmainflexboxclass}>
                <div className={styles.groceryadminpannelleftbox}>
                    {groceryadmindata.map((e) => {
                        return (
                            <div className={styles.groceryadminpannelmapperboxindivisyal}
                                key={e.htxt} onMouseEnter={() => {
                                    handleImageChange(e.image)
                                }}
                            >
                                <div>
                                    <h4> {e.headertext} </h4>
                                    <p> {e.paragraph} </p>
                                </div>
                            </div>
                        )
                    })}</div>

                <div className={styles.groceryamadminpannelrightbox}>
                    <div className={styles.groceryamadminpannelrightboxinnerimage}>
                        <img src={imageChange} alt='image' />
                    </div>
                </div>
            </div>
        </div>
    )
}
