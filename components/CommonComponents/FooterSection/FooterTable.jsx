import React from "react";
import styles from "./footertable.module.css";
// import { useNavigate } from "react-router-dom";
import Link from "next/link";

const FooterTable = () => {
  // const navigate = useNavigate();

  return (
    <div className={styles.footerTable}>
      <div className={styles.innerTable}>
        <Link  href={"/about-us"}>
          <p className = {styles.link_css}>About</p>
        </Link>

        <Link href={"/about-us"}>
          <p>About Us</p>
        </Link>
        <Link href={"/about-us"}>
          <p>Our Team</p>
        </Link>
        <Link href={"/"}>
          <p>Career</p>
        </Link>
        <Link href={"/contact-us"}>
          <p>Contact us</p>
        </Link>
        <Link href={"/client-reviews"}>
          <p>Client reviews</p>
        </Link>
        <Link href={"/our-clients"}>
          <p>Our Clients</p>
        </Link>
        <Link href={"/awards"}>
          <p>Awards & Memberships</p>
        </Link>
        <Link href={"/"}>
          <p>Press and media</p>
        </Link>
        <Link href={"/"}>
          <p>Our Development Process</p>
        </Link>
        <Link href={"/engagement"}>
          <p>Engagement Modals</p>
        </Link>
        <Link href={"/"}>
          <p>Our partners</p>
        </Link>
      </div>

      <div className={styles.innerTable}>
        <Link href={"/web-development"}>
          <p className = {styles.link_css}>Web Development</p>
        </Link>
        <Link href={"/php-development"}>
          <p>PHP Development</p>
        </Link>
        <Link href={"/mern-stack"}>
          <p>MERN Stack Development</p>
        </Link>
        <Link href={"/mean-stack-development"}>
          <p>MEAN Stack Development</p>
        </Link>
        <Link href={"/asp-net-development"}>
          <p>ASP.NET Development</p>
        </Link>
        <Link href={"/java-development"}>
          <p>Java Develoment</p>
        </Link>
        <Link href={"/python-development"}>
          <p>Python Development</p>
        </Link>
        <Link href={"/ruby-development"}>
          <p>Ruby on Rails Development</p>
        </Link>
        <Link href={"/golang-development"}>
          <p>Golang Development</p>
        </Link>
        <Link href={"/javascript-development"}>
          <p>Javascript Development</p>
        </Link>
      </div>

      <div className={styles.innerTable}>
        <p className = {styles.link_css}>Mobile App Development</p>
        <Link href={"/android"}>
          <p>Android App Development</p>
        </Link>
        <Link href={"/ios"}>
          <p>IOS App Development</p>
        </Link>
        <Link href={"/kotlin-development"}>
          <p>Kotlin App Developement</p>
        </Link>
        <Link href={"/flutter"}>
          <p>Flutter App Development</p>
        </Link>
        <Link href={"/reactNative"}>
          <p> React Native App Development</p>
        </Link>
        <Link href={"/Xamarin-Development"}>
          <p>Xamarin App Development</p>
        </Link>
        <Link href={"/iconic"}>
          <p>Ionic App Development</p>
        </Link>
        <Link href={"/wearable-app-development"}>
          <p>Wearable App Developement</p>
        </Link>
        <Link href={"/mobile-user-experience"}>
          <p>Mobile UX/UI</p>
        </Link>
      </div>

      <div className={styles.innerTable}>
        <p className = {styles.link_css}> Digital Marketing Services </p>
        <Link href={"/seo"}>
          <p>Seo Services</p>
        </Link>
        <Link href={"/local-seo"}>
          <p>Local Seo Services</p>
        </Link>
        <Link href={"/seo-sem"}>
          <p>SEM Services</p>
        </Link>
        <Link href={"/seo-ppc"}>
          <p>PPC Management Services</p>
        </Link>
        <Link href={"/seo-guest-post"}>
          <p> Guest Posting Services</p>
        </Link>
        <Link href={"/seo-link-building"}>
          <p> Link Building Services</p>
        </Link>
        <Link href={"/emailservices"}>
          <p>Email Marketing Services</p>
        </Link>
      </div>
    </div>
  );
};

export default FooterTable;
