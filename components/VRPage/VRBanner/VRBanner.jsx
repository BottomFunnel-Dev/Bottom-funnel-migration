
import React, { useState } from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import styles from "./VRBanner.module.css";

export const VRBanner = () => {

  return (
    <div className={styles.VRBannerMain}>
      <h1>
        Change your virtual game with our best in class virtual reality services
      </h1>
      <div className={styles.VRBannerHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsam
        facere recusandae ratione excepturi, sunt iusto provident explicabo quos
        cum temporibus beatae quasi ipsum quisquam accusantium sint officia
        consectetur quia!
      </p>
      <button
         
         type="button"
         data-bs-toggle="modal"
         data-bs-target="#staticBackdrop"
       >
         Request A Quote
       </button>

       <div
         className="modal fade"
         id="staticbackdropds"
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
               <PopupForm />
             </div>
           </div>
         </div>
       </div>

   
    </div>
  );
};
