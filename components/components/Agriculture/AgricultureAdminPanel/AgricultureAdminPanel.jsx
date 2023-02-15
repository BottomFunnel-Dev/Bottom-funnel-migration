import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./AgricultureAdminPanel.module.css";

export default function AgricultureAdminPanel({ plantBasedAdminData }) {
    const [active, setActive] = useState(0);
    return (
        <div className={styles.plantBasedAdminPanel}>
            <h1>{plantBasedAdminData.sectionTitle}</h1>
            <div className={styles.plantBasedAdminPanelsub}>
                <div className={styles.plantBasedAdminPanelright}>
                    {plantBasedAdminData.plantBasedAdminData.map(({ title, icon, para }, idx) => {
                        return (
                            <div key={title}
                                onMouseOver={() => setActive(idx)}
                                className={`styles.logistic-box-${idx}`}
                            >
                                <div className={styles.logisticlogo}>
                                    <Image src={icon.src}
                                        alt={icon.alt}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "15%", height: "100%" }}
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
                    <div className={styles.logisticDriveImagplantBasedAdminPanelImagee}>
                        <Image
                            src={plantBasedAdminData.plantBasedAdminData[active].img.src}
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
}

