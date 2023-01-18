import React from "react";
import deskstyle from  "./ProductDesk.module.css";
import Link  from "next/link";
import { productDesk } from "../../../Data/Navbar";
export const ProductDesk = ({ solDeskIn, solDeskOut, scroll }) => {
  return (
    <div
      onMouseEnter={solDeskIn}
      onMouseLeave={solDeskOut}
      className={deskstyle.productDeskMainDiv}
      style={{ top: scroll ? "6.5%" : "15%" }}
    >
      <div className={deskstyle.productDeskListItems} style={{ width: "100%" }}>
        {productDesk.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              // navigate(`/${item.path}`);
              solHoverOut();
            }}
            className={deskstyle.productDeskData}
          >
            <img src={item.navIcons} alt="Product logo" />
            <Link
              onClick={solDeskOut}
              style={{ width: "75%" }}
              to={item.path}
              className={deskstyle.productlinkP}
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
