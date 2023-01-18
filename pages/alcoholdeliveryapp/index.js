import React from "react";

import { AlcoholBanner } from "../../components/alcohol-delivery/AlcoholBanner/AlcoholBanner";
import { alcoholLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { AlcoholBookCall } from "../../components/alcohol-delivery/AlcoholBookCall/AlcoholBookCall";
import { AlcoholSuggestions } from "../../components/alcohol-delivery/AlcoholSuggestions/AlcoholSuggestions";
import { AlcoholSolutions } from "../../components/alcohol-delivery/AlcoholSolutions/AlcoholSolutions";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function AlcoholDelivery() {
  return (
    <div>
      <Navbar />
      <AlcoholBanner />
      <Trusted partnerLogo={alcoholLogo} />
      <AlcoholBookCall />
      <AlcoholSuggestions />
      <AlcoholSolutions />

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
