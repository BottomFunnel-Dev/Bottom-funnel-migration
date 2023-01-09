import './SeoPPCTrustedCompanies.css';
import React from "react";
import Slider from "react-slick";
import tata from "../ImageSection/Tata.jpg"
import hdfc from '../ImageSection/HDFC.jpg';
import airtel from '../ImageSection/Airtel.jpg';
import Hindustan from '../ImageSection/Hindustan.jpg';
import Google from "../ImageSection/Google.jpg";
const SeoPPCTrusted = () => {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        autoplaySpeed: 2500,
        variableWidth: true
    }
    return (
    <div className='_SeoPPCTrusted'>

        <div className="_SeoPPCTrustedtext">
            Trusted By Global Brands
        </div>
        <div className='_SeoPPCTrustedCarousel'>
            <Slider {...settings}>
                <div className='_SeoPPCbrandimg'>
                    <img src={tata} alt="image.jpg"/>  
                </div>
                <div className='_SeoPPCbrandimg'>
                    <img src={hdfc} alt="image.jpg"/>  
                </div>
                <div className='_SeoPPCbrandimg'>
                <img src={airtel} alt="image.jpg"/>  
                </div>
                <div className='_SeoPPCbrandimg'>
                <img src={Hindustan} alt="image.jpg"/>  
                </div>
                <div  className='_SeoPPCbrandimg'>
                <img src={Google} alt="image.jpg"/>  
                </div>
                <div className='_SeoPPCbrandimg'>
                <img src={hdfc} alt="image.jpg"/>  
                </div>
                <div className='_SeoPPCbrandimg'>
                <img src={airtel} alt="image.jpg"/>  
                </div>
                <div className='_SeoPPCbrandimg'>
                <img src={Hindustan} alt="image.jpg"/>  
                </div>
            </Slider>
        </div>
    </div>
    )
}
export default SeoPPCTrusted;