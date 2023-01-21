import React from "react";
import { AviationAirlines } from "../../components/Aviation/AviationAirlines";
import { AviationLetsDiscuss } from "../../components/Aviation/AviationLetsDiscuss";
import { AvitaionBanner } from "../../components/Aviation/AvitaionBanner";
import { AvitaionLowerBaner } from "../../components/Aviation/AvitaionLowerBaner";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";
    
export default function Aviation() {
  return (
    <div>
      <Navbar />
      <AvitaionBanner />
      <AviationAirlines />
      <AviationLetsDiscuss />
      <AvitaionLowerBaner />
      
      <StoriesSection />
      {/* <Industries /> */}
      <PlanProject />
      <OndemandSection />
      {/* <PortFolio /> */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
}
