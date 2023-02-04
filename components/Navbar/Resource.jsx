import React from "react";
import navstyle from "./navbar.module.css";
import industry from "./navIndustries.module.css";
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
      onMouseEnter={resHoverIn}
      onMouseLeave={resHoverOut}
      className={industry.resourceVisible}
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" }}
    >

      <div id={industry.ondemandsol} className={industry.indindustryContent}>
        <div className={industry.resourceListItems}>
          {resource.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                resHoverOut();
              }}
              className={industry.industryimageIconDivSection}
            >
              {/* <div>
                <img
                  className={industry.industryiconDivSection}
                  src={item.navIcons}
                  alt=""
                />
              </div> */}
              <Link
                onClick={resHoverOut}
                href={item.path}
                className={industry.resourcelinkP}
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
