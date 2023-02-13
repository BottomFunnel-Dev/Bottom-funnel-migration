import React from "react";
import styles from "./AboutUS.module.css";
import Head from "next/head";

import { AboutusBanner } from "../../components/aboutUs/AboutusBanner/AboutusBanner";
import { OurAchievements } from "../../components/aboutUs/OurAchievements/OurAchievements";
import { OurBlogs } from "../../components/aboutUs/OurBlogs/OurBlogs";
import { OurProcess } from "../../components/aboutUs/OurProcess/OurProcess";
import { WorkLifeBalance } from "../../components/aboutUs/WorkLifeBalance/WorkLifeBalance";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." },
);
import Navbar from "../../components/Navbar/Navbar";

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
