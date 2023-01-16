import React from "react";
import AgricultureBanner from "./AgricultureBanner/AgricultureBanner";
import { AgricultureSolutions } from "./AgricultureSolutions/AgricultureSolutions";

import {
  logisticsCustomer,
  agricultureConsumerApp,
  agricultureAdmin,
} from "../Data/agriculture.js";
import AgricultureCustomerApp from "./AgricultureCustomerApp/AgricultureCustomerApp";
import AgricultureConsumerApp from "./AgricultureConsumerApp/AgricultureConsumerApp";
import AgricultureAdminPanel from "./AgricultureAdminPanel/AgricultureAdminPanel";

import StoriesSection from "../CommonComponents/StoriesSection/StoriesSection";
import OndemandSection from "../CommonComponents/OnDemandSection/OndemandSection";
import PortFolio from "../CommonComponents/PortFolioSection/PortFolio";
// import PlanProject from "../CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../CommonComponents/SeoBlogs/Seoblogs";
import Revamping from "../CommonComponents/revamping/Revamping";
import { TextDropdown } from "../CommonComponents/faqSection/Faqs";
import ContectForm from "../CommonComponents/ContectForm/ContectForm";
import MainFooter from "../CommonComponents/FooterSection/MainFooter";
// import MainFooter from "../CommonComponents/FooterSection/MainFooter";
export default function Agriculture() {
  return (
    <div>
      <AgricultureBanner />

      <AgricultureSolutions />

      <AgricultureCustomerApp agricultureCustomerApp={logisticsCustomer} />
      <AgricultureConsumerApp driveData={agricultureConsumerApp} />
      <AgricultureAdminPanel plantBasedAdminData={agricultureAdmin} />

      {/* Other react required components 
      <StoriesSection />
      <OndemandSection />
      <PortFolio /> 
        <PlanProject /> 
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
     <MainFooter /> 
    */}
    </div>
  );
}
