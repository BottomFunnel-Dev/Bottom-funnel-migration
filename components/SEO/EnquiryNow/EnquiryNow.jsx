import React from "react";
import styles from "./EnquiryNow.module.css";
import Image from "next/image";
import { PopupForm } from "../../PopupForm/PopupForm";

export default function EnquiryNow() {
  return (
    <div className={styles._EnquiryNowMaindiv}>
      <div className={styles._EnquiryNow}>
        <Image
            src={"/Images/seopages/seoenquery.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%"}}
          /> 
      </div>
      <div className={styles._EnquiryNow}>
        <h3>
          We help your business to be discovered by the people and not just
          spiders
        </h3>
        <p>
        With our SEO services, you can rest assured that we will be targeting the biggest keywords in your industry, ensuring that yours ranks high in search results. We are an expert team with years of experience and know-how, which ensures that we deliver results quickly and efficiently. Our freelancers are well-versed in all aspects of SEO and know how to implement strategies that work best for each specific site. With our services, you can be sure to gain more visibility online and increase customer conversion rates!
        </p>
       <button
       type="button"
       data-bs-toggle="modal"
       data-bs-target="#staticBackdrop"
       >Enquiry Now</button>

<div
          className="modal fade"
          id="staticBackdrop1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
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
    </div>
  );
}
