import React from "react";
import styles from "./DataScienceMethods.module.css";

export const DataScienceMethods = () => {
  const cardsData = [
    {
      title: "Statistic mehtods",
      points: [
        "Descriptive statistics",
        "ARMA",
        "ARIMA",
        "Bayesian inferance, etc.",
      ],
    },
    {
      title: "Non-NN machine learning methods",
      points: [
        "Supervised learning algorithms such as decision trees, linear regression, logistic regression, support vector machines.",
        "Unsupervised learning algorithms, for example, K-means clustering and hierachical clustering.",
        "Reinforcement learning methods, such as Q-learning, SARSA, temporal differences method.",
      ],
    },
    {
      title: "Neural networks including deep learning",
      points: [
        "Convolutional and recurrent neural networks (inclding LSTM and GRU)",
        "Autoencoders",
        "Generative adversarial networks (GANs)",
        "Deep Q-network (DQN)",
        "Bayesian deep learning",
      ],
    },
  ];

  return (
    <div className={styles.DataScienceMethodsContainer}>
      <h1>Methods and Technologies We Use</h1>
      <div className={styles.DataScienceUniqueHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom funnel is a new breed of machine learning that has been applied
        to get insights from your data. With its advanced techniques and
        intricate methods, it offers you accuracy while keeping the costs down.
      </p>
      <div className={styles.DataScienceMehtodsMain}>
        {cardsData.map(({ title, points }) => (
          <div key={title}>
            <h2>{title}</h2>
            <ul>
              {points.map((elem) => (
                <li>{elem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
