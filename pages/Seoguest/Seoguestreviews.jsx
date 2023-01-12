import React from "react";
import './Seoguestreviews.css';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { IconContext } from "react-icons/lib";

function SeoguestReviews() {
    return (
        <div className="_SeoguestReviewsmaindiv">
            <div className="_SeoguestReviews1">
                <div className="_SeoguestCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoguestRatingStar">
                    <IconContext.Provider value={{ className: 'ratingguestIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
            <div className="_SeoguestReviews1">
                <div className="_SeoguestCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoguestRatingStar">
                    <IconContext.Provider value={{ className: 'ratingguestIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews</p>
            </div>
            <div className="_SeoguestReviews1">
                <div className="_SeoguestCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoguestRatingStar">
                    <IconContext.Provider value={{ className: 'ratingguestIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
            <div className="_SeoguestReviews1">
                <div className="_SeoguestCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoguestRatingStar">
                    <IconContext.Provider value={{ className: 'ratingguestIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
        </div>
    )
}
export default SeoguestReviews