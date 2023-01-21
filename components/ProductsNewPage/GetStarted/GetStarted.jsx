import React from 'react';
import styles from "./GetStarted.module.css";

export const GetStarted = () => {
    return (
        <div className={styles.productsGetStartedParentDiv}>
            <div className={styles.productGetStartedInnerDiv}>
                <div className={styles.productGetStartedContentDiv}>
                    <h2>
                        Ready to get started ?
                    </h2>

                    <p>
                        Join our community of 50,000+ companies of all sizes who use BottomFunnel Saas products to make
                        it fast and easy to delight their customers and employess.
                    </p>
                </div>

                <div className={styles.productGetStartedImageDiv}>
                    <img src='/Images/ProductsPage/ReadyToStarted.png' alt='image' />
                </div>
            </div>
        </div>
    )
}
