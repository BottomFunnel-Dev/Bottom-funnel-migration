import React, { useState } from 'react';
import styles from "./FlowerDeliverySolution.module.css";

const FlowerDeliverySolution = () => {
  const [imageChange, setImageChange] = useState("/Images/Flowerdeliverypage/Easyregister.png")

  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
  }

  const flowerdeliverysolutiondata = [
    {
      mimg: "/Images/Flowerdeliverypage/Easyregister.png",
      htxt: "Easy Registration",
      stxt: "The easiest way to ensure that customers register and complete their registration process is to use a registration form. This form should be designed so that it is simple and straightforward."
    },

    {
      mimg: "/Images/Flowerdeliverypage/DriverProfile.png",
      htxt: "Buy Flowers",
      stxt: "The customer opens the flower store website and browses through the available products. The customer selects the product they wish to buy and adds it to their cart. and submits their order."
    },

    {
      mimg: "/Images/Flowerdeliverypage/Multiplepaymentoption.png",
      htxt: "Multiple Payment Options",
      stxt: "Yes, the customer can track their order using the Order Tracking feature available on the bottom funnel App. The customers have to enter their order number or mobile number to track their order."
    },

    {
      mimg: "/Images/Flowerdeliverypage/Trackorder.png",
      htxt: "Tracking Details",
      stxt: "At Bottom Funnel, we understand that getting your flowers delivered on time. That's why we offer our convenient flower delivery service. With our service, you can assured that will be delivered fresh and on time."
    },
  ]

  return (
    <div className={styles.flowerdeliverysolutionmainbox}>
      <div className={styles.flowerdeliveryappsolutionboxfortext}>
        <h2>A SNEAK-PEEK OF OUR</h2>
        <h1>Flower Delivery App Solution</h1>
        <br></br>
        <button className={styles.flowerdeliverysolutionbutton}>Get Started</button>
      </div>

      {/* <div className={styles.flowerdeliverysolutionflexbox}>
        <div className={styles.flowerdeliverysolutionflexboxleft}>
          <h2>Customer App</h2>
          {flowerdeliverysolutiondata.map((el) => {
            return (
              <div className={styles.flexboxingmappingdivleftforserviceflower}
                key={el.htxt} onMouseEnter={() => {
                  handleImageChange(el.mimg)
                }}
              >
                <h4>{el.htxt}</h4>
                <p>{el.stxt}</p>
              </div>
            )
          })}
        </div>

        <div className={styles.flowerdeliverysolutionflexboxright}>
          <div className={styles.flowerdeliverysolutionflexboxrightinnerimageone}>
            <img src='/Images/Flowerdeliverypage/Rectangle4191.png' alt='image 1' />
          </div>

          <div className={styles.flowerdeliverysolutionflexboxrightinnerimagetwo}>
            <img src={imageChange} alt='image 2' />
          </div>

        </div>
      </div> */}
    </div>
  );
};

export default FlowerDeliverySolution
