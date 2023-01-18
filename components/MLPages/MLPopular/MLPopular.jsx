import React from "react";
import styles from "./MLPopular.module.css";

export const MLPopular = () => {
  const cardsData = [
    {
      title: "Natural Language Processing",
      body: "Frustrated with websites that just don't understand you and your business? Meet Bottom Funnel - a leading provider of all-in-one semantic solutions for web apps and social platforms. We aim to deliver advanced solutions that derive semantic information from human language and speech on the web.",
      image: "Images/MLPhotos/language.png",
    },
    {
      title: "Robotic Process Automation",
      body: "We are experts in machine learning and programming, and we understand the complexities involved in creating a bot that can be effective at tasks like driving sales or customer service. Not only that, our team is also capable of understanding your business needs and offering strategic solutions based on them.",
      image: "Images/MLPhotos/rpa.png",
    },
    {
      title: "Data Mining",
      body: "Bottom Funnel is the answer to all your data analysis questions. We use statistical and mathematical techniques to develop algorithms for analyzing a variety of row data sources and helping in discovering meaningful corrections and patterns. In addition, we help you in making diversions related to your business.",
      image: "Images/MLPhotos/mining.png",
    },
    {
      title: "Enterprise Security",
      body: "We utilize the power of machine learning to analyze the huge volume of data for spotting signs and vulnerabilities of an enterprise security breach. Our advanced algorithms allow us to spot patterns and anomalies in your organization's infrastructure that will help you assess potential vulnerabilities.",
      image: "Images/MLPhotos/security.png",
    },
    {
      title: "Deep Learning",
      body: "Our machine learning developers have forged strong relationships with leading universities and universities worldwide to ensure they are on pace with changing AI trends. Our team members are constantly working to improve their skills by attending conferences and workshops that focus on deep learning techniques and AI application development.",
      image: "Images/MLPhotos/learning.png",
    },
  ];

  return (
    <div className={styles.MLPopularMain}>
      <h1>Popular Machine Learning Services</h1>
      <div className={styles.MLPopularHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Machine learning is a subfield of artificial intelligence that involves
        mimicking intelligent human behavior. AI systems are now used to perform
        complex tasks in a way that is similar to how humans solve problems.
      </p>
      <div className={styles.MLPopularContent}>
        {cardsData.map(({ title, body, image }) => {
          return (
            <div key={title}>
              <div className={styles.MLPopularCardsContent}>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
              <div className={styles.MLPopularCardsImages}>
                <img src={image} alt={title} />
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.MLPopularButton}>
        <h3>Talk with our experts in Machine Learning to get started</h3>
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-envelope-exclamation"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1.5a.5.5 0 0 1-1 0V11a.5.5 0 0 1 1 0Zm0 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
