import React from 'react'

import { EventsBanner } from './EventsBanner';
import { EventsDevelopment } from './EventsDevelopment';
import { EventsDevservices } from './EventsDevservices';
import { EventsProvidedServices } from './EventsProvidedServices';
import { EventsFeatures } from './EventsFeatures';

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

const index = () => {
  return (
    <div>
        
      <EventsBanner />
      <EventsDevelopment />
      <EventsDevservices />
      <EventsProvidedServices />
      <EventsFeatures />

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
  )
}

export default index