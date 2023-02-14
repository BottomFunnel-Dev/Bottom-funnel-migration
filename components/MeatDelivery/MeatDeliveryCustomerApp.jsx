import Image from 'next/image';
import React from 'react'
import styles from "./MeatDeliveryCustomerApp.module.css"

export const MeatDeliveryCustomerApp = () => {

  const meatcustomerappdata = [

    {
      htxt: "Can be easily accessed through both android/iOS",
      stxt: "It is a cross platform application which gives ease to customer of accessing it through both android and iOS"
    },

    {
      htxt: "User-Friendly Interface",
      stxt: "It has easy to understand templates and customisable app designs to give the customer comfort of use."
    },

    {
      htxt: "Order food and track their service",
      stxt: "Customer can easily order their favourite food an d track when the food will get prepared and delivered."
    },

    {
      htxt: "Smart search and add to your favorites list",
      stxt: "The app will give suggestion based on what customers can alsi add their favourite dishes in to avoid repetitive searches."
    },

  ]


  return (
    <div className={styles.meatdeliverycustomerappmainboxes}>
      <div className={styles.meatdeliverycustomerapptextbox}>
        <h1>
          SOLUTION FOR YOUR <span className={styles.specialcolor}> MEAT DELIVERY APP </span>
        </h1>
      </div>

      <div className={styles.customerapponlyformeatdeliveryapp}>
        <div className={styles.customerappmeatdeliveryappleftbox}>
          <div className={styles.meatdeliverycustomerappmobilebox}>
            <Image src={'/Images/meatdelieveryapp/Rectangle.png'}
              alt={'images'}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <div className={styles.customerappmeatdeliveryapprightbox}>
          <div className={styles.customerappmeatdeliveryapprightboxfortext}>
            <h2 className={styles.specialcolor}>Customer Application</h2>
          </div>

          <div className={styles.meatappflexingforrightdiv}>{meatcustomerappdata.map((e) => {
            return (
              <div className={styles.meatdeliverymappingboxes}>
                <h3> {e.htxt} </h3>
                <p> {e.stxt} </p>
              </div>
            )
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

