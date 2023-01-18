import React, { useState } from "react";
import styles from "./portfolio.module.css";
import Slider from "react-slick";
import { BsGlobe, BsApple, BsArrowRight } from "react-icons/bs";
import { AiFillAndroid } from "react-icons/ai";
import { IconContext } from "react-icons";
// import { Link } from "react-router-dom";

const PortFolio = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinite: true,
    accessibility: false,
    autoplaySpeed: 6000,
    speed: 1000,
    slidesToScroll: 1,
    centerMode: true,
    slidesToShow: 1,
    pauseOnHover: false,
    // swipeToSlide:true,
    vertical: true,
    autoplay: true,

    // cssEase: "linear",
    arrows: false,
    beforeChange: (current, next) => setImageIndex(next),
  };
  // "mainSlide"

  const portfolioData = [
    {
      leftimg: "Images/portfolio/yanbal2.png",
      rightImg: "Images/portfolio/yanbal1.png",
      title: "Yanbal",
      tagline: "Global Cosmatic Brand",
      description:
        "Yanbal is a global skincare company. It is a global beauty company inspired by, and created for, women. It goods are sold on the internet and through independent style advisors. Yanbal empowers women through beauty and its business opportunity every day. It provides variety of cosmetics and skincare products for women. Yanbal's US operation sells nationwide and is headquartered in Miami, FL.",
      frontend: " React, jquery, Mordenizr",
      backend: " Java, ASP.NET,",
      database: " CloudFront",
      website: "https://www.yanbal.com//bo/",
      playStore:
        "http://play.google.com/store/apps/details?id=yanbal.colombia2",
    },
    {
      leftimg: "Images/portfolio/physicsfunshop.png",
      rightImg: "Images/portfolio/physicsfunshop1.png",
      title: "Physics Fun Shop",
      tagline: "Educational Brand",
      description:
        "physicsfun is my ongoing attempt to create and sustain a museum on social media, one where I can share my vast collection of curious objects of science",
      frontend: " React, jquery, Mordenizr",
      backend: " Java, ASP.NET,",
      database: " CloudFront",
      website: "https://www.physicsfunshop.com/",
      playStore:
        "http://play.google.com/store/apps/details?id=",
    },
    {
      leftimg: "Images/portfolio/bbgroup.png",
      rightImg: "Images/portfolio/blueberrygroup.png",
      title: "BlueBerry Group",
      tagline: "Global D2C Travel Company",
      description: `The Blueberry Group has taken an innovative approach to service development in many industries and specialized services, establishing a reputation as a leading expert in Travel and Tour Services, ECommerce, Electronics, Home Appliances Division and as a Fashion Brand. Through its Travel and
    Tourism division The Blueberry Group is setting new benchmarks in the sector while providing
      savvy clients from more than 30 countries worldwide.
      `,
      frontend: " React, jquery, Javascript",
      backend: " PHP, Ruby on Rails,",
      database: " CloudFare works",
      website: "https://blueberrygroup.co/",
    },
    {
      leftimg: "Images/portfolio/blueberry2.png",
      rightImg: "Images/portfolio/blueberry1.png",
      title: "Blueberry Travels",
      tagline: "D2C Travel Website",
      description:
        "Blueberry Travel was the first company in the Blueberry Group which was started in 2013. It’s involved in simplifying Travel for everyone with a dedicated team, simplified services and easy customizations according to traveller’s need. It has become fastest growing company and is IATA certified in more than 17 countries. Blueberry Travel was ranked top in most of the Major Airlines in African Continent.",
      frontend: " Jquery, GSAP, Mordenizr",
      backend: " PHP, PHP7,",
      database: " Amazon Route 53",
      website: "https://www.blueberry-travel.com/",
    },

    {
      leftimg: "Images/portfolio/jambo2.png",
      rightImg: "Images/portfolio/jambo1.png",
      title: "Jambo Shoppe",
      tagline: "Global E-commerce Shopping Brand",
      description: `Jambo Shoppe is an e-commerce company in Kenya which houses everything you can possibly
      imagine, from trending electronics like laptops, Tablets, smartphones, and accessories to in-vogue
      fashion staples like shoes, clothing and lifestyle accessories; and wardrobes to appliances that make
      your life easy like washing machines, TVs, ACs, blenders and other time-saving kitchen and small
      appliances, they got everything everyone covered.
      `,
      frontend: " Jquery,Bootstrap",
      backend: " Java",
      database: " CloudFront",
      website: "https://www.jamboshop.com/",
      playStore:
        "http://play.google.com/store/apps/details?id=com.coffye.lijwvx",
    },

    {
      leftimg: "Images/portfolio/roshi.png",
      rightImg: "Images/portfolio/roshi1.png",
      title: "Roshi Wellness",
      tagline: "Global Herbal Products Brand",
      description: `Roshi brings the sophistication of supply chain technologies designed for FDA regulated products to
      cannabis. Purpose built for cannabis and hemp cultivators, manufacturers, processors and
      distributors, Roshi’s mobile first SaaS platform actively manages inventory and optimizes business
      operations while maintaining the highest levels of regulatory compliance.
      `,
      frontend: " jquery, Bootstrap",
      backend: " ASP.NET MVC, ASP.NET,",
      database: " CloudFront",
      website: "https://roshiwellness.com/",
    },
    {
      leftimg: "Images/portfolio/nextholidays2.png",
      rightImg: "Images/portfolio/nextholidays1.png",
      title: "Next Holidays",
      tagline: "D2C travel Website",
      description: `Based in the ancient land of India with its diverse cultures, the company has 14 years of experience
      of travel and tourism. Their ambition is to contribute towards the growth of the Indian and world
      travel community. They suggest suitable holiday destinations and packages customized according to
      requirements. Travel needs are thoroughly met with polite and friendly, timely and efficient, services
      to put smiles on a generation of tourists.
      `,
      frontend: " Angular, jquery",
      backend: " ASP.NET, ASP.NET MVC",
      database: " Cloudflare.js, CDN.js",
      website: "https://www.nextholidays.com/",
    },
    {
      leftimg: "Images/portfolio/oncart2.png",
      rightImg: "Images/portfolio/oncart1.png",
      title: "On-cart",
      tagline: "Smart Shopping App",
      description: `On-cart is an e-commerce store that provides a wide array of products among electronics, apparels
      and groceries, having years of experience working in the electronics and fashionwear industry. They
      are a team of tireless creative explorers and strive to provide their clients with the best quality
      products. They provide logistic support to their clients to ensure continuity of service and on time
      delivery.
      `,
      frontend: " Angular, jquery, Mordenizr",
      backend: " PHP, ASP.NET,",
      database: " CloudFront, AJAX Libraries API",
      website: "https://www.on-cart.com/",
      playStore:
        "http://play.google.com/store/apps/details?id=com.coffye.lijwvx",
    },
    {
      leftimg: "Images/portfolio/travelflap.png",
      rightImg: "Images/portfolio/travelflap1.png",
      title: "Travelflap",
      tagline: "D2C Travel Company",
      description: `Travel Flap is a New York -based privately owned leading tourism brand with over 15 years of
      experience in the travel and hospitality domain. The company is driven by the vision to be the world's most recognized and trusted e-com tourism companies. Travel Flap is a premium-experience
      travel website, which offers flights to over 3,000 destinations, hotel stays in over 85,000 properties
      around the world, holiday experiences and much more. `,
      frontend: "React, Bootstrap,",
      backend: "Node, Javascript",
      database: "MongoDB",
      website: "https://www.travelflap.com/",
    },
    {
      leftimg: "Images/portfolio/mukunda.png",
      rightImg: "Images/portfolio/mukunda1.png",
      title: "Mukunda",
      tagline: "Global Trading Company",
      description: `Mukunda General Trading is a well-established Company for all ICT Material, Hardware, Construction
      materials, Plumbing Items, Electrical materials, Agricultural goods, Stationary as well as various other
      goods, diversified in all sorts of goods. They are the subsidiary of Blueberry Holding Limited based in
      Dubai, with experienced procurement team having turnover above 100 million dollars per annum.
      `,
      frontend: "React, Bootstrap,",
      backend: "Node, Javascript",
      database: "MongoDB",
      website: "https://www.themukunda.com/",
    },
    {
      leftimg: "Images/portfolio/spjbg.png",
      rightImg: "Images/portfolio/spj1.png",
      title: "SPJ Electronics",
      tagline: "Global Market Leader in Electrical Industry",
      description: `SPJ Electronic is a global market leader in the electrical industry. SPJ Electronics offers diverse
      selection of consumer electrical solutions including Fans, Home appliances, Lighting and Switchgear.
      They are the distributor of modern appliances that are available in the market. SPJ Electronic was
      found in Madagascar initially and now it has presence in Zambia & Kenya and planning to open new
      13 new store in East Africa market.`,
      frontend: "React, Bootstrap,",
      backend: "Node, Javascript",
      database: "MongoDB",
      website: "https://spj-electronics.com/",
    },
    {
      leftimg: "Images/portfolio/amydus2.png",
      rightImg: "Images/portfolio/amydus1.png",
      title: "Amydus",
      tagline: "Global E-commerce Website",
      description:
        "Amydus is a brand that caters to the very much needed demand of ready to wear plus size clothing online, which offers collection in both men's and women's wear. Online plus size clothing and plus size fashion makes a fresh start with Amydus and vice versa. Now you can not only find clothing in trend but also get them in your size",
      frontend: "React, Bootstrap,",
      backend: "Node, Javascript",
      database: "MongoDB",
      website: "https://www.amydus.com/",
    },
    {
      leftimg: "Images/portfolio/aanandam.png",
      rightImg: "Images/portfolio/aanandam1.png",
      title: "The Aanandam",
      tagline: "Hotel and Resorts Brand",
      description:
        "The Aanandam Hotel Resort offers four broad categories of accommodations - Deluxe Rooms, Suites, Penthouse and Dormitory. Designed keeping the comfort of our guests in mind, these accommodations come fitted with a myriad of state-of-the-art amenities and favourable facilities. Our rooms and suites open up to the beautiful views of the city, ensuring an elevated stay at our luxury resort in Itarsi.",
      frontend: "React, Bootstrap,",
      backend: "Node, Javascript",
      database: "MongoDB",
      website: "https://www.theaanandam.in/",
    },
  ];
  return (
    <div className={styles.portfolioSection}>
      <h1>Our Work</h1>
      <Slider {...settings}>
        {portfolioData.map((item, i) => (
          <div
            key={i}
            className={
              i === imageIndex ? [styles.mainSlide,styles.activeMainSlide] : styles.mainSlide
            }
          >
            <div className={styles.leftAnime}>
              <img src={item.leftimg} alt="image" />
              <span className={styles.portfolioText}>
                <h1>{item.title}</h1>
                <h6>{item.tagline}</h6>
                <p>{item.description}</p>

                <div className={styles.weblinks}>
                  <h5>Tech Stack</h5>
                  <span className={styles.techstack}>
                    <p>
                      <strong>Database:</strong> {item.database}
                    </p>
                    <p>
                      <strong>Backend:</strong>
                      {item.backend}
                    </p>
                    <p>
                      <strong>Frontend:</strong> {item.frontend}
                    </p>
                  </span>

                  <div className={styles.appstore}>
                    <span>Available On</span>

                    <IconContext.Provider  value={{ className: styles.webIcon }}>
                      <BsApple />
                    </IconContext.Provider>

                    <a href={item.playStore} target="_blank">
                  
                      <IconContext.Provider value={{ className: styles.webIcon }}>
                        <AiFillAndroid />
                      </IconContext.Provider>
                    </a>

                    <a href={item.website} target="_blank">
                      <IconContext.Provider value={{ className: styles.webIcon }}>
                        <BsGlobe />
                      </IconContext.Provider>
                    </a>
                  </div>
                </div>
                <div className={styles.bottomfunnelBranding}>
                  <img src="Images/navbar/whitebottom.png" alt="image" />
                </div>
                <p className={styles.tagline}>
                  <i>Build Your Brand Presence</i>
                </p>

                <button className={styles.casestudy}>
                  View Case Study{" "}
                  <IconContext.Provider value={{ className: styles.casestudyIcon }}>
                    <BsArrowRight />
                  </IconContext.Provider>
                </button>
              </span>
            </div>
            <div className={styles.rightAnime}>
              <img src={item.rightImg} alt="image" />

              <span className={styles.mobileImage}> </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PortFolio;
