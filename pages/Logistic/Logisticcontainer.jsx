import React from "react";
import "./Logicsticcontainer.css";

export default function Logisticcontainer() {
  return (
    <div className="szlogisticcontainer">
      <div className="szlogisticsubcontainer">
        <div className="szlogisticleft">
          <div>
            <h1>Logistics & Transportation Software Devlopment</h1>
            <p>
            You are in the right place! Our team of experts has vast experience creating modern websites that look great on any device. We build them with mobile-first approach and use best practices to ensure your site works well on all devices. Using our expertise, you will get an app-like navigation, responsive design, and more.
            </p>
            <button className="szlogisticbtn">Get Started</button>
          </div>
        </div>

        <div className="szlogisticright">
          <div className="szrecpurple">
            {" "}
            <img src="Images/logistic/logistic.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
