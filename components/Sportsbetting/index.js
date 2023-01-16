import React from 'react';

import { SportsBanner } from './SportsBanner';
import { sportsBettingLogo } from "../Data/SeopartnerData";
import Trusted from '../SEO/SeoTrustedCompanies/Seotrusted';
import { SportsPanels } from "./SportsPanels";
import { BettingSpecial } from './BettingSpecial';
import { Bettingwhy } from './Bettingwhy';

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

export default function SportsBetting () {
  return (
    <div>
      <SportsBanner />
      <Trusted partnerLogo={sportsBettingLogo} />
      <SportsPanels />
      <BettingSpecial />
      <Bettingwhy />

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