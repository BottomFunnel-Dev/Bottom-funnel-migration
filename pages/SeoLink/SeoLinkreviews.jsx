import React from "react";
import './SeoLinkreviews.css';
import Volkswagen from "../ImageSection/Volkswagen.jpg"
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { IconContext } from "react-icons/lib";

function SeoLinkReviews() {
    return (
        <div className="_SeoLinkReviewsmaindiv">
            <div className="_SeoLinkReviews1">
                <div className="_SeoLinkCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoLinkRatingStar">
                    <IconContext.Provider value={{ className: 'ratingLinkIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
            <div className="_SeoLinkReviews1">
                <div className="_SeoLinkCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoLinkRatingStar">
                    <IconContext.Provider value={{ className: 'ratingLinkIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews</p>
            </div>
            <div className="_SeoLinkReviews1">
                <div className="_SeoLinkCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoLinkRatingStar">
                    <IconContext.Provider value={{ className: 'ratingLinkIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
            <div className="_SeoLinkReviews1">
                <div className="_SeoLinkCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoLinkRatingStar">
                    <IconContext.Provider value={{ className: 'ratingLinkIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
        </div>
    )
}
export default SeoLinkReviews