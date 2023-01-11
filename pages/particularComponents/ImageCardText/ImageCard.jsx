import React from "react";
import "./imageCard.css";
import { useNavigate } from "react-router-dom";
export const ImageCard = ({ cardContent, closeDisplay }) => {
  const navigate = useNavigate();
  return (
    <div
      className="imageCard"
      onClick={() => {
        navigate(`/${cardContent.path}`);
        closeDisplay();
      }}
    >
      <div className="cardImageSection">
        <img src={cardContent.cardImg} alt="" />
      </div>
      <div className="card_text">
        <h5>{cardContent.title}</h5>
        <p>{cardContent.description}</p>
      </div>
    </div>
  );
};
