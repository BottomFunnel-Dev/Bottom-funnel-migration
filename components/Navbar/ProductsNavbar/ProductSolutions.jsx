import React from "react";
import solnav from "./ProductSolutions.module.css";
import  Link  from "next/link";
import { productSolution } from "../../../Data/Navbar";
export const ProductSolutions = ({ solHoverIn, solHoverOut, scroll }) => {
  return (
    <div
      onMouseEnter={solHoverIn}
      onMouseLeave={solHoverOut}
      className={solnav.productSolutionsMainDiv}
      style={{ top: scroll ? "6.5%" : "15%" }}
    >
      <div className={solnav.productSolutionsListItems} style={{ width: "100%" }}>
        {productSolution.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              // navigate(`/${item.path}`);
              solHoverOut();
            }}
            className={solnav.productSolutionsData}
          >
            <Link
              onClick={solHoverOut}
              href={item.path}
              style={{ cursor: "default"}}
              className={solnav.productlinkP}
            >
              <div>
                <h6 style={{marginLeft:"3.5%",width:"50%"}}>{item.dropContent}</h6> <span></span>
              </div>
              <p style={{marginTop:"5%",fontSize:"14px"}}>{item.productText1}</p>
              <p style={{marginTop:"5%",fontSize:"14px"}}>{item.productText2}</p>
            </Link>
          </div>
        ))}
        <button>All industries</button>
      </div>
    </div>
  );
};
