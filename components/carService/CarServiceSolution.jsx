import Image from 'next/image';
import React from 'react';
import { PopupForm } from '../PopupForm/PopupForm';
import styles from "./CarServiceSolution.module.css"

export default function CarServiceSolution () {
  const CarServicedata = [
    {
      icon: "/Images/CarService/BannersBackgrounds/picture6.webp",
      htxt: "90 min Car service",
      stxt: "Experience Quick Service Which Completes In just 90 Minutes,Which will help you Save Your Precious Time And Efforts of Visiting Workshops to Get Your Car Serviced."
    },

    {
      icon: "/Images/CarService/BannersBackgrounds/picture5.webp",
      htxt: "In House Technicians",
      stxt: "Metre Per Second Recruits Best in class German Car Technicians with a Minimum of 8+ years of experience amd train Them. After enabling Them with Garage Nations standards They are Assigned for Services/Repairs."
    },

    {
      icon: "/Images/CarService/BannersBackgrounds/picture4.webp",
      htxt: "Savings upto 40%",
      stxt: "Metre per second provides 100% Transparent Services Which Means All Parts are opened Right In front of You while performing Service and No more Surprised Or Extra Spares or Costs."
    },

    {
      icon: "/Images/CarService/BannersBackgrounds/picture.webp",
      htxt: "Multiple Payment Options",
      stxt: "Experience Quick Service Which Completes In just 90 Minutes,Which will help you Save Your Precious Time And Efforts of Visiting Workshops to Get Your Car Serviced."
    },


    {
      icon: "/Images/CarService/BannersBackgrounds/picture (2).webp",
      htxt: "Report & Analytics",
      stxt: "Metre Per Second Recruits Best in class German Car Technicians with a Minimum of 8+ years of experience amd train Them. After enabling Them with Garage Nations standards They are Assigned for Services/Repairs."
    },


    {
      icon: "/Images/CarService/BannersBackgrounds/picture3.webp",
      htxt: "Easy Tracking ",
      stxt: "Metre per second provides 100% Transparent Services Which Means All Parts are opened Right In front of You while performing Service and No more Surprised Or Extra Spares or Costs."
    },
  ]

  return (
    <div className={styles.Carservicemainbox}>
      <div className={styles.Carservicetextbox}>
        <h1> Our Services</h1>
        <h2>
            Great Car Service Solutions That We Offer
        </h2>
      </div>

      <div className={styles.Carservicebackgroundimage}>
        {CarServicedata.map((el) => {
          return (
            <div className={styles.Carserviceboxesmap}>
              <div className={styles.Carserviceinnerbox}>
                <Image src={el.icon}
                  alt={"icon image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <div>
                <h5> {el.htxt} </h5>
                <p> {el.stxt} </p>
              </div>
            </div>
          )
        })}
      </div>
      <button className={styles.Carservicesolutionbutton}
       type="button"
       data-bs-toggle="modal"
       data-bs-target="#staticBackdrop"
      >Get started</button>

          <div
            className="modal fade"
            id="staticBackdropcarrental"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div>
                  <PopupForm/>
                </div>
              </div>
            </div>
          </div>  

    </div>
  );
};
