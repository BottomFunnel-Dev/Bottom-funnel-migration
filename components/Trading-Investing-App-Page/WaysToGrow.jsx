import React from 'react';
import styles from './waysToGrow.module.css';

export const WaysToGrow = () => {
    return (
        <div className={styles.rGWaysToGrowContainer}>
            <p className={styles.rGWaysToGrowTitlePTag}>App Insights</p>
            <h2 className={styles.rGWaysToGrowTitleH1Tag}>Ways to grow your wealth</h2>

            <div className={styles.rGWaysToGrowBoxHolder}>
                <div className={styles.rGWaysToGrowH1}>
                    <h1 className={styles.RGaysToGrowH1}>Stocks</h1>
                    <ul className={styles.rGWaysToGrowUlTag}>
                        <li>Discover stocks with smart list and smart filters</li>
                        <li>Access key company information </li>
                        <li>Buy and sell stocks in a single click</li>
                    </ul>
                    <svg id={styles.rGWaysToGrowFafaIcon} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                </div>

                <div className={styles.rGWaysToGrowBox2}>
                    <h1 className={styles.RGaysToGrowH1}>IPOs</h1>
                    <ul className={styles.rGWaysToGrowUlTag}>
                        <li>Discover stocks with smart list and smart filters</li>
                        <li>Access key company information </li>
                        <li>Buy and sell stocks in a single click</li>
                    </ul>
                    <svg id={styles.rGWaysToGrowFafaIcon} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                </div>

                <div className={styles.rGWaysToGrowBox3}>
                    <h1 className={styles.RGaysToGrowH1}>Features & Options </h1>
                    <ul className={styles.rGWaysToGrowUlTag}>
                        <li>Pay just upto ₹20* per order</li>
                        <li>Swith between Trading View & Charts IQ</li>
                        <li>Place GTT orders till contract expiry</li>
                    </ul>
                    <svg id={styles.rGWaysToGrowFafaIcon} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                </div>

                <div className={styles.rGWaysToGrowBox4}>
                    <h1 className={styles.RGaysToGrowH1}>Mutual Funds</h1>
                    <ul className={styles.rGWaysToGrowUlTag}>
                        <li>Zero Commission Investing</li>
                        <li>SIP investment start at ₹100/month </li>
                        <li>Discover tax-saving funds easily</li>
                    </ul>
                    <svg id={styles.rGWaysToGrowFafaIcon} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};
