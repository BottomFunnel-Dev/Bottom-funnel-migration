import React from "react";
import styles from "./SeoServices.module.css";
import { BsSearch } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { ImLink } from "react-icons/im";
import { SiGoogleanalytics } from "react-icons/si";
import { AiOutlineAudit, AiOutlinePlusCircle } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { IconContext } from "react-icons/lib";

export default function SeoServices() {
  const [description, setDescription] = useState(false);

  const arr1 = [
    {
      servicename: "Local Seo Audits",
      icons: <BsSearch />,
      data: "With our auditing process in place, we ensure that your website is optimised for Search Engine Optimisation (SEO) so that it ranks high on Google and other leading search engine results pages. This translates into an increase in online visibility, which is crucial for business growth.",
    },
    {
      servicename: "Google My Business Optimization & Management",
      icons: <IoLocationSharp />,
      data: "We are a full-fledged SEO company that has experience in creating content for various platforms, optimizing websites, and managing keywords. With our expertise, you can be sure of getting top rankings in search results. We understand how important it is to maintain high-quality content that customers want to read so they become interested in your services or products.",
    },
    {
      servicename: "Citation Audit and Cleanup Service",
      icons: <SiGoogleanalytics />,
      data: "We know how important it is to have your website optimize for search results, so our team works hard to bring you the best results possible. We audit your site's content and structure in order to identify opportunities for improvement and make recommendations based on our years of experience.",
    },
    {
      servicename: "Local Map Search Optimization",
      icons: <ImLink />,
      data: "From optimizing your location page for search engine optimization to adding local businesses to your site, we do it all so that you get maximum visibility on the map! Contact us today and let us help you take your business online with the power of Google Maps!",
    },
    {
      servicename: "Local Business Optimization for Multilocation",
      icons: <AiOutlineAudit />,
      data: "With an experienced team, we have years of knowledge under our belt and are ready to help you grow your business online. We offer a multitude of services to help get your online presence off the ground, including website design and development, SEO, keyword research and publishing, social media management, etc.",
    },
    {
      servicename: "Monthly Local Seo Reporting",
      icons: <FaShoppingCart />,
      data: "With monthly local SEO reports that tell you about search engine traffic for your business's listings in Google Maps, Yahoo Local Search and Bing Maps, Wisdom Marketing is one of the most efficient companies around when it comes to giving your business the boost it needs.",
    },
  ];

  const handleTrigger = (key) => {
    if (description == key) {
      setDescription(() => "");
      return;
    }
    setDescription(() => key);
    return;
  };

  return (
    <div className={styles._Seoservicesmaindiv}>
      <h2>What We Offers in Our SEO Services</h2>
      <div className={styles._Seoservicesslider}>
        {arr1.map((items, i) => {
          return (
            <div key={items} className={styles._SeoServicesnames}>
              <div
                className={styles.frontServiceText}
                style={{
                  opacity: description == items.servicename ? "0" : "1",
                }}
              >
                <IconContext.Provider value={{ className: styles.seoServicesIcon }}>
                  {items.icons}
                </IconContext.Provider>
                <h5>{items.servicename}</h5>
              </div>

              <div
                className={styles.hiddenSeo}
                style={{
                  opacity: description == items.servicename ? "1" : "0",
                }}
              >
                <p>
                 {items.data}
                </p>
              </div>

              <div
                onClick={() => handleTrigger(items.servicename)}
                className={styles.pointTrigger}
              >
                <IconContext.Provider
                  value={{
                    className:
                      description == items.servicename
                        ? styles.pluscircleActive
                        : styles.pluscircle,
                  }}
                >
                  <AiOutlinePlusCircle />
                </IconContext.Provider>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
