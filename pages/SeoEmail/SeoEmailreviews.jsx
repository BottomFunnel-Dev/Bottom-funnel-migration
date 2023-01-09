import React from "react";
import './SeoEmailreviews.css';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { IconContext } from "react-icons/lib";

function SeoEmailReviews() {
    return (
        <div className="_SeoEmailReviewsmaindiv">
            <div className="_SeoEmailReviews1">
                <div className="_SeoEmailCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoEmailRatingStar">
                    <IconContext.Provider value={{ className: 'ratingEmailIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
            <div className="_SeoEmailReviews1">
                <div className="_SeoEmailCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoEmailRatingStar">
                    <IconContext.Provider value={{ className: 'ratingEmailIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews</p>
            </div>
            <div className="_SeoEmailReviews1">
                <div className="_SeoEmailCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoEmailRatingStar">
                    <IconContext.Provider value={{ className: 'ratingEmailIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
            <div className="_SeoEmailReviews1">
                <div className="_SeoEmailCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoEmailRatingStar">
                    <IconContext.Provider value={{ className: 'ratingEmailIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
        </div>
    )
}
export default SeoEmailReviews