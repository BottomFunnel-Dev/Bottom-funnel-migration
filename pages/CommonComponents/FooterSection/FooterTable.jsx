import React from "react";
import styles from "./footertable.module.css";
// import { useNavigate } from "react-router-dom";
import Link from "next/link";

const FooterTable = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.footerTable}>
      <div className={styles.innerTable}>
        <Link href={"/about-us"}>
        <p >About</p>
        </Link>
        
        <p onClick={() => navigate("/about-us")}>About Us</p>
        <p onClick={() => navigate("/about-us")}>Our Team</p>
        <p onClick={() => navigate("/")}>Career</p>
        <p onClick={() => navigate("/contact-us")}>Contact us</p>
        <p onClick={() => navigate("/client-reviews")}>Client reviews</p>
        <p onClick={() => navigate("/our-clients")}>Our Clients</p>
        <p onClick={() => navigate("/awards")}>Awards & Memberships</p>
        <p onClick={() => navigate("/")}>Press and media</p>
        <p onClick={() => navigate("/")}>Our Development Process</p>
        <p onClick={() => navigate("/engagement")}>Engagement Modals</p>
        <p onClick={() => navigate("/")}>Our partners</p>
      </div>

      <div className={styles.innerTable}>
        <p onClick={() => navigate("/web-development")}>Web Development</p>
        <p onClick={() => navigate("/php-development")}>PHP Development</p>
        <p onClick={() => navigate("/mern-stack")}>MERN Stack Development</p>
        <p onClick={() => navigate("/mean-stack-development")}>MEAN Stack Development</p>
        <p onClick={() => navigate("/asp-net-development")}>ASP.NET Development</p>
        <p onClick={() => navigate("/java-development")}>Java Develoment</p>
        <p onClick={() => navigate("/python-development")}>Python Development</p>
        <p onClick={() => navigate("/ruby-development")}>Ruby on Rails Development</p>
        <p onClick={() => navigate("/golang-development")}>Golang Development</p>
        <p onClick={() => navigate("/javascript-development")}>Javascript Development</p>
      </div>

      <div className={styles.innerTable}>
        <p>Mobile App Development</p>
        <p onClick={() => navigate("/android")}>Android App Development</p>
        <p onClick={() => navigate("/ios")}>IOS App Development</p>
        <p onClick={() => navigate("/kotlin-development")}>Kotlin App Developement</p>
        <p onClick={() => navigate("/flutter")}>Flutter App Development</p>
        <p onClick={() => navigate("/reactNative")}>
          React Native App Development
        </p>
        <p onClick={() => navigate("/Xamarin-Development")}>Xamarin App Development</p>
        <p onClick={() => navigate("/iconic")}>Ionic App Development</p>
        <p onClick={() => navigate("/wearable-app-development")}>Wearable App Developement</p>
        <p onClick={() => navigate("/mobile-user-experience")}>Mobile UX/UI</p>
      </div>

      <div className={styles.innerTable}>
        <p> Digital Marketing Services </p>
        <p onClick={() => navigate("/seo")}>Seo Services</p>
        <p onClick={() => navigate("/local-seo")}>Local Seo Services</p>
        <p onClick={() => navigate("/seo-sem")}>SEM Services</p>
        <p onClick={() => navigate("/seo-ppc")}>PPC Management Services</p>
        <p onClick={() => navigate("/seo-guest-post")}>
          Guest Posting Services
        </p>
        <p onClick={() => navigate("/seo-link-building")}>
          Link Building Services
        </p>
        <p onClick={() => navigate("/emailservices")}>
          Email Marketing Services
        </p>
      </div>
    </div>
  );
};

export default FooterTable;
