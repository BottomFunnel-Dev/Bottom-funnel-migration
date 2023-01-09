import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SeoPPCblog.css";
import blog1 from '../ImageSection/Blog1.jpg';
import blog2 from '../ImageSection/Blog2.jpg';
import blog3 from '../ImageSection/Blog3.jpg';
export default function SeoPPCblogs() {

    return (
        <div className="_SeoPPCblogs12">
            <h1>BLOGS</h1>
            <div className="_SeoPPCblogs">
                <div className="_SeoPPCblogs1">
                    <div className="_SeoPPCblogsimage">
                        <img src={blog1} />
                    </div>
                    <div className="_SeoPPCblogstext">
                    Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
                <div className="_SeoPPCblogs1">
                <div className="_SeoPPCblogsimage">
                        <img src={blog2} />
                    </div>
                    <div className="_SeoPPCblogstext">
                        Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
                <div className="_SeoPPCblogs1">
                <div className="_SeoPPCblogsimage">
                        <img src={blog3} />
                    </div>
                    <div className="_SeoPPCblogstext">
                    Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
                <div className="_SeoPPCblogs1">
                <div className="_SeoPPCblogsimage">
                        <img src={blog1} />
                    </div>
                    <div className="_SeoPPCblogstext">
                    Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
            </div>
            
        </div>
    );
}