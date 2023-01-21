import React from "react";
import awards from "./AwardsCardes.module.css";

export const AwardsCardes = ({ data }) => {
  return (
    <div className={awards.awardsCardesMain}>
      <div className={awards.awardsCardesimage} style={{ background: data.hex }}>
        <div>
          <img src={data.image} alt="Awards images" />
        </div>
      </div>
      <div className={awards.awardsCardesContent}>
        <h2>{data.title}</h2>
      </div>
    </div>
  );
};
