import React from "react";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

import { EngagementBanner } from "../../components/EngagementPage/EngagementBanner/EngagementBanner";
import { EngagementProcess } from "../../components/EngagementPage/EngagementProcess/EngagementProcess";
import { EngagementRanges } from "../../components/EngagementPage/EngagementRanges/EngagementRanges";
import { EngagementQuery } from "../../components/EngagementPage/EngagementQuery/EngagementQuery";
import Head from "next/head";

export default function  EngagementModel () {
  return (
    <div>
    
      <Head>
        <title> Engagement Models - Fixed Price, Time  Material, Dedicated Resource | Bottom Funnel</title>
        <meta
          name="description"
          content="Bottom Funnel is a modern, efficient way to meet customers' needs. We offer multiple engagement models and pricing options to meet client needs. Bottom Funnel's experienced staff understand how to design engaging websites that will keep visitors interested. Our team can also assist with marketing strategies so your business can reach the maximum number of visitors possible!"
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
      <EngagementBanner />
      <EngagementProcess />
      <EngagementRanges />
      <EngagementQuery />

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
