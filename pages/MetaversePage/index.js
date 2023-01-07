import React from 'react'

import { MetaverseBanner } from './MetaverseBanner/MetaverseBanner';
import { MetaverseServices } from './MetaverseServices/MetaverseServices';
import { MetaverseOffers } from './MetaverseOffers/MetaverseOffers';
import { MetaverseMidBanner } from './MetaverseMidBanner/MetaverseMidBanner';
import { MetaverseWhyBF } from './MetaverseWhyBF/MetaverseWhyBF';
import { CustomWebForm } from '../CustomisedWebPage/CustomWebForm/CustomWebForm';

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

export default function MetaverseWebPage () {
  return (
    <div>
        
      <MetaverseBanner />
      <MetaverseServices />
      <MetaverseOffers />
      <MetaverseMidBanner />
      <MetaverseWhyBF />
      <CustomWebForm />
      
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