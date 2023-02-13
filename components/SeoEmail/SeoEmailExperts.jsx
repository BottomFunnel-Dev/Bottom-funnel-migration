import React, { useState } from "react";
import styles from './SeoEmailExperts.module.css';

export default function SeoEmailExperts() {

    const data = [{
        heading: "Scale Anytime - Anywhere",
        content: "Scalability is an important factor when it comes to business growth. We help you meet your run-time requirements smartly with real-time resource availability."
    },
    {
        heading: "Quick Turnaround Time",
        content: "Our teams at Uplers are praised for meeting urgent delivery requirements with quick deliverables. Time-zone adaptability is one more perk you get when you work with Email SEO agencies like ours"
    },
    {
        heading: "Single Point of Contact",
        content: "Juggling between multiple points of contact can lead to poor productivity. We, as the best Email SEO company, provide a dedicated project manager for all your needs as a single point of contact."
    },
    {
        heading: "Human-friendly Work Environment",
        content: "Our work processes are humanized – it helps us become competitive, stay ahead of the game and loved by our clients."
    },
    {
        heading: "Human-friendly Work Environment",
        content: "Our work processes are humanized – it helps us become competitive, stay ahead of the game and loved by our clients."
    }
    ]

    return (
        <div className={styles.seoEmailexpertsmaindiv}>
            <h1>What sets us a part as a Email SEO company?</h1>
            {data.map((items, i) => {
                return (
                    <div className={styles.seoEmailinfodiv}>
                        <div className={styles.seoEmailinfodiv1}>
                            <p key={i}>
                                {items.heading}
                            </p>
                        </div>

                        <div className={styles.seoEmailinfodiv2}>
                            <p key={i}>
                                {items.content}
                            </p>
                        </div>
                    </div>
                )
            })
            }<div>
            </div>
        </div>
    );
};