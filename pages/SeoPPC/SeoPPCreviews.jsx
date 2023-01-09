import React from "react";
import './SeoPPCreviews.css';
import Volkswagen from "../ImageSection/Volkswagen.jpg"
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { IconContext } from "react-icons/lib";

function SeoPPCReviews() {
    return (
        <div className="_SeoPPCReviewsmaindiv">
            <div className="_SeoPPCReviews1">
                <div className="_SeoPPCCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoPPCRatingStar">
                    <IconContext.Provider value={{ className: 'ratingPPCIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
            <div className="_SeoPPCReviews1">
                <div className="_SeoPPCCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoPPCRatingStar">
                    <IconContext.Provider value={{ className: 'ratingPPCIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews</p>
            </div>
            <div className="_SeoPPCReviews1">
                <div className="_SeoPPCCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoPPCRatingStar">
                    <IconContext.Provider value={{ className: 'ratingPPCIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
            <div className="_SeoPPCReviews1">
                <div className="_SeoPPCCompanyRatings">
                    <img src={Volkswagen} alt="image" />
                    <div className="_SeoPPCRatingStar">
                    <IconContext.Provider value={{ className: 'ratingPPCIcons' }}>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />
                    </IconContext.Provider>
                    </div>
                </div>
                <p>We are rated 4.5 out of 5 on average across 90 reviews </p>
            </div>
        </div>
    )
}
export default SeoPPCReviews