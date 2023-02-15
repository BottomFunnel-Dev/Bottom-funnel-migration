import React, { useState } from 'react';
import styles from "./GroceryService.module.css";
import Image from "next/image";

export const GroceryService = () => {
    const [imageChange, setImageChange] = useState("/Images/icecreamchanges/driver app/Profile.png")
    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
    }

    const groceryservicedata = [
        {
            image: "/Images/grocery/Service professionals app/Track My Order.png",
            headertext: "Track My Order",
            paragraph: "In Contrast,manual order tracking system rely on human input and are typically seen in smaller or mid-sized business that handle fewer orders each day.At the most basic level,this often involves manually entering each new order into a database so that it can be tracked throughout the fulfilment process.",
        },

        {
            image: "/Images/grocery/Service professionals app/Manage My Cart.png",
            headertext: "Manage My Cart",
            paragraph: "Our users can work on multiple orders simultaneously via cart Management.You may need to leave a draft order until further clarification or documentation is acquired or you may support several different offices with different procurement needs.",
        },

        {
            image: "/Images/grocery/Service professionals app/Simplicity In Searching.png",
            headertext: "Simplicity In Searching",
            paragraph: "An alternative is to ask whether we can search through the dynamics of natural behavior to find explicit evidence that these behaviors are simpler than they might have been.",
        },

        {
            image: "/Images/grocery/Service professionals app/Various Filters.png",
            headertext: "Various Filters",
            paragraph: "As online stores grow and get more sophisticated new ways of guiding customers need to be added.A simple product filter might not be enough.In these cases faceted navigation can help.faceted navigation looks kind of like a filter system."
        },
    ]


    return (
        <div className={styles.groceryservicemainboxes}>

            <h2> Driver App </h2>
            <div className={styles.groceryserviceflexingbox}>
                <div className={styles.groceryserviceflexingboxleftbox}>
                    <div className={styles.groceryseryserviceleftboxinsiderupperimage}>
                        <Image src={imageChange}
                            alt={'images'}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                </div>

                <div className={styles.groceryserviceflexingboxrightbox}>
                    {groceryservicedata.map((e) => {
                        return (
                            <div className={styles.groceryserviceindivisualbox}
                                key={e.headertext} onMouseEnter={() => {
                                    handleImageChange(e.image)
                                }}
                            >
                                <div className={styles.groceryserviceindivisualboxfortext}>
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
