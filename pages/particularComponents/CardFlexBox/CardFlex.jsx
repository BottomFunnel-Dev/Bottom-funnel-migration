import React from "react";
import "./cardFlex.css";

const cardFlex = {
  carddata: [
    {
      cardtitle: "Card Title",
      CardDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id, libero amet voluptate dolore natus totam minima saepe ut nemo officia autem corporis alias expedita a accusantium, impedit eligendi iste adipisci. Nam voluptatum sed voluptatibus debitis, veritatis sequi. Dicta, consequatur.",
      cardIcon: "Images/card/Images",
    },
    {
      cardtitle: "Card Title",
      CardDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id, libero amet voluptate dolore natus totam minima saepe ut nemo officia autem corporis alias expedita a accusantium, impedit eligendi iste adipisci. Nam voluptatum sed voluptatibus debitis, veritatis sequi. Dicta, consequatur.",
      cardIcon: "Images/card/Images",
    },
    {
      cardtitle: "Card Title",
      CardDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id, libero amet voluptate dolore natus totam minima saepe ut nemo officia autem corporis alias expedita a accusantium, impedit eligendi iste adipisci. Nam voluptatum sed voluptatibus debitis, veritatis sequi. Dicta, consequatur.",
      cardIcon: "Images/card/Images",
    },
    {
      cardtitle: "Card Title",
      CardDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id, libero amet voluptate dolore natus totam minima saepe ut nemo officia autem corporis alias expedita a accusantium, impedit eligendi iste adipisci. Nam voluptatum sed voluptatibus debitis, veritatis sequi. Dicta, consequatur.",
      cardIcon: "Images/card/Images",
    },
  ],
};

export const CardFlex = ({ cardflexContent }) => {
  return (
    <div className="cardFlexmain">
      {cardflexContent.carddata.map(() => (
        <div className="card-flex-main"></div>
      ))}
    </div>
  );
};
