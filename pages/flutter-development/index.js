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
    <title>Flutter App Development Company | Bottom Funnel</title>
     <meta
       name="description"
       content="Looking for top-notch flutter app development 
       services? Our team offers comprehensive and 
       thorough solutions. Read on to know about our 
       offerings."
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
