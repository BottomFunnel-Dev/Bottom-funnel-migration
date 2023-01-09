import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SeoLocalblog.css";
import blog1 from '../ImageSection/Blog1.jpg';
import blog2 from '../ImageSection/Blog2.jpg';
import blog3 from '../ImageSection/Blog3.jpg';
export default function SeoLocalblogs() {

    return (
        <div className="_SeoLocalblogs12">
            <h1>BLOGS</h1>
            <div className="_SeoLocalblogs">
                <div className="_SeoLocalblogs1">
                    <div className="_SeoLocalblogsimage">
                        <img src={blog1} />
                    </div>
                    <div className="_SeoLocalblogstext">
                    Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
                <div className="_SeoLocalblogs1">
                <div className="_SeoLocalblogsimage">
                        <img src={blog2} />
                    </div>
                    <div className="_SeoLocalblogstext">
                        Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
                <div className="_SeoLocalblogs1">
                <div className="_SeoLocalblogsimage">
                        <img src={blog3} />
                    </div>
                    <div className="_SeoLocalblogstext">
                    Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
                <div className="_SeoLocalblogs1">
                <div className="_SeoLocalblogsimage">
                        <img src={blog1} />
                    </div>
                    <div className="_SeoLocalblogstext">
                    Lorem ipsum dolor sit amet consectetur adipis
                    </div>
                </div>
            </div>
            
        </div>
    );
}