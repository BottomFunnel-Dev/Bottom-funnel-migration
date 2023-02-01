import React from "react";

import { KotlinBanner } from "../../components/KotlinAppDevelopment/KotlinBanner/KotlinBanner";
import { KotlinSolutions } from "../../components/KotlinAppDevelopment/KotlinSolutions/KotlinSolutions";
import { KotlinProject } from "../../components/KotlinAppDevelopment/KotlinProject/KotlinProject";
import { KotlinIntegration } from "../../components/KotlinAppDevelopment/KotlinIntegration/KotlinIntegration";
import { WhyChooseKotlin } from "../../components/KotlinAppDevelopment/WhyChooseKotlin/WhyChooseKotlin";
import { KotlinPartner } from "../../components/KotlinAppDevelopment/KotlinPartner/KotlinPartner";
import { KotlinCards } from "../../components/KotlinAppDevelopment/KotlinCards/KotlinCards";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function KotlinAppDevelopment() {
  return (
    <div>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
      <KotlinBanner />
      <KotlinSolutions />
      <KotlinProject />
      <KotlinIntegration />
      <WhyChooseKotlin />
      <KotlinPartner />
      <KotlinCards />

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
