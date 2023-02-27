import Image from "next/image";
import React from "react";
import { PopupForm } from "../PopupForm/PopupForm";
import styles from "./tradingInvestingHeader.module.css";

export const TradingInvestingHeader = () => {
  return (
    <div className={styles.RGtradingInvestingMainContainer}>
      <div className={styles.RGtradingInvestingLeftContainer}>
        <h1>Trading & Investing App</h1>
        <p>
          Get a solution to build your own app from scratch using trading and
          investing as the main feature. We offer both the Android and iOS
          versions of our software, so you can deploy it across all your
          devices. With our easy-to-use interface, you'll be up and running in
          no time!
        </p>
        <button className={styles.RGTIbtn}
        
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        
        >Get started</button>

        <div
        className="modal fade"
        id="staticBackdrop"
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

      <div className={styles.RGtradingInvestingRightContainer}>
        <Image
          src="/Images/Trading-investing-App/banners-backgrounds/banner.webp"
          alt="Trading-investing-App/banners-backgrounds/banner.webp"
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "80%", height: "fit-content" }}
        />
      </div>
    </div>
  );
};
