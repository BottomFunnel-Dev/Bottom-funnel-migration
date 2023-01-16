import React from "react";
import styles from './SeoEmailreviews.module.css';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { IconContext } from "react-icons/lib";

function SeoEmailReviews() {
    return (
        <div className={styles.seoEmailReviewsmaindiv}>
            <div className={styles.seoEmailReviews1}>
                <div className={styles.seoEmailCompanyRatings}>
                    <img src={Volkswagen} alt="image" />
                    <div className={styles.seoEmailRatingStar}>
                        <IconContext.Provider value={{ className: styles.ratingEmailIcons }}>
                            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                        </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>

            <div className={styles.seoEmailReviews1}>
                <div className={styles.seoEmailCompanyRatings}>
                    <img src={Volkswagen} alt="image" />
                    <div className={styles.seoEmailRatingStar}>
                        <IconContext.Provider value={{ className: styles.ratingEmailIcons }}>
                            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                        </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews</p>
            </div>

            <div className={styles.seoEmailReviews1}>
                <div className={styles.seoEmailCompanyRatings}>
                    <img src={Volkswagen} alt="image" />
                    <div className={styles.seoEmailRatingStar}>
                        <IconContext.Provider value={{ className: styles.sratingEmailIcons }}>
                            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                        </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>

            <div className={styles.seoEmailReviews1}>
                <div className={styles.seoEmailCompanyRatings}>
                    <img src={Volkswagen} alt="image" />
                    <div className={styles.seoEmailRatingStar}>
                        <IconContext.Provider value={{ className: styles.ratingEmailIcons }}>
                            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                        </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
        </div>
    );
};

export default SeoEmailReviews;