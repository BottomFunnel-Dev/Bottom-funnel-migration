import React from "react";

import { CarRentalHeader } from "../../components/Car-Rental-page/CarRentalHeader";
import { FeaturesComp } from "../../components/Car-Rental-page/FeaturesComp";
import { GreyBoxComponent } from "../../components/Car-Rental-page/GreyBoxComponent";
import { RenterAppComp } from "../../components/Car-Rental-page/RenterAppComp";
import { AdminPannelComp } from "../../components/Car-Rental-page/AdminPannelComp";
import { CustomerAppComp } from "../../components/Car-Rental-page/CustomerAppComp";
import { ChooseUsComp } from "../../components/Car-Rental-page/ChooseUsComp";
import { CarRentalFooter } from "../../components/Car-Rental-page/CarRentalFooter";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function CarRentals() {
  return (
    <div>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: true,
        }}
      />
      <CarRentalHeader />
      <FeaturesComp />
      <GreyBoxComponent />
      <RenterAppComp />
      <AdminPannelComp />
      <CustomerAppComp />
      <ChooseUsComp />
      <CarRentalFooter />

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
