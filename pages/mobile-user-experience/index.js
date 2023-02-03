import React from "react";
import { MobileKickStart } from "../../components/MobileUiUxDesign/MobileKickStart";
import { MobileUiUxBanner } from "../../components/MobileUiUxDesign/MobileUiUxBanner";
import { MobileUiUxToNotched } from "../../components/MobileUiUxDesign/MobileUiUxToNotched";
import { MobileUXReactNative } from "../../components/MobileUiUxDesign/MobileUXReactNative";
import { MobileUxUiB2cSolution } from "../../components/MobileUiUxDesign/MobileUxUiB2cSolution";
import { MobileUxUiDesignPartner } from "../../components/MobileUiUxDesign/MobileUxUiDesignPartner";
import { MobileUXUIServiceOffer } from "../../components/MobileUiUxDesign/MobileUXUIServiceOffer";

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

export default function MobileUiUxDesign() {
  return (
    <>
     <Head>
     <title>UX UI App Development Company | Hire UX UI Developers | BottomFunnel</title>
     <meta
       name="description"
       content="Bottom Funnel is the best web design company in India, offers professional & custom website design services including mockup design, graphic UI design e-commerce website design at competitive prices."
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
      <MobileUiUxBanner />
      <MobileUiUxToNotched />
      <MobileUXUIServiceOffer />
      <MobileUxUiB2cSolution />
      <MobileUxUiDesignPartner />
      <MobileKickStart />
      <MobileUXReactNative />

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
    </>
  );
}
