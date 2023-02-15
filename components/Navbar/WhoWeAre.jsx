import React from "react";
import whowe from "./whoWeAre.module.css";
// import { useNavigate } from "next/link";
import { useRouter } from "next/router";
import { company, whyBottom, process } from "../../Data/Navbar";
import Image from "next/image";
export const WhoWeAre = ({ homeHoverIn, homeHoverOut, scroll }) => {
  const router = useRouter();
  return (
    <div
      onMouseEnter={() => {
        homeHoverIn("about", true);
      }}
      onMouseLeave={() => {
        homeHoverOut("", false);
      }}
      className={whowe.aboutNavVisible}
      style={{ top: scroll ? "68px" : "98px" }}
    >
      <div className={whowe.aboutDropdownSection}>
        <div className={whowe.aboutDropdownContent}>
          <h5
            className={whowe.noStyle}
            onClick={() => router.push("/")}
            style={{ margin: "10px" }}
          >
            Company
          </h5>

          <div className={whowe.listItems}>
            {company.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  router.push(`/${item.path}`);
                  homeHoverOut("", false);
                }}
                className={whowe.aboutimageIconDivSection}
              >
                <div className={whowe.iconDivSection}>
                  <Image
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    src={item.navIcons}
                    alt={item.navIcons}
                  />
                
                </div>

                <p className={whowe.aboutlinkP}>{item.dropContent}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={whowe.aboutDropdownContent}>
          <h5 className={whowe.noStyle} style={{ margin: "10px" }}>
            Why Bottom Funnel
          </h5>

          <div className={whowe.listItems}>
            {whyBottom.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  router.push(`/${item.path}`);
                  homeHoverOut("", false);
                }}
                className={whowe.aboutimageIconDivSection}
              >
                <div  className={whowe.iconDivSection}>
                <Image
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    src={item.navIcons}
                    alt={item.navIcons}
                  />
                </div>

                <p className={whowe.aboutlinkP}>{item.dropContent}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={whowe.aboutDropdownContent}>
          <h5 className={whowe.noStyle} style={{ margin: "10px" }}>
            Our Process
          </h5>

          <div className={whowe.listItems}>
            {process.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  router.push(item.path);
                  homeHoverOut("", false);
                }}
                className={whowe.aboutimageIconDivSection}
              >
                <div  className={whowe.iconDivSection}>
                <Image
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    src={item.navIcons}
                    alt={item.navIcons}
                  />
                </div>

                <p className={whowe.aboutlinkP}>{item.dropContent}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
