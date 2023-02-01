import React from "react";
import salestyle from "./SalesFeature.module.css";
import Link  from "next/link";
import { salesFeatures } from "../../../Data/Navbar";
export const SalesFeature = ({ saleFeaIn, saleFeaOut, scroll }) => {
  return (
    <div
      onMouseEnter={saleFeaIn}
      onMouseLeave={saleFeaOut}
      className={salestyle.productFeatureMainDiv}
      style={{ top: scroll ? "6.5%" : "15%" }}
    >
      <div className={salestyle.productFeatureListItems} style={{ width: "100%" }}>
        {salesFeatures.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              // navigate(`/${item.path}`);
              saleFeaOut();
            }}
            className={salestyle.productFeatureData}
          >
            <Link onClick={saleFeaOut} href={item.path} className={salestyle.productlinkP}>
              <p>{item.dropContent}</p>
            </Link>
          </div>
        ))}
        <button>View all features</button>
      </div>
    </div>
  );
};
