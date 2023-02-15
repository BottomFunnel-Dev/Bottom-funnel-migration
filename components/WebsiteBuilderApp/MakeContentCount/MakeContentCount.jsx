import React from 'react';
import styles from "./MakeContentCount.module.css";

export const MakeContentCount = () => {
    return (
        <div className={styles.makeContentCountParentDiv}>
            <div className={styles.makeContentCountContentMainDiv}>
                <h1> Make every piece of content count </h1>

                <p>
                    Whenever you're publishing or posting content, now you can optimize it all for business growth.
                    Turn your hard-won web traffic into more leads and sales with a compplete conversion toolkit, including:
                </p>

                <div className={styles.makeContentCountOptionsDiv}>
                    <div className={styles.makeContentCountOptionInnerDiv1}>
                        <button className={styles.makeContentCountPopupButton}> Pop-ups </button>
                        <button className={styles.makeContentCountAlertButton}> Alert Bars </button>
                    </div>

                    <div className={styles.makeContentCountOptionInnerDiv2}>
                        <button className={styles.makeContentCountCheckoutButton}> Checkout Forms </button>
                        <button className={styles.makeContentCountMoreButton}> And More  </button>
                    </div>
                </div>
            </div>

            <div className={styles.makeContentCountImageMainDiv}>
                <div className={styles.makeContentImageDivBackImage}>
                    <img src='/Images/WebsiteBuilderApp/LeftSideBackgroundImage.webp' alt="image" />

                    <div className={styles.makeContentImageDivTopImage}>
                        <img src='/Images/WebsiteBuilderApp/TopCompImage.webp' alt='image' />
                    </div>
                </div>

            </div>
        </div>
    );
};
