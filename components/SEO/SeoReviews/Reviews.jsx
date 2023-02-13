import React from "react";
import styles from './Reviews.module.css';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { IconContext } from "react-icons/lib";
import Image from "next/image";

function Reviews() {
    return (

        <div className={styles._SeoReviewsmaindiv}>
            <div className={styles._SeoReviews1}>
                <div className={styles._SeoCompanyRatings}>
                    <div className={styles.ratingImg}>
                    <Image
                    src={"/Images/seopages/rating1.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%"}}
                    />
                    </div>
                    <div className={styles._SeoRatingStar}>
                        <IconContext.Provider value={{ className: styles.ratingIcons }}>
                            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                        </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
            <div className={styles._SeoReviews1}>
                <div className={styles._SeoCompanyRatings}>
                    <div className={styles.ratingImg}>

                    <Image
                        src={"/Images/seopages/clutch.webp"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                    />
                    </div>
                    <div className={styles._SeoRatingStar}>
                        <IconContext.Provider value={{ className: styles.ratingIcons }}>
                            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                        </IconContext.Provider>
                    </div>

                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews</p>
            </div>
            <div className={styles._SeoReviews1}>
                <div className={styles._SeoCompanyRatings}>
                    <div className={styles.ratingImg}>

                        <Image
                        src={"/Images/seopages/rating3.webp"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                    />
                    </div>
                    <div className={styles._SeoRatingStar}>
                        <IconContext.Provider value={{ className: styles.ratingIcons }}>
                            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                        </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
            <div className={styles._SeoReviews1}>
                <div className={styles._SeoCompanyRatings}>
                    <div className={styles.ratingImg}>

                        <Image
                        src={"/Images/seopages/rating4.webp"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%"}}
                    />
                    </div>
                    <div className={styles._SeoRatingStar}>
                        <IconContext.Provider value={{ className: styles.ratingIcons }}>
                            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                        </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>

        </div>
    )
}
export default Reviews