import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SeoEmailblog.module.css";
import blog1 from '../ImageSection/Blog1.jpg';
import blog2 from '../ImageSection/Blog2.jpg';
import blog3 from '../ImageSection/Blog3.jpg';
export default function SeoEmailblogs() {

    return (
        <div className={styles._SeoEmailblogs12}>
            <h1>BLOGS</h1>
            <div className={styles._SeoEmailblogs}>
                <div className={styles._SeoEmailblogs1}>
                    <div className={styles._SeoEmailblogsimage}>
                        <img src={blog1} alt="image" />
                    </div>
                    <div className={styles._SeoEmailblogstext}>
                        Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>

                <div className={styles._SeoEmailblogs1}>
                    <div className={styles._SeoEmailblogsimage}>
                        <img src={blog2} alt="image"/>
                    </div>
                    <div className={styles._SeoEmailblogstext}>
                        Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>

                <div className={styles._SeoEmailblogs1}>
                    <div className={styles._SeoEmailblogsimage}>
                        <img src={blog3} alt="image"/>
                    </div>

                    <div className={styles._SeoEmailblogstext}>
                        Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>

                <div className={styles._SeoEmailblogs1}>
                    <div className={styles._SeoEmailblogsimage}>
                        <img src={blog1} alt="image" />
                    </div>
                    <div className={styles._SeoEmailblogstext}>
                        Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
            </div>
        </div>
    );
}