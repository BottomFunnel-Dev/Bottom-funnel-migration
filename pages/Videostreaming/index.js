import React from 'react';

import Videostreamingcontainer from './Videostreamingcontainer';
import Trusted from '../SEO/SeoTrustedCompanies/Seotrusted';
import Services from './Services';
import Grow from './Grow';
import Featuressection from './Featuressection';
import { videostreamLogo } from "../Data/SeopartnerData";

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

export default function VideoStreaming () {
  return (
    <div>
        
      <Videostreamingcontainer />
      <Trusted partnerLogo={videostreamLogo} />
      <Services />
      <Grow />
      <Featuressection />
      
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