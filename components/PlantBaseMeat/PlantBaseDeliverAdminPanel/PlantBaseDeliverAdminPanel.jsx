import Image from 'next/image';
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
                                    <Image src={icon.src}
                                        alt={icon.alt}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                    />
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
                        <Image src={plantBasedAdminData.plantBasedAdminData[active].img.src}
                            alt={plantBasedAdminData.plantBasedAdminData[active].img.alt}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

