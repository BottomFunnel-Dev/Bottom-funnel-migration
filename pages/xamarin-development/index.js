import React from "react";

import { XamarinAppDevelopmentBanner } from "../../components/XamarinAppDevelopment/XamarinAppDevelopmentBanner/XamarinAppDevelopmentBanner";
import { XamarinMobileDevelopment } from "../../components/XamarinAppDevelopment/XamarinMobileDevelopment/XamarinMobileDevelopment";
import { XamarinSolutions } from "../../components/XamarinAppDevelopment/XamarinSolutions/XamarinSolutions";
import { WhyChooseXamarin } from "../../components/XamarinAppDevelopment/WhyChooseXamarin/WhyChooseXamarin";
import { XamarinDevelopers } from "../../components/XamarinAppDevelopment/XamarinDevelopers/XamarinDevelopers";
import { XamarinApproach } from "../../components/XamarinAppDevelopment/XamarinApproach/XamarinApproach";
import { XamarinDevelopmentExpertise } from "../../components/XamarinAppDevelopment/XamarinDevelopmentExpertise/XamarinDevelopmentExpertise";

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

export default function XamarinAppDevelopment() {
  return (
    <>
    <Head>
      <title>Xamarin App Development Company | Hire Xamarin Developers | BottomFunnel</title>
     <meta
       name="description"
       content="BottomFunnel is a leading Xamarin app development company. Not just developing, we transform ideas into a digital existence. Hire Xamarin app developers from us."
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
      <XamarinAppDevelopmentBanner />
      <XamarinMobileDevelopment />
      <XamarinSolutions />
      <WhyChooseXamarin />
      <XamarinDevelopers />
      <XamarinApproach />
      <XamarinDevelopmentExpertise />
      
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
