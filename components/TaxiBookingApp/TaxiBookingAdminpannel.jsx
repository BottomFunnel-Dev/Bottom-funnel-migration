import Image from 'next/image';
import React, { useState } from 'react'
import styles from "./TaxiBookingAdminpannel.module.css"

export const TaxiBookingAdminpannel = () => {

    const [imageChange, setImageChange] = useState("/Images/Taxibooking/Adminscreens/Driver management.webp")


    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
        console.log(imagepath)
    }

    const adminpanneltaxibookingdata = [

        {
            images: "/Images/Taxibooking/Adminscreens/Dahboard.webp",
            icon: "/Images/Taxibooking/icons/Component 132.webp",
            htxt: "Dashboard",
            stxt: "The taxi booking applications are a solution to several problems like reducing the waiting time on the road, on-time bookings of taxis, looking out for cabs under the sun, and several other things.",
        },

        {
            images: "/Images/Taxibooking/Adminscreens/Driver management.webp",
            icon: "/Images/Taxibooking/icons/Component 133.webp",
            htxt: "Driver Management",
            stxt: "Mobile app development companies are playing a vital role in catering to this ever evolving technology needs of new-age smartphone users.  Sorting many things in Taxi app development specialization .",
        },

        {
            images: "/Images/Taxibooking/Adminscreens/Reports & analytics.webp",
            icon: "/Images/Taxibooking/icons/Group 340228.webp",
            htxt: "Reports",
            stxt: "These traditional days are gone where we go physical for the taxi booking and all. However, the new different ways of booking a taxi have come in. the easiest ways of bookings.Taxi booking applications provide many advantages that you won’t find in the traditional business.",
        },

        {
            images: "/Images/Taxibooking/Adminscreens/Cashback Map1600.webp",
            icon: "/Images/Taxibooking/icons/Component 134.webp",
            htxt: "Customer Management",
            stxt: "A Taxi booking app development is a strong application that ought to have the option to work well on all devices and platforms.The users are starting to learn how they can book a taxi even at an odd time like late midnight. One must be extremely cautious about the.",
        },
    ]

    return (
        <div className={styles.adminpanneltaxibookingonlutxt}>

            <h1>
                <span className={styles.specialcolor}> Admin Pannel </span>
            </h1>
            <div className={styles.taxibookingadminpannelmainboxes}>
                <div className={styles.taxibookingappadminpannelleftbox}>
                    <div className={styles.taxibookingadminpannelleftboximagesize}>
                        <Image src={imageChange}
                            alt={'images'}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                </div>


                <div className={styles.taxibookingappadminpannelrightbox}>
                    {adminpanneltaxibookingdata.map((e) => {
                        return (
                            <div className={styles.taxibookingappadminpannelindivi}
                                key={e.htxt} onMouseEnter={() => {
                                    handleImageChange(e.images)
                                }}
                            >
                                <div className={styles.taxibookingappadminpannelindivilogo}>
                                    <Image src={e.icon}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                </div>

                                <div className={styles.taxibookingappadminpannelindivifortxt}>
                                    <h4> {e.htxt} </h4>
                                    <p> {e.stxt} </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
