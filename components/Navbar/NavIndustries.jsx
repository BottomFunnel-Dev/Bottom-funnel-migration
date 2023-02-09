import React from "react";
import navstyle from "./navbar.module.css";
import industry from "./navIndustries.module.css";
import Link from "next/link";
import { industries, ondemand } from "../../Data/Navbar";
export const NavIndustries = ({
  solHoverIn,
  solHoverOut,
  scroll,
  productMount,
}) => {
  return (
    <div
      onMouseEnter={()=>{solHoverIn("solutions")}}
      onMouseLeave={()=>{solHoverOut("")}}
      className={industry.industryserviceVisible}
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" }}
    >
     
      <div id={industry.ondemandsol} className={industry.indindustryContent}>
        <Link href={""} className={industry.industrynoStyle}>
          <h5>On Demand Solutions</h5>
        </Link>
        <div className={industry.industryListItems}>
          {ondemand.map((item, i) => (
            <div
              key={i}
             
              className={industry.industryimageIconDivSection}
            >
              <div>
                <img className={industry.industryiconDivSection} src={item.navIcons} alt="image" />
              </div>
              <Link
                onClick={()=>{solHoverOut("")}}
                href={item.path}
                className={industry.industrylinkP}
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
