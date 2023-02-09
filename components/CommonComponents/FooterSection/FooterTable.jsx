import React from "react";
import styles from "./footertable.module.css";
import Link from "next/link";

const FooterTable = () => {
  return (
    <div className={styles.footerTable}>
      <div className={styles.innerTable}>
        <Link href={"/about-us"}>
          <p className={styles.link_css}>About</p>
        </Link>

        <Link href={"/about-us"}>
          <p className={styles.link_inner_css}>About Us</p>
        </Link>
        <Link href={"/about-us"}>
          <p className={styles.link_inner_css}>Our Team</p>
        </Link>
        <Link href={"/career"}>
          <p className={styles.link_inner_css}>Career</p>
        </Link>
        <Link href={"/contact-us"}>
          <p className={styles.link_inner_css}>Contact us</p>
        </Link>
        <Link href={"/client-reviews"}>
          <p className={styles.link_inner_css}>Client reviews</p>
        </Link>
        <Link href={"/our-clients"}>
          <p className={styles.link_inner_css}>Our Clients</p>
        </Link>
        <Link href={"/awards"}>
          <p className={styles.link_inner_css}>Awards & Memberships</p>
        </Link>
        <Link href={"/press-and-media"}>
          <p className={styles.link_inner_css}>Press and media</p>
        </Link>
        <Link href={"/our-development-process"}>
          <p className={styles.link_inner_css}>Our Development Process</p>
        </Link>
        <Link href={"/engagement"}>
          <p className={styles.link_inner_css}>Engagement Modals</p>
        </Link>
        <Link href={"/"}>
          <p className={styles.link_inner_css}>Our partners</p>
        </Link>
      </div>

      <div className={styles.innerTable}>
        <Link href={"/web-development"}>
          <p className={styles.link_css}>Web Development</p>
        </Link>
        <Link href={"/php-development"}>
          <p className={styles.link_inner_css}>PHP Development</p>
        </Link>
        <Link href={"/mern-stack"}>
          <p className={styles.link_inner_css}>MERN Stack Development</p>
        </Link>
        <Link href={"/mean-stack-development"}>
          <p className={styles.link_inner_css}>MEAN Stack Development</p>
        </Link>
        <Link href={"/asp-net-development"}>
          <p className={styles.link_inner_css}>ASP.NET Development</p>
        </Link>
        <Link href={"/java-development"}>
          <p className={styles.link_inner_css}>Java Develoment</p>
        </Link>
        <Link href={"/python-development"}>
          <p className={styles.link_inner_css}>Python Development</p>
        </Link>
        <Link href={"/ruby-development"}>
          <p className={styles.link_inner_css}>Ruby on Rails Development</p>
        </Link>
        <Link href={"/golang-development"}>
          <p className={styles.link_inner_css}>Golang Development</p>
        </Link>
        <Link href={"/javascript-development"}>
          <p className={styles.link_inner_css}>Javascript Development</p>
        </Link>
      </div>

      <div className={styles.innerTable}>
        <p className={styles.link_css}>Mobile App Development</p>
        <Link href={"/android"}>
          <p className={styles.link_inner_css}>Android App Development</p>
        </Link>
        <Link href={"/ios"}>
          <p className={styles.link_inner_css}>IOS App Development</p>
        </Link>
        <Link href={"/kotlin-development"}>
          <p className={styles.link_inner_css}>Kotlin App Developement</p>
        </Link>
        <Link href={"/flutter"}>
          <p className={styles.link_inner_css}>Flutter App Development</p>
        </Link>
        <Link href={"/reactNative"}>
          <p className={styles.link_inner_css}> React Native App Development</p>
        </Link>
        <Link href={"/xamarin-Development"}>
          <p className={styles.link_inner_css}>Xamarin App Development</p>
        </Link>
        <Link href={"/iconic"}>
          <p className={styles.link_inner_css}>Ionic App Development</p>
        </Link>
        <Link href={"/wearable-app-development"}>
          <p className={styles.link_inner_css}>Wearable App Developement</p>
        </Link>
        <Link href={"/mobile-user-experience"}>
          <p className={styles.link_inner_css}>Mobile UX/UI</p>
        </Link>
      </div>

      <div className={styles.innerTable}>
        <p className={styles.link_css}> Digital Marketing Services </p>
        <Link href={"/seo"}>
          <p className={styles.link_inner_css}>Seo Services</p>
        </Link>
        <Link href={"/local-seo"}>
          <p className={styles.link_inner_css}>Local Seo Services</p>
        </Link>
        <Link href={"/seo-sem"}>
          <p className={styles.link_inner_css}>SEM Services</p>
        </Link>
        <Link href={"/seo-ppc"}>
          <p className={styles.link_inner_css}>PPC Management Services</p>
        </Link>
        <Link href={"/seo-guest-post"}>
          <p className={styles.link_inner_css}> Guest Posting Services</p>
        </Link>
        <Link href={"/seo-link-building"}>
          <p className={styles.link_inner_css}> Link Building Services</p>
        </Link>
        <Link href={"/emailservices"}>
          <p className={styles.link_inner_css}>Email Marketing Services</p>
        </Link>
      </div>
    </div>
  );
};

export default FooterTable;
