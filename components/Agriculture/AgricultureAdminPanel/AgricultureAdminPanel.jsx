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
                            <div
                                key={title}
                                onMouseOver={() => setActive(idx)}
                                className={`styles.logistic-box-${idx}`}
                            >
                                <div className={styles.logisticlogo}>
                                    <img src={icon.src} alt={icon.alt} />
                                </div>
                                <h3>{title}</h3>

                                <p>{para}</p>
                            </div>
                        );
                    })}
                </div>
                <div
                    className={styles.plantBasedAdminPanelleft}
                    style={{
                        background: `url(${plantBasedAdminData.background})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                    }}
                >
                    <div className={styles.logisticDriveImagplantBasedAdminPanelImagee}>
                        <img
                            src={plantBasedAdminData.plantBasedAdminData[active].img.src}
                            alt={plantBasedAdminData.plantBasedAdminData[active].img.alt}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

