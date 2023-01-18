import React from "react";
import styles from "./imageCard.module.css";
import Link from "next/link"
// import { useNavigate } from "react-router-dom";
 const ImageCard = ({ cardContent, closeDisplay }) => {
  // const navigate = useNavigate();
  return (
   
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
        <Link href={`/${cardContent.path}`}>
          <h5 style={{color:"#595656"}}>{cardContent.title}</h5>
        </Link>
          <p>{cardContent.description}</p>
        </div>
      </div>
  );
};

export default ImageCard