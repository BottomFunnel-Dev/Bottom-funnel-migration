import React from 'react';
import styles from "./DigitalmarketWhyConsider.module.css";
import Image from 'next/image';

export const DigitalmarketWhyConsider = () => {

    const whychoosedigitadata = [

        {
            img: "/Images/digitalmarket/Curved Arrow.webp",
            htxt: "Flexible engagement",
            stxt: "Our flexible engagement model allows you to easily customize packages with any combination of marketing tactics, so your budget is not taken for granted."
        },
        {
            img: "/Images/digitalmarket/Agile Iteration.webp",
            htxt: "Integrity and Transparency",
            stxt: "We believe in the importance of being transparent. We share strategies, process, and results with our clients so that they can get the best representation possible for their brand through our services."
        },
        {
            img: "/Images/digitalmarket/Team.webp",
            htxt: "The experienced and talented team",
            stxt: "Creative Digital Marketing Agency with 15 years of experience, offers strategies and strategies that can bring your digital marketing to the next level."
        },
        {
            img: "/Images/digitalmarket/Group.webp",
            htxt: "Agile",
            stxt: "Our team has the expertise to help you grow your business through digital marketing, whether that's implementing new strategies or rethinking your existing strategy."
        },
        {
            img: "/Images/digitalmarket/support.webp",
            htxt: "We are always here for you",
            stxt: "Creative Digital Marketing Agency provides the best digital marketing solutions for your business. We focus on creating a truly memorable experience for our clients, businesses and customers."
        },
    ]

    return (
        <div className={styles.digitalmarketwhyconsidermainboxes}>
            <h1>Why you should consider Bottom funnel for Digital Marketing</h1>
            <div className={styles.flexingboxwhyshouldconsiderdigitalmarket}>
                {whychoosedigitadata.map((e) => {
                    return (
                        <div className={styles.aftermappingflexboxwhychoosemarket}>
                            <div className={styles.divforimagedigitalmarketwhychoose}>
                                {/* <img src={e.img} alt="image" /> */}
                                <Image
                                src={e.img}
                                alt={"image"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <div className={styles.divforimagedigitalmarketwhychoosetextbox}>
                                <h4>{e.htxt}</h4>
                                {e.stxt}
                            </div>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}

