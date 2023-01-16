import React from 'react';

import Beautycontainer from './Beautycontainer';
import { beautyLogo } from "../Data/SeopartnerData";
import Trusted from '../SEO/SeoTrustedCompanies/Seotrusted';
import Diversesection from './Diversesection';
import Disscus from './Disscus';
import Feature from './Feature';

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

export default function BeautyandCare () {
  return (
    <div>
        
      <Beautycontainer />
      <Trusted partnerLogo={beautyLogo} />
      <Diversesection />
      <Disscus />
      <Feature />

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