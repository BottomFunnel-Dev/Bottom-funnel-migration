import React from "react";
import stylesale from "./SalesResources.module.css";
import  Link  from "next/link";
import { salesResources } from "../../../Data/Navbar";
export const SalesResources = ({ saleResIn, saleResOut, scroll }) => {
  return (
    <div
      onMouseEnter={saleResIn}
      onMouseLeave={saleResOut}
      className={stylesale.saleResourceMainDiv}
      style={{ top: scroll ? "6.5%" : "15%" }}
    >
      <div className={stylesale.saleResourceListItems} style={{ width: "100%" }}>
        {salesResources.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              // navigate(`/${item.path}`);
              solHoverOut();
            }}
            className={stylesale.saleResourceData}
          >
            <Link onClick={saleResOut} to={item.path} className={stylesale.productlinkP}>
              <p>{item.dropContent}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
