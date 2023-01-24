import React from "react";
import { IonicAppBanner } from "../../components/IonicAppDevelopment/IonicAppBanner/IonicAppBanner";
import { IonicBottomFunnel } from "../../components/IonicAppDevelopment/IonicBottomFunnel/IonicBottomFunnel";
import { IonicServices } from "../../components/IonicAppDevelopment/IonicServices/IonicServices";
import { WhyChooseIonic } from "../../components/IonicAppDevelopment/WhyChooseIonic/WhyChooseIonic";
import { IonicCrossPlatform } from "../../components/IonicAppDevelopment/IonicCrossPlatform/IonicCrossPlatform";
import { WhyChooseIonicBottomFunnel } from "../../components/IonicAppDevelopment/WhyChooseIonicBottomFunnel/WhyChooseIonicBottomFunnel";
import { IonicProject } from "../../components/IonicAppDevelopment/IonicProject/IonicProject";
import { IonicDevelopmentExpertise } from "../../components/IonicAppDevelopment/IonicDevelopmentExpertise/IonicDevelopmentExpertise";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function IonicAppDevelopment() {
  return (
    <div>
<Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <IonicAppBanner />
      <IonicBottomFunnel />
      <IonicServices />
      <WhyChooseIonic />
      <IonicCrossPlatform />
      <WhyChooseIonicBottomFunnel />
      <IonicProject />
      <IonicDevelopmentExpertise />

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
    </div>
  );
}
