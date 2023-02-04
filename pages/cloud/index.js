import React from "react";
import styles from "./CloudPage.module.css";
import { CloudBanner } from "../../components/CloudPage/CloudBanner/CloudBanner";
import { CloudUnique } from "../../components/CloudPage/CloudUnique/CloudUnique";
import { CloudStats } from "../../components/CloudPage/CloudStats/CloudStats";
import { CloudOffers } from "../../components/CloudPage/CloudOffers/CloudOffers";
import { CloudWorkWithUs } from "../../components/CloudPage/CloudWorkWithUs/CloudWorkWithUs";
import { CloudSolutions } from "../../components/CloudPage/CloudSolutions/CloudSolutions";
import { CloudWhyBF } from "../../components/CloudPage/CloudWhyBF/CloudWhyBF";
import { CustomWebForm } from "../../components/CustomisedWebPage/CustomWebForm/CustomWebForm";

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

export default function CloudPage () {
  return (
    <div className={styles.CloudPageContainer}>

      <Head>
        <title>Cloud Services | Bottom Funnel</title>
        <meta
          name="description"
          content="Want to offer a cloud services offering? Our guide 
          covers key areas for successful Cloud offering
          planning, including defining your target market and 
          designing an effective value proposition"
        />
      </Head>
      <main>

      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <CloudBanner />
      <CloudUnique />
      <CloudStats />
      <CloudOffers />
      <CloudWorkWithUs />
      <CloudSolutions />
      <CloudWhyBF />
      <CustomWebForm />
      
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
};
