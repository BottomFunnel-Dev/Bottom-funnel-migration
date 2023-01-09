import './SeoLocalTrustedCompanies.css';
import React from "react";
import Slider from "react-slick";
import tata from '../ImageSection/Tata.jpg';
import hdfc from '../ImageSection/HDFC.jpg';
import airtel from '../ImageSection/Airtel.jpg';
import Hindustan from '../ImageSection/Hindustan.jpg';
import Google from "../ImageSection/Google.jpg";
const SeoLocalTrusted = ({}) => {
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
    <div className='_SeoLocalTrusted'>

        <div className="_SeoLocalTrustedtext">
            Trusted By Global Brands
        </div>
        <div className='_SeoLocalTrustedCarousel'>
            <Slider {...settings}>
                <div className='_SeoLocalbrandimg'>
                    <img src={tata} alt="image.jpg"/>  
                </div>
                <div className='_SeoLocalbrandimg'>
                    <img src={hdfc} alt="image.jpg"/>  
                </div>
                <div className='_SeoLocalbrandimg'>
                <img src={airtel} alt="image.jpg"/>  
                </div>
                <div className='_SeoLocalbrandimg'>
                <img src={Hindustan} alt="image.jpg"/>  
                </div>
                <div  className='_SeoLocalbrandimg'>
                <img src={Google} alt="image.jpg"/>  
                </div>
                <div className='_SeoLocalbrandimg'>
                <img src={hdfc} alt="image.jpg"/>  
                </div>
                <div className='_SeoLocalbrandimg'>
                <img src={airtel} alt="image.jpg"/>  
                </div>
                <div className='_SeoLocalbrandimg'>
                <img src={Hindustan} alt="image.jpg"/>  
                </div>
            </Slider>
        </div>
    </div>
    )
}
export default SeoLocalTrusted;