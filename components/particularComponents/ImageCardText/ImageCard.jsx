import React from "react";
import styles from "./imageCard.module.css";
// import { useNavigate } from "react-router-dom";
export const ImageCard = ({ cardContent, closeDisplay }) => {
  // const navigate = useNavigate();
  return (
    <Link href={`/${cardContent.path}`}>
      <div
        className={styles.imageCard}
        onClick={() => {
          closeDisplay();
        }}
      >
        <div className={styles.cardImageSection}>
          <img src={cardContent.cardImg} alt="image" />
        </div>
        <div className={styles.cardText}>
          <h5>{cardContent.title}</h5>
          <p>{cardContent.description}</p>
        </div>
      </div>
    </Link>
  );
};
