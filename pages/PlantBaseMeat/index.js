import React from "react";

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

import {
    logisticsCustomer,
    plantBaseDriverData,
    plantBaseMeatAdmin,
} from "../Data/plantbasedmeat";
import { PlantBasedMeatBanner } from "./PlantBasedMeatBanner/PlantBasedMeatBanner";
import { ServicesWeOffer } from "./ServicesWeOffer/ServicesWeOffer";
import PlantBaseDeliverApp from "./PlantBaseDeliverApp/PlantBaseDeliverApp";
import PlantBaseDriverApp from "./PlantBaseDriverApp/PlantBaseDriverApp";
import PlantBaseDeliverAdminPanel from "./PlantBaseDeliverAdminPanel/PlantBaseDeliverAdminPanel";
import { PlantBasedGetSolution } from "./PlantBasedGetSolution/PlantBasedGetSolution";
import { WhyChooseUs } from "./WhyChooseUs/WhyChooseUs";

export default function PlantBasedMeat () {
  return (
    <div>
      <PlantBasedMeatBanner />
      <ServicesWeOffer />
      <PlantBaseDeliverApp consumerdata={logisticsCustomer} />
      <PlantBaseDriverApp driveData={plantBaseDriverData} />
      <PlantBaseDeliverAdminPanel plantBasedAdminData={plantBaseMeatAdmin} />
      <PlantBasedGetSolution />
      <WhyChooseUs />

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
