import React, { useState } from "react";
import navstyle from "./navbar.module.css";
import Link from "next/link";
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";
import { WhoWeAre } from "./WhoWeAre";

import { ContactMain } from "../Contact/Contact";
import { Resource } from "./Resource";

import { useEffect } from "react";
import { NavServices } from "./NavServices";
import { NavIndustries } from "./NavIndustries";
import DropdownResp from "./responsiveDropdown/DropdownResp";
import { useRouter } from "next/router";
import { Industries } from "./Industries";

import Image from "next/image";

const Navbar = ({ navredux, productMount }) => {
  // const router.push = userouter.push();
  const [scroll, setScroll] = useState(false);
  const [navbar, setNabvar] = useState(false);
  const [mobres, setMobres] = useState(false);
  const [navtoggle, setNavtoggle] = useState("");

  const router = useRouter();

  const hoverhandle = (para, nav) => {
    setNavtoggle(para);
    setNabvar(nav)
  };

  const homeHoverIn = () => {
    setAboutH(true);
    setNabvar(true);
  };

  const homeHoverOut = () => {
    setAboutH(false);
    if (window.scrollY === 0) {
      setNabvar(false);
    }
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
    console.log("working tree", mobres);
  };

  return (
    <div style={navtoggle === "" ? { background: "transparent" } : { background: "white" }}>
      {!productMount.navMount && (
        <ContactMain
          bgcolor={navbar ? "white" : "transparent"}
          textcolor={!navbar ? navredux.color : "black"}
        />
      )}
      <nav
        className={
          navbar
            ? `${navstyle.navbarSection} ${navstyle.active}`
            : navstyle.navbarSection
        }
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
                navredux.logo && !navbar
                  ? "/Images/navbar/whitelogobottom.webp"
                  : "/Images/navbar/blacklogo.webp"
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
                onMouseEnter={() => { hoverhandle("about", true) }}
                onMouseLeave={() => { hoverhandle("", false) }}
                style={{ color: navbar ? "black" : navredux.color }}
              >
                ABOUT
              </li>

              <li
                onMouseEnter={() => { hoverhandle("services", true) }}
                onMouseLeave={() => { hoverhandle("", false) }}
                style={{ color: navbar ? "black" : navredux.color }}
              >
                SERVICES
              </li>

              <li
                onMouseEnter={() => { hoverhandle("solutions", true) }}
                onMouseLeave={() => { hoverhandle("", false) }}
                style={{ color: navbar ? "black" : navredux.color }}
              >
                SOLUTIONS
              </li>

              <li
                onMouseEnter={() => { hoverhandle("industry", true) }}
                onMouseLeave={() => { hoverhandle("", false) }}
                style={{ color: navbar ? "black" : navredux.color }}
              >
                INDUSTRIES
              </li>

              <li
                onClick={() => router.push("Portfolio")}
                style={{ color: navbar ? "black" : navredux.color }}
              >
                PORTFOLIO
              </li>
              
              <li
                onMouseEnter={() => { hoverhandle("resource") }}
                onMouseLeave={() => { hoverhandle("") }}
                style={{ color: navbar ? "black" : navredux.color }}
              >
                RESOURCES
              </li>


            </div>

            <button
              onClick={() => router.push("https://www.bottomfunnel.net/")}
              className={navstyle.ProductPageRouteButton}
            >
              Product
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
