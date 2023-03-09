import React, { useState, useEffect } from "react";
import navstyle from "./navbar.module.css";
import Link from "next/link";
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";
import Image from "next/image";
import { ContactMain } from "../Contact/Contact";
import DropdownResp from "./responsiveDropdown/DropdownResp";
import dynamic from "next/dynamic";

const WhoWeAre = dynamic(() => import("./WhoWeAre"));
const Resource = dynamic(() => import("./Resource"));
const NavServices = dynamic(() => import("./NavServices"));
const NavIndustries = dynamic(() => import("./NavIndustries"));
const Industries = dynamic(() => import("./Industries"));

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [navbar, setNabvar] = useState(false);
  const [mobres, setMobres] = useState(false);
  const [navtoggle, setNavtoggle] = useState("");

  const router = useRouter();

  const hoverhandle = (para, nav) => {
    setNavtoggle(para);
    setNabvar(nav);
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
  };

  return (
    <div>
      {/* <ContactMain scroll={scroll}  /> */}
      <nav
        className={navstyle.navbarSection}
        style={{
          top: scroll ? "0" : "0px",
          // background: scroll || navbar ? "white" : "transparent",
        }}
      >
        <ContactMain />

        <div className={navstyle.logoSection}>
          <Link href="/" className={navstyle.logoText}>
            <Image
              src={
                "/Images/navbar/blacklogo.webp"
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
                <p>About</p>
                <i
                  className={
                    navtoggle == "about"
                      ? "bi bi-chevron-up"
                      : "bi bi-chevron-down"
                  }
                ></i>
              </li>

              <li
                onMouseEnter={() => {
                  hoverhandle("services", true);
                }}
                onMouseLeave={() => {
                  hoverhandle("", false);
                }}
              >
                <p>Services</p>
                <i
                  className={
                    navtoggle == "services"
                      ? "bi bi-chevron-up"
                      : "bi bi-chevron-down"
                  }
                ></i>
              </li>

              <li
                onMouseEnter={() => {
                  hoverhandle("solutions", true);
                }}
                onMouseLeave={() => {
                  hoverhandle("", false);
                }}
              >
                <p>Solutions</p>
                <i
                  className={
                    navtoggle == "solutions"
                      ? "bi bi-chevron-up"
                      : "bi bi-chevron-down"
                  }
                ></i>
              </li>

              <li
                onMouseEnter={() => {
                  hoverhandle("industry", true);
                }}
                onMouseLeave={() => {
                  hoverhandle("", false);
                }}
              >
                <p>Industries</p>
                <i
                  className={
                    navtoggle == "industry"
                      ? "bi bi-chevron-up"
                      : "bi bi-chevron-down"
                  }
                ></i>
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
                <p>Resources</p>
                <i
                  className={
                    navtoggle == "resource"
                      ? "bi bi-chevron-up"
                      : "bi bi-chevron-down"
                  }
                ></i>
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
            hoverhandle={hoverhandle}
            homeHoverIn={hoverhandle}
            homeHoverOut={hoverhandle}
            scroll={scroll}
          />
        )}
      </nav>

      {/* about drop down section code start */}
      {navtoggle === "about" ? (
        <WhoWeAre
          homeHoverIn={hoverhandle}
          homeHoverOut={hoverhandle}
          scroll={scroll}
        />
      ) : null}
      {/* about drop down section code end */}

      {/* service drop down section code start */}
      {navtoggle === "services" ? (
        <NavServices
          serHoverIn={hoverhandle}
          serHoverOut={hoverhandle}
          scroll={scroll}
        />
      ) : null}

      {/* service drop down section code end */}

      {/* solutions drop down section code start */}
      {navtoggle === "solutions" ? (
        <NavIndustries
          solHoverIn={hoverhandle}
          solHoverOut={hoverhandle}
          scroll={scroll}
        />
      ) : null}

      {navtoggle === "industry" ? (
        <Industries
          indusHoverIn={hoverhandle}
          indusHoverOut={hoverhandle}
          scroll={scroll}
        />
      ) : null}

      {navtoggle === "resource" ? (
        <Resource
          resHoverIn={hoverhandle}
          resHoverOut={hoverhandle}
          scroll={scroll}
        />
      ) : null}
    </div>
  );
};

export default Navbar;
