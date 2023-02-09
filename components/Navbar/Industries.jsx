import React from "react";
import navstyle from "./navbar.module.css";
import industry from "./navIndustries.module.css";
import Link from "next/link";
import { industries } from "../../Data/Navbar";
import Image from "next/image";
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
                                <Image
                                    src={item.navIcons}
                                    alt={"image"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />

                                {/* <img className={industry.industryiconDivSection}
                                    src={item.navIcons}
                                    alt="image"
                                /> */}
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
