import React from "react";

import {
    logisticsCustomer,
    plantBaseDriverData,
    plantBaseMeatAdmin,
} from "../../components/Data/plantbasedmeat";
import { PlantBasedMeatBanner } from "../../components/PlantBaseMeat/PlantBasedMeatBanner/PlantBasedMeatBanner";
import { ServicesWeOffer } from "../../components/PlantBaseMeat/ServicesWeOffer/ServicesWeOffer";
import PlantBaseDeliverApp from "../../components/PlantBaseMeat/PlantBaseDeliverApp/PlantBaseDeliverApp";
import PlantBaseDriverApp from "../../components/PlantBaseMeat/PlantBaseDriverApp/PlantBaseDriverApp";
import PlantBaseDeliverAdminPanel from "../../components/PlantBaseMeat/PlantBaseDeliverAdminPanel/PlantBaseDeliverAdminPanel";
import { PlantBasedGetSolution } from "../../components/PlantBaseMeat/PlantBasedGetSolution/PlantBasedGetSolution";
import { WhyChooseUs } from "../../components/PlantBaseMeat/WhyChooseUs/WhyChooseUs";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function PlantBasedMeat () {
  return (
    <div>
      <Navbar />
      <PlantBasedMeatBanner />
      <ServicesWeOffer />
      <PlantBaseDeliverApp consumerdata={logisticsCustomer} />
      <PlantBaseDriverApp driveData={plantBaseDriverData} />
      <PlantBaseDeliverAdminPanel plantBasedAdminData={plantBaseMeatAdmin} />
      <PlantBasedGetSolution />
      {/* <WhyChooseUs /> */}

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
};
