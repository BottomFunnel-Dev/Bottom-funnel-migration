import React from "react";
import awards from "./AwardsCardes.module.css";
import Image from "next/image";

export const AwardsCardes = ({ data }) => {
  return (
    <div className={awards.awardsCardesMain}>
      <div className={awards.awardsCardesimage} style={{ background: data.hex }}>
        <div>
          <Image
              src={data.image}
              alt={"awardimage"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "fit-content" }}
              />
        </div>
      </div>
      <div className={awards.awardsCardesContent}>
        <h2>{data.title}</h2>
      </div>
    </div>
  );
};
