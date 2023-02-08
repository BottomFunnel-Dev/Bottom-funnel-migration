import React from "react";
import awards from "./AwardsBanner.module.css";
import Image from "next/image";

export const AwardsBanner = () => {
  return (
    <div className={awards.awardsBannerMain}>
      <div className={awards.awardsBannerContentMain}>
        <div className={awards.awardsbannerContent}>
          <h1>Awards & Memberships</h1>
          <p>
            In recognition of our continuous learning process and the innovative
            business solutions that have benefited most of our clients, we are
            awarded the Bar of Success badge, which, as a result, increases our
            level of excellence. We sync daily.
          </p>
          <button>Contact us</button>
        </div>

        <div className={awards.awardsbannerImage}>
          {/* <img src="/Images/AwardsPhotos/banner.png" alt="Awards vector" /> */}
          <Image
              src={"/Images/AwardsPhotos/banner.webp"}
              alt={"awardimage"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              />
        </div>

      </div>
    </div>
  );
};
