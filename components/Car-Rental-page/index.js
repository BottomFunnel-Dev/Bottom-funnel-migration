import React from "react";

import { CarRentalHeader } from "./CarRentalHeader";
import { FeaturesComp } from "./FeaturesComp";
import { GreyBoxComponent } from "./GreyBoxComponent";
import { RenterAppComp } from "./RenterAppComp";
import { AdminPannelComp } from "./AdminPannelComp";
import { CustomerAppComp } from "./CustomerAppComp";
import { ChooseUsComp } from "./ChooseUsComp";
import { CarRentalFooter } from "./CarRentalFooter";

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

export default function CarRentals() {
  return (
    <div>
      <CarRentalHeader />
      <FeaturesComp />
      <GreyBoxComponent />
      <RenterAppComp />
      <AdminPannelComp />
      <CustomerAppComp />
      <ChooseUsComp />
      <CarRentalFooter />

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
}
