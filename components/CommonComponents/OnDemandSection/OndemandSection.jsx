import React from "react";
import styles from "./ondemandSection.module.css";
import { IconContext } from "react-icons/lib";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const OndemandSection = () => {
  const ondemandSol = [
    {
      solutionName: "Mobile App Solution",
      bg: "/Images/ondemand/mobile.png",
      logoImgageOrange: "/Images/ondemand/mobileAppOrange.png",
      logoImgageWhite: "/Images/ondemand/mobileAppWhite.png",
      description:
        "Our mobility solutions allow people to connect and share information from the most remote of places, even if they're on the move.",
      actionArrow: <BsArrowRight />,
      link: "/mobile-app-development"
    },
    {
      solutionName: "Software Solutions",
      bg: "Images/ondemand/webdev.png",

      logoImgageOrange: "/Images/ondemand/softwareSolutionsOrange.png",
      logoImgageWhite: "/Images/ondemand/softwareSolutionsWhite.png",
      description:
        "our software solutions allow us to perform all the time-consuming tasks and automate regular tasks to cater to your needs and make your life easier.",
      actionArrow: <BsArrowRight />,
      link: "/website-builder-app",
    },
    {
      solutionName: "UI UX Designs",
      bg: "Images/ondemand/uiuxdesign.png",
      logoImgageOrange: "Images/ondemand/uiOrange.png",
      logoImgageWhite: "Images/ondemand/uiWhite.png",
      description:
        "Our UI UX designs are designed to make interacting with products easy. We reduce cognitive load by making interfaces consistent.",
      actionArrow: <BsArrowRight />,
      link: "/user-interface",
    },
    {
      solutionName: "Food Delivery App",
      bg: "Images/ondemand/fooddelivery.png",
      logoImgageOrange: "Images/ondemand/foodDeliveryOrange.png",
      logoImgageWhite: "Images/ondemand/foodDeliveryWhite.png",
      description:
        "With our branded food delivery app, your customers will be able to order and have delicious meals delivered to them at any time.",
      actionArrow: <BsArrowRight />,
      link: "/food-delivery",
    },
    {
      solutionName: "Beauty & Salon App",
      bg: "Images/ondemand/beauty.png",
      logoImgageOrange: "Images/ondemand/beautyOrange.png",
      logoImgageWhite: "Images/ondemand/beautyWhite.png",
      description:
        "With our on-demand beauty and salon app development services, you’ll get your own beautiful and user-friendly app for your clients.",
      actionArrow: <BsArrowRight />,
      link: "/beautycareapp",
    },
    {
      solutionName: "Marketplace App",
      bg: "Images/ondemand/marketplace.png",
      logoImgageOrange: "Images/ondemand/marketOrange.png",
      logoImgageWhite: "Images/ondemand/marketWhite.png",
      description:
        "Create various types of marketplace platforms like B2B and multi-vendor with our on-demand marketplace app development solutions.",
      actionArrow: <BsArrowRight />,
      link: "/marketplace",
    },
    {
      solutionName: "Cannabis Delivery App",
      bg: "Images/ondemand/cannabis.png",
      logoImgageOrange: "Images/ondemand/cannabisOrange.png",
      logoImgageWhite: "Images/ondemand/cannabisWhite.png",
      description:
        "Let your users order Cannabis using a feature-rich mobile app and website with our on-demand cannabis delivery app development solutions. ",
      actionArrow: <BsArrowRight />,
      link: "/cannabis",
    },
    {
      solutionName: "Digital Marketing Solutions",
      bg: "Images/ondemand/digitalmarketing.png",
      logoImgageOrange: "Images/ondemand/digitalOrange.png",
      logoImgageWhite: "Images/ondemand/digitalWhite.png",
      description:
        "Step-up your game, reach your target audience and maximise your ROI with our unique ondemand digital marketing solutions.",
      actionArrow: <BsArrowRight />,
      link: "/digitalmarketing"
    },
    {
      solutionName: "Pharmacy Delivery App",
      bg: "Images/ondemand/pharmacy.png",
      logoImgageOrange: "Images/ondemand/pharmacyorange.png",
      logoImgageWhite: "Images/ondemand/pharmacywhite.png",
      description:
        "Provide your customers hassle free experience of ordering medicines online with our ondemand pharmacy app development solutions.",
      actionArrow: <BsArrowRight />,
      link: "/pharmacy",
    },
    {
      solutionName: "Taxi Booking App",
      bg: "Images/ondemand/taxibooking.png",
      logoImgageOrange: "Images/ondemand/taxiorange.png",
      logoImgageWhite: "Images/ondemand/taxiwhite.png",
      description:
        "Level up your cab business with an easy to use and attractive taxi booking app through our ondemand taxi app development solutions.",
      actionArrow: <BsArrowRight />,
      link: "/taxi-booking",
    },
  ];
  return (
    <div className={styles.ondemandSection}>
      <h1>On-demand Solutions</h1>
      <div className={styles.mainOndemand}>
        {ondemandSol.map((item, index) => (
          <div key={index} className={styles.ondemandInner}>

            <img className={styles.solImage} src={item.bg} alt="image" />
            <div className={styles.solText}>
              <div className={styles.solLogos}>
                <img
                  className={styles.orangeImage}
                  src={item.logoImgageOrange}
                  alt="image"
                />
                <img className={styles.whiteImage} src={item.logoImgageWhite} alt="image" />
              </div>

              <h4>{item.solutionName}</h4>
              <p>{item.description}</p>
              <Link href={`${item.link}`} key={index} >
                <IconContext.Provider value={{ className: styles.arrowIcon }}>
                  {item.actionArrow}
                </IconContext.Provider>
              </Link>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default OndemandSection;
