import React from "react";
import career from "./CareerBanner.module.css";
import Image from "next/image";

export default function CareerBanner() {
  return (
    <div className={career.careerBannerMain}>
      <div className={career.careerBannerImage}>
        <Image
          src={"/Images/careerPhotos/banner.webp"}
          alt={"Bannerimage"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className={career.careerBannerContent}>
        <h1>
          Work With the best In <span>Bottom Funnel</span>
        </h1>
        <hr />
        <p>
          Bottom Funnel is changing the way people think about their online
          presence. Our innovations are helping them to connect, build a
          reputation, and make a name for themselves in a world that's becoming
          more and more digital by the day. Join us and become part of our next
          big thing.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
}
