import React from "react";
import navstyle from "./navbar.module.css";
import industry from "./navIndustries.module.css";
import Link from "next/link";
import { industries } from "../../Data/Navbar";
export const Industries = ({
    indusHoverIn,
    indusHoverOut,
    scroll,
    productMount,
}) => {
    return (
        <div
            onMouseEnter={indusHoverIn}
            onMouseLeave={indusHoverOut}
            className={industry.industryserviceVisible}
            style={{ top: scroll || productMount.navMount ? "68px" : "98px" }}
        >
            {/* <div className={industry.serviceVisible}> */}
            <div className={industry.indindustryContent}>
                <Link href={""} className={industry.industrynoStyle}>
                    <h5>Industries We Serves</h5>
                </Link>
                <div className={industry.industryListItems}>
                    {industries.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => {
                                // navigate(`/${item.path}`);
                                indusHoverOut();
                            }}
                            className={industry.industryimageIconDivSection}
                        >
                            <div>
                                <img
                                    className={industry.industryiconDivSection}
                                    src={item.navIcons}
                                    alt="image"
                                />
                            </div>
                            <Link
                                onClick={indusHoverOut}
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
