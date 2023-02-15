import React from 'react'
import styles from "./Newsfeature.module.css"
import Image from 'next/image';

export const Newsfeature = () => {
  return (
    <div className={styles.newfeaturemainboxes}>
    <div className={styles.newsfeaturelowerbannersometextandimageboxes}>
    <div className={styles.newsfeaturelowerbannersometextboxes}>
    <h1>Bottom Funnel powered features that are loved by content publishers and readers.</h1>
    <p>As a news creator app, Bottom Funnel allows you to quickly create and distribute content that is optimized for the bottom of the funnel. With this app, you can easily create blog posts, infographics, videos, and more that are designed to drive conversions and sales. With Bottom Funnel, you can also track your results and see how your content is performing.</p>
    </div>
    <div className={styles.newsfeaturelowerbannersomeimageboxes}>
        <Image
            src={"/Images/News/Bannerbackground/Group 340281.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
    </div>
    </div>
    </div>
  )
}

