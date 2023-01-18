import React from "react";
import { RealEstateBanner } from "../../components/RealEstate/RealEstateBanner";
import { RealEstateNextBanner } from "../../components/RealEstate/RealEstateNextBanner";
import { RealEstateSolution } from "../../components/RealEstate/RealEstateSolution";
import { RealEstateCustomer } from "../../components/RealEstate/RealEstateCustomer";
import { RealEstateAdminPannel } from "../../components/RealEstate/RealEstateAdminPannel";
import { RealEstateDriver } from "../../components/RealEstate/RealEstateDriver";
import { Realestatelowerbanner } from "../../components/RealEstate/Realestatelowerbanner";
import { Realestatewhychoose } from "../../components/RealEstate/Realestatewhychoose";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function RealEstate() {
  return (
    <div>
      <Navbar />
      <RealEstateBanner />
      <RealEstateNextBanner />
      <RealEstateSolution />
      <RealEstateCustomer />
      <RealEstateAdminPannel />
      <RealEstateDriver />
      <Realestatelowerbanner />
      <Realestatewhychoose />

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
}
