import React from "react";
import clients from "./ClientBanner.module.css";

export const ClientBanner = () => {
  return (
    <div className={clients.ourClientBannerMain}>
      <div className={clients.ourClientBannerContent}>
        <h1>Our Client</h1>
        <p>
          Bottom Funnel is such a transparent name for them. It has become the
          synonym of trust when it comes to buying and selling products online.
          Bottom Funnel becomes the first choice of customers in this digital
          age.
        </p>
        <button>Become Client</button>
      </div>

      <div className={clients.ourClientBannerImage}>
        <img
          src="/Images/ourclientPhotos/banner.png"
          alt="Our Client page banner"
        />
      </div>
    </div>
  );
};
