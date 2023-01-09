import React from "react";
import './SeoLocalreviews.css';
import Volkswagen from "../ImageSection/Volkswagen.jpg"
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { IconContext } from "react-icons/lib";

function SeoLocalReviews() {
    return (
        <div className="_SeoLocalReviewsmaindiv">
            <div className="_SeoLocalReviews1">
                <div className="_SeoLocalCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoLocalRatingStar">
                    <IconContext.Provider value={{ className: 'ratingLocalIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
            <div className="_SeoLocalReviews1">
                <div className="_SeoLocalCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoLocalRatingStar">
                    <IconContext.Provider value={{ className: 'ratingLocalIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews</p>
            </div>
            <div className="_SeoLocalReviews1">
                <div className="_SeoLocalCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoLocalRatingStar">
                    <IconContext.Provider value={{ className: 'ratingLocalIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
            <div className="_SeoLocalReviews1">
                <div className="_SeoLocalCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoLocalRatingStar">
                    <IconContext.Provider value={{ className: 'ratingLocalIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
        </div>
    )
}
export default SeoLocalReviews