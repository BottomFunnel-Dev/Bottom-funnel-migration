import React from "react";
import { BusinessAnalysisBanner } from "../../components/BusinessAnalysis/BusinessAnalysisBanner";
import { BusinessAnalysisLowerBanner } from "../../components/BusinessAnalysis/BusinessAnalysisLowerBanner";
import { BusinessChallenge } from "../../components/BusinessAnalysis/BusinessChallenge";
import { BusinessFramework } from "../../components/BusinessAnalysis/BusinessFramework";


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

export default function BusinessAnalysis() {


  return (
    <div>
      <Head>
        <title>Bottom Funnel | Digital Business Analysis Project Management</title>
        <meta
          name="description"
          content="The role of a business analyst is vital in any organization. 
          Our blog will cover the various responsibilities of a BA and 
          how to be successful in the role. Stay tuned!"
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
        <BusinessAnalysisBanner />
        <BusinessChallenge />
        <BusinessFramework />
        <BusinessAnalysisLowerBanner /> {/* Other react required components  */}
        <StoriesSection />
        <OndemandSection /> {/* <PortFolio />  */}
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
