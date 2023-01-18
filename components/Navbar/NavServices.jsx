import React, { useState } from "react";
import navstyle from  "./navbar.module.css";
import navservice from './navServices.module.css'
import  Link  from "next/link";
import {
  webservice,
  appservice,
  digitalmarket,
  trendingTech,
  discoverContent,
  designContent,
  designRightContent,
  discoverRightContent,
  backend,
  frontend,
  cms,
  mobile,
  database,
  scaleContent,
} from "../../Data/Navbar";
import {BsArrowRight} from "react-icons/bs"
import  ImageCard  from "../particularComponents/ImageCardText/ImageCard";

export const NavServices = ({ serHoverIn, serHoverOut, scroll, productMount }) => {
  const [sidetoggle, setSidetoggle] = useState("Technologies");

  const handleSide = (element) => {
    console.log(element);
    setSidetoggle(element);
  };
console.log(discoverContent)

  const sideBar = [
    { sidename: "Discover" },
    { sidename: "Design" },
    { sidename: "Technologies" },
    { sidename: "Skills" },
    { sidename: "Scale" },
  ];

  return (
    <div
      onMouseEnter={serHoverIn}
      onMouseLeave={serHoverOut}
      className={navservice.servicesolutionVisible}
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" }}

    >
      <div className={navservice.servicesideNav}>
        {sideBar.map((item, index) => (
          <div
            key={item.sidename}
            className={sidetoggle === item.sidename ? navservice.activetoggle : ""}
            onMouseEnter={() => {
              handleSide(item.sidename);
            }}
          >
            <h6>{item.sidename}</h6>
          </div>
        ))}
      </div>
      {sidetoggle === "Technologies" && (
        <div className={navservice.servicedropdownSection}>
          <div className={navservice.serviceDropdownContent}>
            <Link href="web-development" className={navservice.servicenoStyle}>
              <h5
                onClick={() => {
                  serHoverOut();
                }}
                style={{margin:0}}
              >
                Web Development
              </h5>
            </Link>

            <div className={navstyle.listItems}>
              {webservice.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    // navigate(`/${item.path}`);
                    serHoverOut();
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
                  <Link onClick={serHoverOut} href={item.path} className={navstyle.linkP}>
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className={navservice.serviceDropdownContent}>
            {/* <h5
              clnavservice"servicenoStyle"
              onClick={() => {
                navigate(`/mobile-app-development`);
                serHoverOut();
              }}
            >
              Mobile App Development
            </h5> */}
            <Link href="mobile-app-development" className={navservice.servicenoStyle}>
              <h5
                onClick={() => {
                  serHoverOut();
                }}
                style={{margin:0}}
              >
                Mobile App Development
              </h5>
            </Link>

            <div className={navstyle.listItems}>
              {appservice.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    // navigate(`/${item.path}`);
                    serHoverOut();
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
                  <Link onClick={serHoverOut} href={item.path} className={navstyle.linkP}>
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className={navservice.serviceDropdownContent}>
            <Link href="Digital-marketing" className={navservice.servicenoStyle}>
              <h5
                onClick={() => {
                  serHoverOut();
                }}
                style={{margin:0}}
              >
                Digital Marketing
              </h5>
            </Link>
            <div className={navstyle.listItems}>
              {digitalmarket.map((item, l) => (
                // <Link
                //   to={item.path}
                //   onClick={serHoverOut}
                //   className="servicesP"
                // >
                <div
                  onClick={() => {
                    // navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  key={l}
                  className={navstyle.imageIconDivSection}
                >
                  <div>
                    <img
                      className={navstyle.iconDivSection}
                      src={item.navIcons}
                      alt=""
                    />
                  </div>
                  <Link onClick={serHoverOut} href={item.path} className={navstyle.linkP}>
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
                // </Link>
              ))}
            </div>
          </div>
          <div id={navservice.serviceDropContent} className={navservice.serviceDropdownContent}>
            <Link href={""} className={navservice.servicenoStyle}>
              <h5 style={{margin:0}}>Trending Technologies</h5>
            </Link>
            <div className={navstyle.trendListItems}>
              {trendingTech.map((item, m) => (
                <div
                  key={m}
                  onClick={() => {
                    // navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className={navstyle.trendImageIconDivSection}
                >
                  <div>
                    <img
                      className={navstyle.iconDivSection}
                      src={item.navIcons}
                      alt=""
                    />
                  </div>
                  <Link onClick={serHoverOut} href={item.path} className={navstyle.linkP}>
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {sidetoggle === "Discover" && (
        <div className={navstyle.discoverDropdown}>
          <div className={navstyle.discoverleft}>
            <div className={navstyle.discoverlefttop}>
              {discoverContent.map((item, index) => (
                <ImageCard
                  key={index}
                  cardContent={item}
                  closeDisplay={serHoverOut}
                />
              ))}
            </div>
            <div className={navstyle.discoverleftbottom}>
              <h3>
                Learn more About{" "}
                <span>
                  Our services <BsArrowRight />
                </span>
              </h3>
            </div>
          </div>
          <div className={navstyle.discoverright}>
            {discoverRightContent.map((item, index) => (
              <div key={index}>
                <ImageCard cardContent={item} closeDisplay={serHoverOut} />
                <h5 className={navstyle.knowmore}>
                  Know More <BsArrowRight />
                </h5>
              </div>
            ))}
          </div>
        </div>
      )}
      {sidetoggle === "Design" && (
        <div className={navstyle.discoverDropdown}>
          <div className={navstyle.discoverleft}>
            <div className={navstyle.discoverlefttop}>
              {designContent.map((item, index) => (
                <ImageCard
                  key={index}
                  closeDisplay={serHoverOut}
                  cardContent={item}
                />
              ))}
            </div>
            <div className={navstyle.discoverleftbottom}>
              <h3>
                Learn more About{" "}
                <span>
                  Our services <BsArrowRight />
                </span>
              </h3>
            </div>
          </div>
          <div className={navstyle.discoverright}>
            {designRightContent.map((item, index) => (
              <div key={index}>
                <ImageCard cardContent={item} closeDisplay={serHoverOut} />
                <h5 className={navstyle.knowmore}>
                  Know More <BsArrowRight />
                </h5>
              </div>
            ))}
          </div>
        </div>
      )}
      {sidetoggle === "Skills" && (
        <div className={navservice.servicedropdownSection}>
          <div className={navstyle.backendDropdownContent}>
            <Link href={""} className={navservice.servicenoStyle}>
              <h5>Backend</h5>
            </Link>
            <div className={navstyle.backendlistItems}>
              {backend.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    // navigate(`/${item.path}`);
                    serHoverOut();
                  }}
                  className={navstyle.backendimageIconDivSection}
                >
                  <div>
                    <img
                      className={navstyle.iconDivSection}
                      src={item.navIcons}
                      alt=""
                    />
                  </div>
                  <Link onClick={serHoverOut} href={item.path} className={navstyle.linkP}>
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className={navstyle.skillDropdownContent}>
            <Link href={""} className={navservice.servicenoStyle}>
              <h5>Frontend</h5>
            </Link>
            <div className={navstyle.listItems}>
              {frontend.map((item, j) => (
                <div
                  key={j}
                  onClick={() => {
                    // navigate(`/${item.path}`);
                    serHoverOut();
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
                  <Link onClick={serHoverOut} href={item.path} className={navstyle.linkP}>
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className={navstyle.skillDropdownContent}>
            <Link href={""} className={navservice.servicenoStyle}>
              <h5>Mobile</h5>
            </Link>
            <div className={navstyle.listItems}>
              {mobile.map((item, j) => (
                <div
                  key={j}
                  onClick={() => {
                    // navigate(`/${item.path}`);
                    serHoverOut();
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
                  <Link onClick={serHoverOut} href={item.path} className={navstyle.linkP}>
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className={navstyle.skillDropdownContent}>
            <Link href={""} className={navservice.servicenoStyle}>
              <h5>DataBase</h5>
            </Link>
            <div className={navstyle.listItems}>
              {database.map((item, j) => (
                <div
                  key={j}
                  onClick={() => {
                    // navigate(`/${item.path}`);
                    serHoverOut();
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
                  <Link onClick={serHoverOut} href={item.path} className={navstyle.linkP}>
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className={navstyle.skillDropdownContent}>
            <Link href={""} className={navservice.servicenoStyle}>
              <h5>CMS Frameworks</h5>
            </Link>
            <div className={navstyle.listItems}>
              {cms.map((item, j) => (
                <div
                  key={j}
                  onClick={() => {
                    // navigate(`/${item.path}`);
                    serHoverOut();
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
                  <Link onClick={serHoverOut} href={item.path} className={navstyle.linkP}>
                    <p>{item.dropContent}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {sidetoggle === "Scale" && (
        <div className={navstyle.discoverDropdown}>
          <div className={navstyle.discoverleft}>
            <div className={navstyle.discoverlefttop}>
              {scaleContent.map((item, index) => (
                <ImageCard
                  key={index}
                  closeDisplay={serHoverOut}
                  cardContent={item}
                />
              ))}
            </div>
            <div className={navstyle.discoverleftbottom}>
              <h3>
                Learn more About{" "}
                <span>
                  Our services <BsArrowRight />
                </span>
              </h3>
            </div>
          </div>
          <div className={navstyle.discoverright}>
            {discoverRightContent.map((item, index) => (
              <div key={index}>
                <ImageCard cardContent={item} closeDisplay={serHoverOut} />
                <h5 className={navstyle.knowmore}>
                  Know More
                  <BsArrowRight />{" "}
                </h5>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
