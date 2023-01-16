import React from "react";
// import { useNavigate } from "react-router-dom";
import Link from "next/link";
import styles from "./moreServices.module.css";
const MoreServices = () => {
  // const navigate = useNavigate();

  return (
    <div className={styles.footerTable}>
      <div className={styles.innerTable}>
        <p className = {styles.link_css}>Trending Technologies</p>
        <p>Big data services</p>
        <p>Blockchain services</p>
        <p>Machine Learning</p>
        <p>Artificial Intelligence</p>
        <p>Data Analytics</p>
        <p>Crypto currency development</p>
        <p>Customised web development</p>
        <p>Virtual reality development</p>
        <p>Augmented Reality</p>
        <p>NFT Development</p>
        <p>IoT Development</p>
        <p>Startup solutions</p>
        <p>Enterprise solutions</p>
        <p>Metaverse services</p>
      </div>

      <div className={styles.innerTable}>
        <p className = {styles.link_css}>On Demand Solutions</p>
        <Link href={"/food-delivery"}>
          <p>Food Delivery App</p>
        </Link>
        <Link href={"/ondemandHomeServices"}>
          <p>On Demand Home Solution</p>
        </Link>
        <Link href={"/alcohol"}>
          <p>Alcohol Delivery App</p>
        </Link>

        <p>laundry Delivery App</p>
        <Link href={"/grocery"}>
          <p>Grocery Delivery App</p>
        </Link>
        <Link href={"/beautycareapp"}>
          <p>Beauty & Salon App</p>
        </Link>
        <Link href={"/cannabis"}>
          <p>Cannabis Delivery App</p>
        </Link>
        <p>Marketplace app</p>
        <p>Pickup & delivery</p>
        <p>Pharmacy Delivery App</p>
        <p>Flower Delivery App</p>
        <p>Carpooling App</p>
        <p>Taxi Booking App</p>
        <Link href={"/taxi-booking"}>
          <p>Tool Delivery App</p>
        </Link>
        <Link href={"/Icecream"}>
          <p>Icecream Delivery App </p>
        </Link>
      </div>

      <div className={styles.innerTable}>
        <p className = {styles.link_css}>Industry We Serve</p>
        <Link href={"/education"}>
          <p>Education</p>
        </Link>
        <Link href={"/gameDevelopment"}>
          <p>Gaming</p>
        </Link>
        <Link href={"/ecommerce"}>
          <p>E-Commerce</p>
        </Link>
        <Link href={"/videostreaming"}>
          <p>Video Streaming</p>
        </Link>
        <p>Sports Betting</p>
        <p>IoT Development</p>
        <Link href={"/fitness"}>
          <p>Fitness</p>
        </Link>
        <Link href={"/dating"}>
          <p>Dating</p>
        </Link>
        <p>Cryptocurrency</p>
        <p>Social media</p>
        <Link href={"/Logistics"}>
          <p>Logistics</p>
        </Link>
        <p>Ploitics</p>
        <p>Wellness</p>
        <p>News</p>
        <p>Saas</p>
        <p>Events</p>
        <Link href={"/eScooter"}>
          <p>eScooter</p>
        </Link>
        <Link href={"/travel"}>
          <p>Travel</p>
        </Link>
      </div>

      <div className={styles.innerTable}>
        <p className = {styles.link_css}>Products</p>
        <p>Bottom Funnel Omnichannel</p>
        <p>Bottom Funnel Support Desk</p>
        <p>Bottom Funnel Contact Center</p>
        <p>Bottom Funnel Chat</p>
        <p>Bottom Funnel Service</p>
        <p>Bottom Funnel Sales</p>
        <p>Bottom Funnel Suite</p>
        <p>Bottom Funnel Team</p>
        <p>Bottom Funnel Marketer</p>
      </div>
    </div>
  );
};

export default MoreServices;
