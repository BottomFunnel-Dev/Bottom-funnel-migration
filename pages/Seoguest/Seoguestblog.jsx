import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Seoguestblog.css";
import blog1 from '../ImageSection/Blog1.jpg';
import blog2 from '../ImageSection/Blog2.jpg';
import blog3 from '../ImageSection/Blog3.jpg';
export default function Seoguestblogs() {

    return (
        <div className="_Seoguestblogs12">
            <h1>BLOGS</h1>
            <div className="_Seoguestblogs">
                <div className="_Seoguestblogs1">
                    <div className="_Seoguestblogsimage">
                        <img src={blog1} />
                    </div>
                    <div className="_Seoguestblogstext">
                    Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
                <div className="_Seoguestblogs1">
                <div className="_Seoguestblogsimage">
                        <img src={blog2} />
                    </div>
                    <div className="_Seoguestblogstext">
                        Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
                <div className="_Seoguestblogs1">
                <div className="_Seoguestblogsimage">
                        <img src={blog3} />
                    </div>
                    <div className="_Seoguestblogstext">
                    Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
                <div className="_Seoguestblogs1">
                <div className="_Seoguestblogsimage">
                        <img src={blog1} />
                    </div>
                    <div className="_Seoguestblogstext">
                    Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
            </div>
            
        </div>
    );
}