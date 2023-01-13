import React from "react";
import "./AboutusBanner.css";

export const AboutusBanner = () => {
  return (
    <div className="about-us-Banner">
      <div className="about-us-banner-image">
        <img src="/Images/aboutusImage/banner.jpg" alt="About us banner" />
      </div>
      <div className="about-us-banner-content">
        <h1>
          Build Your Brands presence With{" "}
          <span className="about-us-animated-title">BOTTOM FUNNEL</span>
        </h1>
        <hr />
        <p>
          Welcome to Bottom Funnel, the world's leading app development company
          for fintech and startup companies. We pride ourselves on delivering
          unparalleled value to our partners, through our experience and
          expertise in the field.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
};
