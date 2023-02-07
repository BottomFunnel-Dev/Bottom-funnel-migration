import React from "react";

import { FlutterAppDevelopmentBanner } from "../../components/FlutterAppDevelopment/FlutterAppDevelopmentBanner/FlutterAppDevelopmentBanner";
import { FlutterServices } from "../../components/FlutterAppDevelopment/FlutterServices/FlutterServices";
import { WhyFlutter } from "../../components/FlutterAppDevelopment/WhyFlutter/WhyFlutter";
import { FlutterCrossPlatform } from "../../components/FlutterAppDevelopment/FlutterCrossPlatform/FlutterCrossPlatform";
import { FlutterAppDevelopmentDreamProject } from "../../components/FlutterAppDevelopment/FlutterAppDevelopmentDreamProject/FlutterAppDevelopmentDreamProject";
import { FluterDevelopmentExpertise } from "../../components/FlutterAppDevelopment/FluterDevelopmentExpertise/FluterDevelopmentExpertise";

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

export default function FlutterAppDevelopment() {
  return (

    <>
    <Head>
    <title>Flutter Mobile App Development Company | Bottom Funnel, Cross Platform Application Development </title>
     <meta
       name="description"
       content="services for all hybrid platforms with optimum quality standards. We develop mobile Apps using the latest technologies like a flutter, kotlin, designs, and frameworks by leveraging the experience or expertise of experts."
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
      <FlutterAppDevelopmentBanner />
      <FlutterServices />
      <WhyFlutter />
      
      <FlutterCrossPlatform />
      <FlutterAppDevelopmentDreamProject />
      <FluterDevelopmentExpertise />

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
