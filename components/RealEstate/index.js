import React from "react";
import { RealEstateBanner } from "./RealEstateBanner";
import { RealEstateNextBanner } from "./RealEstateNextBanner";
import { RealEstateSolution } from "./RealEstateSolution";
import { RealEstateCustomer } from "./RealEstateCustomer";
import { RealEstateAdminPannel } from "./RealEstateAdminPannel";
import { RealEstateDriver } from "./RealEstateDriver";
import { Realestatelowerbanner } from "./Realestatelowerbanner";
import { Realestatewhychoose } from "./Realestatewhychoose";

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

export default function RealEstate() {
  return (
    <div>
      <RealEstateBanner />
      <RealEstateNextBanner />
      <RealEstateSolution />
      <RealEstateCustomer />
      <RealEstateAdminPannel />
      <RealEstateDriver />
      <Realestatelowerbanner />
      <Realestatewhychoose />

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
