import React from "react";
import resCSS from "./resource.module.css";
import Link from "next/link";
import {resource } from "../../Data/Navbar";
export const Resource = ({
  resHoverIn,
  resHoverOut,
  scroll,
  productMount,
}) => {
  return (
    <div
      onMouseEnter={()=>{resHoverIn("resource")}}
      onMouseLeave={()=>{resHoverOut("")}}
      className={resCSS.resourceVisible}
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" }}
    >

      <div id={resCSS.ondemandsol} className={resCSS.indindustryContent}>
        <div className={resCSS.resourceListItems}>
          {resource.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                resHoverOut("");
              }}
              className={resCSS.industryimageIconDivSection}
            >
              <Link
                onClick={()=>{resHoverOut("")}}
                href={item.path}
                className={resCSS.resourcelinkP}
              >
                <p>{item.dropContent}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
};
