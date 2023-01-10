import React from "react";
import "./softwarebanner.css";
export const SoftwareBanner = () => {
  return (
    <div className="softwareBanner">
      <div className="javaIcon">
        {" "}
        <img src="Images/banner/webdev/java.png" alt="" />
      </div>
      <div className="jqueryIcon">
        {" "}
        <img src="Images/banner/webdev/jquery.png" alt="" />
      </div>
      <div className="jsIcon">
        {" "}
        <img src="Images/banner/webdev/js.png" alt="" />
      </div>
      <div className="nodeIcon">
        {" "}
        <img src="Images/banner/webdev/node.png" alt="" />
      </div>
      <div className="reactIcon">
        {" "}
        <img src="Images/banner/webdev/react.png" alt="" />
      </div>
     
    </div>
  );
};
