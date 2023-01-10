import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="newAbout">
      <div className="aboutContent">
        <h1>The Dream Team For Your Digital Needs</h1>
        <p>
          Bottom Funnel is a team of passionate people, driven by one relentless
          pursuit- to craft innovative solutions and deliver unparalleled
          results.
        </p>
      </div>

      <div id="aboutStats1" className="aboutStats">
        <img src="Images/about/aboutbtn.png" alt="" />
        <h1>1000+</h1>
        <p>creative nerds under one roof</p>
      </div>
      <div id="aboutStats2" className="aboutStats">
        <img src="Images/about/aboutbtn.png" alt="" />

        <h1>1000+</h1>
        <p>Products (Apps) Delivered</p>
      </div>
      <div id="aboutStats3" className="aboutStats">
        <img src="Images/about/aboutbtn.png" alt="" />

        <h1>$700m</h1>
        <p>Investment Raised for startups</p>
      </div>
    </div>
  );
};

export default About;
