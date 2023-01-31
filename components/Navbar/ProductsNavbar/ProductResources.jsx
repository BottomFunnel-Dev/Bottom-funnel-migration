import React from "react";
import resource from  "./ProductResources.module.css";
import  Link  from "next/link";
import { productResources } from "../../../Data/Navbar";
export const ProductResources = ({ solResIn, solResOut, scroll }) => {
  return (
    <div
      onMouseEnter={solResIn}
      onMouseLeave={solResOut}
      className={resource.productResourceMainDiv}
      style={{ top: scroll ? "6.5%" : "16%" }}
    >
      <div className={resource.productResourceListItems} style={{ width: "100%" }}>
        {productResources.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              // navigate(`/${item.path}`);
              solResOut();
            }}
            className={resource.productResourceData}
          >
            <Link onClick={solResOut} href={item.path} className={resource.productlinkP}>
              <p>{item.dropContent}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
