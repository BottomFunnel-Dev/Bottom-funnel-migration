import React from "react";
import styles from "./Download.module.css";

export default function Downloadratecard() {
    return (
        <div className={styles.Downloadratecarddiv}>
            <div className={styles.downloadText}>
                <h5>
                    You want to take your business to the next level but you don't know where to start? Get started with us
                    today and see the results for yourself!
                </h5>
            </div>
            <div className={styles.buttonSection}>
                <button>Download the rate card</button>
            </div>
        </div>
    );
};