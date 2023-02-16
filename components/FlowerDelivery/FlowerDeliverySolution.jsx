import React, { useState } from 'react';
import styles from "./FlowerDeliverySolution.module.css";

const FlowerDeliverySolution = () => {
  const [imageChange, setImageChange] = useState("/Images/Flowerdeliverypage/Easyregister.webp")

  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
  }

  const flowerdeliverysolutiondata = [
    {
      mimg: "/Images/Flowerdeliverypage/Easyregister.webp",
      htxt: "Easy Registration",
      stxt: "The easiest way to ensure that customers register and complete their registration process is to use a registration form. This form should be designed so that it is simple and straightforward."
    },

    {
      mimg: "/Images/Flowerdeliverypage/DriverProfile.webp",
      htxt: "Buy Flowers",
      stxt: "The customer opens the flower store website and browses through the available products. The customer selects the product they wish to buy and adds it to their cart. and submits their order."
    },

    {
      mimg: "/Images/Flowerdeliverypage/Multiplepaymentoption.webp",
      htxt: "Multiple Payment Options",
      stxt: "Yes, the customer can track their order using the Order Tracking feature available on the bottom funnel App. The customers have to enter their order number or mobile number to track their order."
    },

    {
      mimg: "/Images/Flowerdeliverypage/Trackorder.webp",
      htxt: "Tracking Details",
      stxt: "At Bottom Funnel, we understand that getting your flowers delivered on time. That's why we offer our convenient flower delivery service. With our service, you can assured that will be delivered fresh and on time."
    },
  ]

  return (
    <div className={styles.flowerdeliverysolutionmainbox}>
      <div className={styles.flowerdeliveryappsolutionboxfortext}>
        <h2> A SNEAK-PEEK OF OUR </h2>
        <h1> Flower Delivery App Solution </h1>
        <br></br>

        <button className={styles.flowerdeliverysolutionbutton}> Get Started </button>
      </div>
    </div>
  );
};

export default FlowerDeliverySolution
