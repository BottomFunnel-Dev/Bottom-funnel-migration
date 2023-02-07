import React from "react";
import { IOSAppDevelopmentPageBanner } from "../../components/IOSAppDevelopmentPage/IOSAppDevelopmentPageBanner/IOSAppDevelopmentPageBanner";
import { IOSAppDevelopmentPageCards } from "../../components/IOSAppDevelopmentPage/IOSAppDevelopmentPageCards/IOSAppDevelopmentPageCards";

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

export default function IOSAppDevelopment() {
  return (
    <>
      <Head>
        <title>
          IOS App Development Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Are you interested in learning how to develop and 
          launch your own iOS app? Our guide covers 
          everything you need to know about IOS app 
          development."
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
        
        <IOSAppDevelopmentPageBanner />
        <IOSAppDevelopmentPageCards />

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
