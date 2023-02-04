import React, { useState } from "react";
import navstyle from "./navbar.module.css";
import Link from "next/link";
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { WhoWeAre } from "./WhoWeAre";

import { ImageCard } from "../particularComponents/ImageCardText/ImageCard";
import { ContactMain } from "../Contact/Contact";
import { Resource } from "./Resource";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { NavServices } from "./NavServices";
import { NavIndustries } from "./NavIndustries";
import { Products } from "./Products";
import DropdownResp from "./responsiveDropdown/DropdownResp";
import { useRouter } from "next/router";
import { Industries } from "./Industries";

const Navbar = ({ navredux, productMount }) => {
  // const router.push = userouter.push();
  const [aboutH, setAboutH] = useState(false);
  const [solution, setSolution] = useState(false);
  const [industries, setIndustries] = useState(false);
  const [service, setService] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [resource, setResource] = useState(false);
  const [product, setProduct] = useState(false);
  const [navbar, setNabvar] = useState(false);
  const [mobres, setMobres] = useState(false);
  const router = useRouter();

  const skillHoverIn = () => {
    setSkill(true);
    setNabvar(true);
  };

  const skillHoverOut = () => {
    setSolution(false);

    setSkill(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };

  const solHoverIn = () => {
    setSolution(true);
    setNabvar(true);
  };

  const solHoverOut = () => {
    setSolution(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };

  const indusHoverIn = () => {
    setIndustries(true);
    setNabvar(true);
  };

  const indusHoverOut = () => {
    setIndustries(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };
  const productHoverIn = () => {
    setProduct(true);
    setNabvar(true);
  };

  const productHoverOut = () => {
    setProduct(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };

  const serHoverIn = () => {
    setService(true);
    setNabvar(true);
  };

  const serHoverOut = () => {
    setService(false);
    if (window.scrollY == 0) {
      setNabvar(false);
    }
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
  // console.log("service", service);
  const blogHoverIn = () => {
    setNabvar(true);
  };

  const blogHoverOut = () => {
    if (window.scrollY == 0) {
      setNabvar(false);
    }
  };

  const resHoverIn = () => {
    setResource(true);
    setNabvar(true);
  };

  const resHoverOut = () => {
    setResource(false);
    if (window.scrollY == 0) {
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
    // console.log(scrollY);
  });

  // console.log("scroll",scroll)
  // useEffect(() => {
  //   console.log(productMount.navMount);
  //   console.log(productMount.salesnavMount);
  // }, [productMount]);
  // console.log(productMount)

  const handleMob = () => {
    mobres ? setMobres(false) : setMobres(true);
    console.log("working tree", mobres);
  };

  return (
    <div>
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
            <img
              src={
                navredux.logo && !navbar
                  ? "/Images/navbar/whitelogobottom.png"
                  : "/Images/navbar/blacklogo.png"
              }
              // Images/navbar/whitelogobottom.png
              alt="image"
            />
          </Link>
        </div>

        {/* <input id={navstyle.checkbox} type="checkbox" /> */}
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
                onMouseEnter={homeHoverIn}
                onMouseLeave={homeHoverOut}
                style={{ color: navbar ? "black" : navredux.color }}
              >
                ABOUT
              </li>

              <li
                onMouseEnter={serHoverIn}
                onMouseLeave={serHoverOut}
                style={{ color: navbar ? "black" : navredux.color }}
              >
                SERVICES
              </li>

              <li
                onMouseEnter={solHoverIn}
                onMouseLeave={solHoverOut}
                style={{ color: navbar ? "black" : navredux.color }}
              >
                SOLUTIONS
              </li>

              <li
                onMouseEnter={indusHoverIn}
                onMouseLeave={indusHoverOut}
                style={{ color: navbar ? "black" : navredux.color }}>
                INDUSTRIES
              </li>

              <li
                // onMouseEnter={blogHoverIn}
                // onMouseLeave={blogHoverOut}
                style={{ color: navbar ? "black" : navredux.color }}
              >
                WORK
              </li>

              <li
                onMouseEnter={resHoverIn}
                onMouseLeave={resHoverOut}
                style={{ color: navbar ? "black" : navredux.color }}
              >
                Resources
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
            homeHoverIn={homeHoverIn}
            homeHoverOut={homeHoverOut}
            scroll={scroll}
            productMount={productMount}
          />
        )}
      </nav>

      {/* about drop down section code start */}
      {aboutH ? (
        <WhoWeAre
          homeHoverIn={homeHoverIn}
          homeHoverOut={homeHoverOut}
          scroll={scroll}
          productMount={productMount}
        />
      ) : null}
      {/* about drop down section code end */}

      {/* service drop down section code start */}
      {service ? (
        <NavServices
          serHoverIn={serHoverIn}
          serHoverOut={serHoverOut}
          scroll={scroll}
          productMount={productMount}
        />
      ) : null}

      {/* service drop down section code end */}

      {/* solutions drop down section code start */}
      {solution ? (
        <NavIndustries
          solHoverIn={solHoverIn}
          solHoverOut={solHoverOut}
          scroll={scroll}
          productMount={productMount}
        />
      ) : null}

      {industries ? (
        <Industries
          indusHoverIn={indusHoverIn}
          indusHoverOut={indusHoverOut}
          scroll={scroll}
          productMount={productMount}
        />
      ) : null}

      {resource ? (
        <Resource
          resHoverIn={resHoverIn}
          resHoverOut={resHoverOut}
          scroll={scroll}
          productMount={productMount}
        />
      ) : null}

      {/* {product ? (
        <Products productHoverIn={productHoverIn}  productHoverOut={productHoverOut} scroll={scroll}/>
      ) : null} */}

      {/* product drop down section code start */}
      {/* {product ? (
        <Products
          serHoverIn={productHoverIn}
          serHoverOut={productHoverOut}
          scroll={scroll}
          productMount={productMount}
        />
      ) : null} */}
    </div>
  );
};

export default Navbar;
