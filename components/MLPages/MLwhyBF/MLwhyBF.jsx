import React from "react";
import styles from "./MLwhyBF.module.css";

export const MLwhyBF = () => {
  const cardsData = [
    {
      title: "IT Security",
      body: "Bottom Funnel is proud to partner with top global brands to provide them with state-of-the-art security solutions that are sure to protect your data from any threat. We offer comprehensive solutions for enterprises, government agencies, schools, hospitals, and more.",
      image: "Images/MLPhotos/data-protection.png",
    },
    {
      title: "Logistics",
      body: "Logistic regression is not just an advanced method to guess what's in store when you use a credit card online or download new apps on your smartphone; it can also help you calculate the probability of whether someone will be absent for work or attend a meeting on time.",
      image: "Images/MLPhotos/logistics.png",
    },
    {
      title: "Automobile",
      body: "Machine learning algorithm that becomes intelligent on its own? The answer to this question lies in the name of Bottom Funnel. This software application was created with the sole objective of simplifying your workflow and making things easier for you.",
      image: "Images/MLPhotos/car.png",
    },
    {
      title: "Architecture",
      body: "Bottom Funnel utilizes the latest techniques in machine learning to deliver accurate and actionable insights for your business. It is a powerful way to transform raw data into actionable intelligence that can be used to drive growth, predict customer behavior.",
      image: "Images/MLPhotos/sketch.png",
    },
    {
      title: "E-commerce",
      body: "Bottom Funnel is an e-commerce machine learning company that was formed to apply artificial intelligence to improve a company's product recommendation and sales funnel. Machine learning is the creation and refinement of applications and algorithms by AI.",
      image: "Images/MLPhotos/add-to-cart.png",
    },
    {
      title: "Healthcare",
      body: "Bottom Funnel is a healthcare company that uses machine learning for a number of applications, including medical imaging and healthcare robots. Their application uses pattern recognition to find patterns in medical images, which allows doctors to identify abnormalities.",
      image: "Images/MLPhotos/doctor.png",
    },
  ];
  return (
    <div className={styles.MLwhyBFContainer}>
      <div className={styles.MLwhyBFBackgroundRectangle}>
        <img
          src="Images/MLPhotos/rectangle-top.png"
          alt="Background image rectangle top"
        />
        <img
          src="Images/MLPhotos/rectangle-bottom.png"
          alt="Background image rectangle left bottom"
        />
      </div>
      <div className={styles.MLwhyBFMain}>
        <h1>Bottom Funnel Big Data Services</h1>
        <div className={styles.MLPopularHrLine}>
          <span></span>
          <div></div>
          <span></span>
        </div>
        <div className={styles.MLwhyBFCardsContainer}>
          {cardsData.map(({ title, image, body }) => {
            return (
              <div key={title} className={styles.MLwhyBFCardsMain}>
                <div>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
