import React from 'react'
import navstyle from  './navbar.module.css'
import industry from './navIndustries.module.css'
import  Link from 'next/link'
import { industries, ondemand } from '../../Data/Navbar'
export const NavIndustries = ({ solHoverIn, solHoverOut, scroll, productMount }) => {
  return (
    <div
      onMouseEnter={solHoverIn}
      onMouseLeave={solHoverOut}
      className={navstyle.serviceVisible}
      style={{ top: scroll || productMount.navMount ? "68px" : "98px" }}
    >
      <div className={industry.serviceVisible}>
        <div className={navstyle.industryContent}>
          <Link href={""} className={navstyle.noStyle}>
            <h5>Industries We Serves</h5>
          </Link>
          <div className={navstyle.industryListItems}>
            {industries.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  // navigate(`/${item.path}`);
                  solHoverOut();
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
                  onClick={solHoverOut}
                  href={item.path}
                  className={navstyle.linkP}
                >
                  <p>{item.dropContent}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div id={navstyle.ondemandsol} className={navstyle.industryContent}>
          <Link href={""} className={navstyle.noStyle}>
            <h5>On Demand Solutions</h5>
          </Link>
          <div className={navstyle.industryListItems}>
            {ondemand.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  // navigate(`/${item.path}`);
                  solHoverOut();
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
                  onClick={solHoverOut}
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
  )
}
