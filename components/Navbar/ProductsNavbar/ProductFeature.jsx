import React from "react";
import featurestyle from  "./ProductFeature.module.css";
import  Link  from "next/link";
import { productFeatures } from "../../../Data/Navbar";
export const ProductFeature = ({ solFeaIn, solFeaOut, scroll }) => {
  return (
    <div
      onMouseEnter={solFeaIn}
      onMouseLeave={solFeaOut}
      className={featurestyle.productFeatureMainDiv}
      style={{ top: scroll ? "6.5%" : "15%" }}
    >
      <div className={featurestyle.productFeatureListItems} style={{ width: "100%" }}>
        {productFeatures.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              // navigate(`/${item.path}`);
              solHoverOut();
            }}
            className={featurestyle.productFeatureData}
          >
            <Link onClick={solFeaOut} to={item.path} className={featurestyle.productlinkP}>
              <p>{item.dropContent}</p>
            </Link>
          </div>
        ))}
        <button>View all features</button>
      </div>
    </div>
  );
};
