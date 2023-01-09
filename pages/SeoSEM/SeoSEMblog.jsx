import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SeoSEMblog.css";
import blog1 from '../ImageSection/Blog1.jpg';
import blog2 from '../ImageSection/Blog2.jpg';
import blog3 from '../ImageSection/Blog3.jpg';
export default function SeoSEMblogs() {

    return (
        <div className="_SeoSEMblogs12">
            <h1>BLOGS</h1>
            <div className="_SeoSEMblogs">
                <div className="_SeoSEMblogs1">
                    <div className="_SeoSEMblogsimage">
                        <img src={blog1} />
                    </div>
                    <div className="_SeoSEMblogstext">
                    Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
                <div className="_SeoSEMblogs1">
                <div className="_SeoSEMblogsimage">
                        <img src={blog2} />
                    </div>
                    <div className="_SeoSEMblogstext">
                        Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
                <div className="_SeoSEMblogs1">
                <div className="_SeoSEMblogsimage">
                        <img src={blog3} />
                    </div>
                    <div className="_SeoSEMblogstext">
                    Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
                <div className="_SeoSEMblogs1">
                <div className="_SeoSEMblogsimage">
                        <img src={blog1} />
                    </div>
                    <div className="_SeoSEMblogstext">
                    Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
            </div>
            
        </div>
    );
}