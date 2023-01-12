import React from 'react'
import styles from "./DigitaMarketWeOffers.module.css";

export const DigitaMarketWeOffers = () => {

    const digitalmarketweofferdata = [
        {
            numbering: "01",
            htxt: "SEO Service",
            stxt: " If you’re looking for a thorough and responsive SEO Service, that can help your business grow from the web and social media, then Creative Digital Marketing Agency is the perfect choice for you.",
            logo: "Images/digitalmarket/Seo.png"
        },


        {
            numbering: "02",
            htxt: "Local SEO Service",
            stxt: "A Local SEO Service from Creative Digital Marketing Agency helps your brand to become a top-ranking participant in Google. We can help you : - Improve your search ranking - Strengthen your brand’s presence on the first page of google for your targeted keywords to increase sales & conversions",
            logo: "Images/digitalmarket/localseo 1.png"
        },

        {
            numbering: "03",
            htxt: "SEM Services",
            stxt: "Digital Marketing is about creating a customer’s experience through an optimized path to purchase. Creative Digital Marketing Agency offers turnkey solutions and services for any size or industry organization, including: Social Media, Email marketing, Search engine optimization and PPC",
            logo: "Images/digitalmarket/sem 1.png"
        },


        {
            numbering: "04",
            htxt: "PPC Management Services",
            stxt: "We offer PPC Management Services in both Google Adwords and Bing. We have the customized PPC campaign that are tailor made and designed to meet your Business Objectives. Our team will help you get more organic traffic and ads to your website, landing page or blog.",
            logo: "Images/digitalmarket/ppc 1.png"
        },

        {
            numbering: "05",
            htxt: "Guest Posting Services",
            stxt: "Welcome to Creative Digital Marketing Agency, a full-service marketing agency that provides everything from social media management and content creation, to video production and event planning. Our staff of marketing experts has the experience and expertise to take your business to the next level.",
            logo: "Images/digitalmarket/guest 1.png"
        },

        {
            numbering: "06",
            htxt: "Link Building Services",
            stxt: "At Creative Digital Marketing Agency we provide businesses with a wide range of link building services such as article/content writing, review submission, social media and website optimization.",
            logo: "Images/digitalmarket/email 1.png"
        },

        {
            numbering: "07",
            htxt: "Email Marketing Services",
            stxt: "We will work closely with you to create the best possible email marketing strategy. From acquiring new customers, to generating leads, and nurturing them along their decision making journey, we provide a complete and cohesive marketing solution to maximize your return on investment (ROI).",
            logo: "Images/digitalmarket/link 1.png"
        },

    ]

    return (

        <div>
            <div className={styles.weofferbesttextbox}>
                <h1>We Offers the Best Digital Marketing</h1>
            </div>
            <div className={styles.digitalmarketingweoffersmainboxes}>{digitalmarketweofferdata.map((e) => {
                return (
                    <div className={styles.marketplaceboxerflex}>
                    
                        <div className={styles.marketplacenumberingbox}>{e.numbering}</div>
                        <div className={styles.marketplaceiconbox}>
                            <img src={e.logo} alt='icon' />
                        </div>
                        <div className={styles.marketplacetxtbox}>
                            <h4 className={styles.colorred}>{e.htxt}</h4>
                            <p>{e.stxt}</p>
                        </div>
                        <div><button className={styles.digitalmarketingwhybutton}>Choose Service</button></div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

