import React from "react";
import styleind from "./SalesIndustries.module.css";
import  Link  from "next/link";
import { salesIndustries } from "../../../Data/Navbar";
export const SalesIndustries = ({ saleIndIn, saleIndOut, scroll }) => {
  return (
    <div
      onMouseEnter={saleIndIn}
      onMouseLeave={saleIndOut}
      className={styleind.saleIndustriesMainDiv}
      style={{ top: scroll ? "6.5%" : "15%" }}
    >
      <div className={styleind.saleIndustriesListItems} style={{ width: "100%" }}>
        {salesIndustries.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              // navigate(`/${item.path}`);
              saleIndOut();
            }}
            className={styleind.saleIndustriesData}
          >
            <Link onClick={saleIndOut} to={item.path} className={styleind.productlinkP}>
              <p>{item.dropContent}</p>
            </Link>
          </div>
        ))}
        {/* <button>View all features</button> */}
      </div>
    </div>
  );
};
