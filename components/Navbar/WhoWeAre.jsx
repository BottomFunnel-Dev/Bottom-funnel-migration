import React from "react";
import navstyle from "./navbar.module.css";
import whowe from "./whoWeAre.module.css";
// import { useNavigate } from "next/link";
import { company, whyBottom, process } from "../../data/Navbar";
import Link from "next/link";
export const WhoWeAre = ({
  homeHoverIn,
  homeHoverOut,
  scroll,
  productMount,
}) => {
  // const navigate = useNavigate();
  return (
    <div
      onMouseEnter={homeHoverIn}
      onMouseLeave={homeHoverOut}
      className={whowe.aboutNavVisible}
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" }}
    >
      <div className={navstyle.aboutDropdownSection}>
        <div className={navstyle.aboutDropdownContent}>
          <Link href={"/"} className={navstyle.noStyle}>
            <h5 style={{margin:"10px"}}>Company</h5>
          </Link>
          <div className={navstyle.listItems}>
            {company.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  // navigate(`/${item.path}`);
                  homeHoverOut();
                }}
                className={navstyle.imageIconDivSection}
              >
                <div>
                  <img
                    className={navstyle.iconDivSection}
                    src={item.navIcons}
                    alt=""
                  />
                </div>
                <Link
                  onClick={homeHoverOut}
                  href={item.path}
                  className={navstyle.linkP}
                >
                  <p>{item.dropContent}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={navstyle.aboutDropdownContent}>
          <Link href={""} className={navstyle.noStyle}>
            <h5 style={{margin:"10px"}}>Why Bottom Funnel</h5>
          </Link>
          <div className={navstyle.listItems}>
            {whyBottom.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  // navigate(`/${item.path}`);
                  homeHoverOut();
                }}
                className={navstyle.imageIconDivSection}
              >
                <div>
                  <img
                    className={navstyle.iconDivSection}
                    src={item.navIcons}
                    alt=""
                  />
                </div>
                <Link
                  onClick={homeHoverOut}
                  href={item.path}
                  className={navstyle.linkP}
                >
                  <p>{item.dropContent}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={navstyle.aboutDropdownContent}>
          <Link href={""} className={navstyle.noStyle}>
            <h5 style={{margin:"10px"}}>Our Process</h5>
          </Link>
          <div className={navstyle.listItems}>
            {process.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  // navigate(`/${item.path}`);
                  homeHoverOut();
                }}
                className={navstyle.imageIconDivSection}
              >
                <div>
                  <img
                    className={navstyle.iconDivSection}
                    src={item.navIcons}
                    alt=""
                  />
                </div>
                <Link
                  onClick={homeHoverOut}
                  href={item.path}
                  className={navstyle.linkP}
                >
                  <p>{item.dropContent}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
