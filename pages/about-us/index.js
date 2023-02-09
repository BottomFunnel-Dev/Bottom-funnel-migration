import React from "react";
import styles from "./AboutUS.module.css";

import { AboutusBanner } from "../../components/aboutUs/AboutusBanner/AboutusBanner";
import { OurAchievements } from "../../components/aboutUs/OurAchievements/OurAchievements";
import { OurBlogs } from "../../components/aboutUs/OurBlogs/OurBlogs";
import { OurProcess } from "../../components/aboutUs/OurProcess/OurProcess";
import { WorkLifeBalance } from "../../components/aboutUs/WorkLifeBalance/WorkLifeBalance";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

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
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}
        />
        <AboutusBanner />
        <OurProcess />
        <OurAchievements />
        <WorkLifeBalance />
        <OurBlogs />
    {/* Other react required components  */}
        <StoriesSection />
        <OndemandSection />
        {/* <PortFolio />  */}
        <PlanProject />
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </div>
  );
}
