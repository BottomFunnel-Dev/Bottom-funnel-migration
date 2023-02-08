import React, { useState } from 'react';
import styles from "./PlantBaseDeliverAdminPanel.module.css";

export default function PlantBaseDeliverAdminPanel({ plantBasedAdminData }) {
    const [active, setActive] = useState(0);
    return (
        <div className={styles.plantBasedAdminPanel}>
            <h1>{plantBasedAdminData.sectionTitle}</h1>
            <div className={styles.plantBasedAdminPanelsub}>
                <div className={styles.plantBasedAdminPanelright}>
                    {plantBasedAdminData.plantBasedAdminData.map(({ title, icon, para }, idx) => {
                        return (
                            <div
                                key={title}
                                onMouseOver={() => setActive(idx)}
                                className={`logistic-box-${idx}`}
                            >
                                <div className={styles.logisticLogo}>
                                    <img src={icon.src} alt={icon.alt} />
                                </div>

                                <h3> {title} </h3>
                                <p> {para} </p>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.plantBasedAdminPanelleft}
                    style={{
                        background: `url(${plantBasedAdminData.background})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                    }}
                >
                    <div className={styles.plantBasedAdminPanelmage}>
                        <img src={plantBasedAdminData.plantBasedAdminData[active].img.src}
                            alt={plantBasedAdminData.plantBasedAdminData[active].img.alt}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

