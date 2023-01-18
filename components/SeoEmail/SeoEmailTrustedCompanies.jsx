import styles from './SeoEmailTrustedCompanies.module.css';
import React from "react";
import Slider from "react-slick";
import tata from "../ImageSection/Tata.jpg"
import hdfc from '../ImageSection/HDFC.jpg';
import airtel from '../ImageSection/Airtel.jpg';
import Hindustan from '../ImageSection/Hindustan.jpg';
import Google from "../ImageSection/Google.jpg";
const SeoEmailTrusted = () => {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        variableWidth: true
    }
    return (
        <div className={styles.seoEmailTrusted}>

            <div className={styles.seoEmailTrustedtext}>
                Trusted By Global Brands
            </div>

            <div className={styles.seoEmailTrustedCarousel}>
                <Slider {...settings}>
                    <div className={styles.seoEmailbrandimg}>
                        <img src={tata} alt="image.jpg" />
                    </div>
                    <div className={styles.seoEmailbrandimg}>
                        <img src={hdfc} alt="image.jpg" />
                    </div>
                    <div className={styles.seoEmailbrandimg}>
                        <img src={airtel} alt="image.jpg" />
                    </div>

                    <div className={styles.seoEmailbrandimg}>
                        <img src={Hindustan} alt="image.jpg" />
                    </div>

                    <div className={styles.seoEmailbrandimg}>
                        <img src={Google} alt="image.jpg" />
                    </div>

                    <div className={styles.seoEmailbrandimg}>
                        <img src={hdfc} alt="image.jpg" />
                    </div>

                    <div className={styles.seoEmailbrandimg}>
                        <img src={airtel} alt="image.jpg" />
                    </div>

                    <div className={styles.seoEmailbrandimg}>
                        <img src={Hindustan} alt="image.jpg" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default SeoEmailTrusted;