import React, { useState, useEffect } from "react";
import navstyle from "./navbar.module.css";
import Link from "next/link";
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";
import Image from "next/image";

import { WhoWeAre } from "./WhoWeAre";
import { ContactMain } from "../Contact/Contact";
import { Resource } from "./Resource";
import { NavServices } from "./NavServices";
import { NavIndustries } from "./NavIndustries";
import DropdownResp from "./responsiveDropdown/DropdownResp";
import { Industries } from "./Industries";

const Navbar = ({ navredux, productMount }) => {
  const [scroll, setScroll] = useState(false);
  const [navbar, setNabvar] = useState(false);
  const [mobres, setMobres] = useState(false);
  const [navtoggle, setNavtoggle] = useState("");

  const router = useRouter();

  const hoverhandle = (para, nav) => {
    setNavtoggle(para);
    setNabvar(nav);
  };

  const navBackground = () => {
    if (window.scrollY > 1) {
      setNabvar(true);
      setScroll(true);
    } else {
      setNabvar(false);
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navBackground);
  });

  const handleMob = () => {
    mobres ? setMobres(false) : setMobres(true);
  };

  return (
    <div>
      {!productMount.navMount && <ContactMain />}
      <nav
        className={`${navstyle.navbarSection} ${navstyle.active}`}
        style={{
          top:
            scroll || productMount.navMount || productMount.salesnavMount
              ? "0"
              : "30px",
          position:
            scroll && (productMount.navMount || productMount.salesnavMount)
              ? "static"
              : "fixed",
        }}
      >
        <div className={navstyle.logoSection}>
          <Link href="/" className={navstyle.logoText}>
            <Image
              src={
                "https://d1krs40fxb67ye.cloudfront.net/Images/navbar/blacklogo.webp"
              }
              alt={"logo"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </Link>
        </div>

        <div id={navstyle.bar}>
          <label htmlFor="checkbox">
            <IconContext.Provider value={{ className: navstyle.bars }}>
              <AiOutlineMenu onClick={handleMob} />
            </IconContext.Provider>
          </label>
        </div>

        {!mobres && (
          <div className={navstyle.dropdownBar}>
            <div className={navstyle.mobLists}>
              <li
                onMouseEnter={() => {
                  hoverhandle("about", true);
                }}
                onMouseLeave={() => {
                  hoverhandle("", false);
                }}
              >
                About
              </li>

              <li
                onMouseEnter={() => {
                  hoverhandle("services", true);
                }}
                onMouseLeave={() => {
                  hoverhandle("", false);
                }}
              >
                Services
              </li>

              <li
                onMouseEnter={() => {
                  hoverhandle("solutions", true);
                }}
                onMouseLeave={() => {
                  hoverhandle("", false);
                }}
              >
                Solutions
              </li>

              <li
                onMouseEnter={() => {
                  hoverhandle("industry", true);
                }}
                onMouseLeave={() => {
                  hoverhandle("", false);
                }}
              >
                Industries
              </li>

              <li onClick={() => router.push("portfolio")}>Portfolio</li>

              <li
                onMouseEnter={() => {
                  hoverhandle("resource");
                }}
                onMouseLeave={() => {
                  hoverhandle("");
                }}
              >
                Resources
              </li>
            </div>

            <button
              onClick={() => router.push("https://www.bottomfunnel.net/")}
              className={navstyle.ProductPageRouteButton}
            >
              Products
            </button>

            <button
              className={navstyle.callToAction}
              // onClick={() => router.push("/hire-new-talent")}
            >
              Hire a Talent
            </button>
            <button
              className={navstyle.callToAction}
              onClick={() => router.push("/apply-as-talent")}
            >
              Apply as a Talent
            </button>
          </div>
        )}

        {mobres && (
          <DropdownResp
            homeHoverIn={hoverhandle}
            homeHoverOut={hoverhandle}
            scroll={scroll}
            productMount={productMount}
          />
        )}
      </nav>

      {/* about drop down section code start */}
      {navtoggle === "about" ? (
        <WhoWeAre
          homeHoverIn={hoverhandle}
          homeHoverOut={hoverhandle}
          scroll={scroll}
          productMount={productMount}
        />
      ) : null}
      {/* about drop down section code end */}

      {/* service drop down section code start */}
      {navtoggle === "services" ? (
        <NavServices
          serHoverIn={hoverhandle}
          serHoverOut={hoverhandle}
          scroll={scroll}
          productMount={productMount}
        />
      ) : null}

      {/* service drop down section code end */}

      {/* solutions drop down section code start */}
      {navtoggle === "solutions" ? (
        <NavIndustries
          solHoverIn={hoverhandle}
          solHoverOut={hoverhandle}
          scroll={scroll}
          productMount={productMount}
        />
      ) : null}

      {navtoggle === "industry" ? (
        <Industries
          indusHoverIn={hoverhandle}
          indusHoverOut={hoverhandle}
          scroll={scroll}
          productMount={productMount}
        />
      ) : null}

      {navtoggle === "resource" ? (
        <Resource
          resHoverIn={hoverhandle}
          resHoverOut={hoverhandle}
          scroll={scroll}
          productMount={productMount}
        />
      ) : null}
    </div>
  );
};

export default Navbar;
