import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SeoLinkblog.css";
import blog1 from '../ImageSection/Blog1.jpg';
import blog2 from '../ImageSection/Blog2.jpg';
import blog3 from '../ImageSection/Blog3.jpg';
export default function SeoLinkblogs() {

    return (
        <div className="_SeoLinkblogs12">
            <h1>BLOGS</h1>
            <div className="_SeoLinkblogs">
                <div className="_SeoLinkblogs1">
                    <div className="_SeoLinkblogsimage">
                        <img src={blog1} />
                    </div>
                    <div className="_SeoLinkblogstext">
                    Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
                <div className="_SeoLinkblogs1">
                <div className="_SeoLinkblogsimage">
                        <img src={blog2} />
                    </div>
                    <div className="_SeoLinkblogstext">
                        Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
                <div className="_SeoLinkblogs1">
                <div className="_SeoLinkblogsimage">
                        <img src={blog3} />
                    </div>
                    <div className="_SeoLinkblogstext">
                    Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
                <div className="_SeoLinkblogs1">
                <div className="_SeoLinkblogsimage">
                        <img src={blog1} />
                    </div>
                    <div className="_SeoLinkblogstext">
                    Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
            </div>
            
        </div>
    );
}