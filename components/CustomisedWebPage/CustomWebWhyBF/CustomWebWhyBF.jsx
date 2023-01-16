import React from "react";
import styles from "./CustomWebWhyBF.module.css";

export const CustomWebWhyBF = () => {
  const cardData = [
    {
      title: "Our Team Are In-Demand",
      body: "Bottom funnel is certainly not a term that your clients would understand, but it is an apt description of the way they approach their online marketing efforts.",
    },
    {
      title: "Our Team Earn a Great Living",
      body: "In Bottom Funnel our team of engineers and designers has years of experience creating top-notch experiences that delight customers across all channels.",
    },
    {
      title: "Our Team Have Diverse Opportunities",
      body: "Bottom Funnel is a solution for those who have Potential in them. We offer web development and app development services, so you can get the skills you need in order to succeed.",
    },
    {
      title: "Get to Be Creative",
      body: "As a front-end web developer at Bottom Funnel, you'll work closely with our user experience experts to decide on layout, and features for our website and/or web application.",
    },
    {
      title: "Flexibility",
      body: "Bottom Funnel is a perfect option for you. We provide the best web development services that will help you build your career in this field.",
    },
    {
      title: "Great user experience",
      body: "Bottom Funnel is a full stack development company that works across various platforms and sites to create top-notch seo friendly websites that are user-friendly and appealing.",
    },
  ];

  return (
    <div className={styles.CustomWebWhyBFMain}>
      <h1>
        Why Bottom Funnel For Customised <span>Web Development</span>
      </h1>
      <div className={styles.CustomWebSolutionsHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className={styles.CustomWebWhyBFContainer}>
        <div className={styles.CustomWebWhyBFContent}>
          {cardData.map(({ title, body }, idx) => {
            return (
              <div>
                <h4>{title}</h4>
                <div>
                  <p>{body}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.CustomWebWhyBFImage}>
          <img
            src="Images/customWebPhotos/whyBF.png"
            alt="Vector big size image"
          />
        </div>
      </div>
    </div>
  );
};
