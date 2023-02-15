import React from "react";
import navstyle from "./navbar.module.css";
import industry from "./navIndustries.module.css";
import Image from "next/image";
import { industries, ondemand } from "../../Data/Navbar";
export const NavIndustries = ({
  solHoverIn,
  solHoverOut,
  scroll,
}) => {
  return (
    <div
      onMouseEnter={()=>{solHoverIn("solutions",true)}}
      onMouseLeave={()=>{solHoverOut("",false)}}
      className={industry.industryserviceVisible}
      style={{ top: scroll ? "68px" : "98px" }}
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
              <div className={industry.industryiconDivSection}>
              <Image
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    src={item.navIcons}
                    alt={item.navIcons}
                  />
              </div>
              <Link
                onClick={()=>{solHoverOut("",false)}}
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
