import React from 'react'

import OndemandHero from './OndemandHero';
import { homesolutionsLogo } from "../Data/SeopartnerData";
import Trusted from '../SEO/SeoTrustedCompanies/Seotrusted';
import OndemandQuote from './OndemandQuote';
import HomeServices from './HomeServices';
import ExclusiveFeature from './ExclusiveFeature';
import KeyFeatures from './KeyFeatures';

import StoriesSection from "../CommonComponents/StoriesSection/StoriesSection";
import { Industries } from "../CommonComponents/industries/Industries";
import PlanProject from "../CommonComponents/PlanProject/PlanProject";
import OndemandSection from "../CommonComponents/OnDemandSection/OndemandSection";
import PortFolio from "../CommonComponents/PortFolioSection/PortFolio";
import { SeoblogSection } from "../CommonComponents/SeoBlogs/Seoblogs";
import Revamping from "../CommonComponents/revamping/Revamping";
import { TextDropdown } from "../CommonComponents/faqSection/Faqs";
import ContectForm from "../CommonComponents/ContectForm/ContectForm";
import MainFooter from "../CommonComponents/FooterSection/MainFooter";

export default function OnDemandSection () {
  return (
    <div>
        
      <OndemandHero />
      <Trusted partnerLogo={homesolutionsLogo} />
      <OndemandQuote />
      <HomeServices />
      <ExclusiveFeature />
      <KeyFeatures />
      
      <StoriesSection />
      <Industries />
      {/* <PlanProject /> */}
      <OndemandSection />
      {/* <PortFolio /> */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      {/* <MainFooter /> */}
    </div>
  );
};