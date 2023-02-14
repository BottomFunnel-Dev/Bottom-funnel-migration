import React from "react";
import styles from "./AboutUS.module.css";
import Head from "next/head";
import dynamic from "next/dynamic";

// ---------------importing components with lazy loading-----------------------
const AboutusBanner = dynamic(
  () => import("../../components/aboutUs/AboutusBanner/AboutusBanner"),
  { loading: () => "loading..." },
);
const OurAchievements = dynamic(
  () => import("../../components/aboutUs/OurAchievements/OurAchievements"),
  { loading: () => "loading..." },
);
const OurBlogs = dynamic(
  () => import("../../components/aboutUs/OurBlogs/OurBlogs"),
  { loading: () => "loading..." },
);
const OurProcess = dynamic(
  () => import("../../components/aboutUs/OurProcess/OurProcess"),
  { loading: () => "loading..." },
);
const WorkLifeBalance = dynamic(
  () => import("../../components/aboutUs/WorkLifeBalance/WorkLifeBalance"),
  { loading: () => "loading..." },
);

// ------------------Main page function-----------------
export default function AboutUS() {
  return (
    <div className={styles.AboutUSmain}>
      <Head>
        <title> About Us | Bottom Funnel </title>
        <meta
          name="description"
          content="Bottom funnels help you stay connected and informed about what's going on around you, so that everything
         falls into place effortlessly. Bottom funnels are also perfect for organizing yourself & your workspace! Don't miss out
          on this amazing organizational tool!"
        />
      </Head>
      <main>
        <AboutusBanner />
        <OurProcess />
        <OurAchievements />
        <WorkLifeBalance />
        <OurBlogs />
      </main>
    </div>
  );
}
