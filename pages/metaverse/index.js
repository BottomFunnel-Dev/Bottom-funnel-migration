import React from 'react';

import { MetaverseBanner } from '../../components/MetaversePage/MetaverseBanner/MetaverseBanner';
import { MetaverseServices } from '../../components/MetaversePage/MetaverseServices/MetaverseServices';
import { MetaverseOffers } from '../../components/MetaversePage/MetaverseOffers/MetaverseOffers';
import { MetaverseMidBanner } from '../../components/MetaversePage/MetaverseMidBanner/MetaverseMidBanner';
import { MetaverseWhyBF } from '../../components/MetaversePage/MetaverseWhyBF/MetaverseWhyBF';
import { CustomWebForm } from '../../components/CustomisedWebPage/CustomWebForm/CustomWebForm';

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function MetaverseWebPage () {
  return (
    <div>
      <Navbar />
      <MetaverseBanner />
      <MetaverseServices />
      <MetaverseOffers />
      <MetaverseMidBanner />
      <MetaverseWhyBF />
      <CustomWebForm />
      
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
};