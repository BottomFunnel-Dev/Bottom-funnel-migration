import React from "react";
import whowe from "./whoWeAre.module.css";
// import { useNavigate } from "next/link";
import { company, whyBottom, process } from "../../Data/Navbar";
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
      <div className={whowe.aboutDropdownSection}>
        <div className={whowe.aboutDropdownContent}>
          <Link href={"/"} className={whowe.noStyle}>
            <h5 style={{margin:"10px"}}>Company</h5>
          </Link>
          <div className={whowe.listItems}>
            {company.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  // navigate(`/${item.path}`);
                  homeHoverOut();
                }}
                className={whowe.aboutimageIconDivSection}
              >
                <div>
                  <img
                    className={whowe.iconDivSection}
                    src={item.navIcons}
                    alt=""
                  />
                </div>
                <Link
                  onClick={homeHoverOut}
                  href={item.path}
                  className={whowe.aboutlinkP}
                >
                  <p>{item.dropContent}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={whowe.aboutDropdownContent}>
          <Link href={""} className={whowe.noStyle}>
            <h5 style={{margin:"10px"}}>Why Bottom Funnel</h5>
          </Link>
          <div className={whowe.listItems}>
            {whyBottom.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  // navigate(`/${item.path}`);
                  homeHoverOut();
                }}
                className={whowe.aboutimageIconDivSection}
              >
                <div>
                  <img
                    className={whowe.iconDivSection}
                    src={item.navIcons}
                    alt=""
                  />
                </div>
                <Link
                  onClick={homeHoverOut}
                  href={item.path}
                  className={whowe.aboutlinkP}
                >
                  <p>{item.dropContent}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={whowe.aboutDropdownContent}>
          <Link href={""} className={whowe.noStyle}>
            <h5 style={{margin:"10px"}}>Our Process</h5>
          </Link>
          <div className={whowe.listItems}>
            {process.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  // navigate(`/${item.path}`);
                  homeHoverOut();
                }}
                className={whowe.aboutimageIconDivSection}
              >
                <div>
                  <img
                    className={whowe.iconDivSection}
                    src={item.navIcons}
                    alt=""
                  />
                </div>
                <Link
                  onClick={homeHoverOut}
                  href={item.path}
                  className={whowe.aboutlinkP}
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
