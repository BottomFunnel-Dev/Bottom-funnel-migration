import React from "react";
import './SeoSEMreviews.css';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { IconContext } from "react-icons/lib";

function SeoSEMReviews() {
    return (
        <div className="_SeoSEMReviewsmaindiv">
            <div className="_SeoSEMReviews1">
                <div className="_SeoSEMCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoSEMRatingStar">
                    <IconContext.Provider value={{ className: 'ratingSEMIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
            <div className="_SeoSEMReviews1">
                <div className="_SeoSEMCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoSEMRatingStar">
                    <IconContext.Provider value={{ className: 'ratingSEMIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews</p>
            </div>
            <div className="_SeoSEMReviews1">
                <div className="_SeoSEMCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoSEMRatingStar">
                    <IconContext.Provider value={{ className: 'ratingSEMIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
            <div className="_SeoSEMReviews1">
                <div className="_SeoSEMCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoSEMRatingStar">
                    <IconContext.Provider value={{ className: 'ratingSEMIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
        </div>
    )
}
export default SeoSEMReviews