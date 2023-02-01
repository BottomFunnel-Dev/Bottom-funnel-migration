import React from "react";
import prodstyle from  "./SalesProduct.module.css";
import Link  from "next/link";
import { salesProduct } from "../../../Data/Navbar";
export const SalesProduct = ({ saleProIn, saleProOut, scroll }) => {
  return (
    <div
      onMouseEnter={saleProIn}
      onMouseLeave={saleProOut}
      className={prodstyle.saleProductMainDiv}
      style={{ top: scroll ? "6.5%" : "15%" }}
    >
      <div className={prodstyle.saleProductListItems} style={{ width: "100%" }}>
        {salesProduct.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              // navigate(`/${item.path}`);
              solHoverOut();
            }}
            className={prodstyle.saleProductData}
          >
            <img src={item.navIcons} alt="Product logo" />
            <Link
              onClick={saleProOut}
              style={{ width: "75%" }}
              href={item.path}
              className={prodstyle.productlinkP}
            >
              <h6>{item.dropContent}</h6>
              <p style={{ color: "black" }}>{item.productText1}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
