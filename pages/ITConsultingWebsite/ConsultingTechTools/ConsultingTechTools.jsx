import React from "react";
import styles from "./ConsultingTechTools.module.css";

export const ConsultingTechTools = () => {
    const cardsData = [
        {
            title: "Artificial Intelligence",
            body: "Identification of a specific person's face to provide exclusive sedrvices, identify suspects and trespassers, etc.",
            image: "/Images/ItConsulting/AI.png",
        },
        {
            title: "Augumented Reality",
            body: "Assising the level of a customer's satisfaction to solve unique business challenges.",
            image: "/Images/ItConsulting/AR.png",
        },
        {
            title: "BlockChain",
            body: "Indexing visual databases.",
            image: "/Images/ItConsulting/Blockchain.png",
        },
        {
            title: "Cloud Computing",
            body: "Producing 3D models from 2D data (e.g. medical scans).",
            image: "/Images/ItConsulting/Cloud computing.png",
        },
        {
            title: "Fintech",
            body: "Reading texts and number sequences (printed and handwritten).",
            image: "/Images/ItConsulting/Fintech.png",
        },
        {
            title: "Internet Of Things",
            body: "Identifying behavior anomalies and alarms in surveillance videos, counting people traversing a passage.",
            image: "/Images/ItConsulting/IOT.png",
        },
    ];

    return (
        <div className={styles.consultingTechToolscontainer}>
            <h1>
                <span> Tech and Tools </span> we use
            </h1>
            <div className={styles.consultingTechToolshrline}>
                <span></span>
                <div></div>
                <span></span>
            </div>
            <div className={styles.consultingTechToolsmain}>
                {cardsData.map(({ title, body, image }) => (
                    <div key={title}>
                        <span>
                            <div>
                                <img src={image} alt={title} />
                            </div>
                            <h2>{title}</h2>
                            <p>{body}</p>
                        </span>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};
