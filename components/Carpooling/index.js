import React from "react";

import { CarpoolingBanner } from "./CarpoolingBanner";
import { carpoolingLogo } from "../Data/SeopartnerData";
import {
  carpoolCustomer,
  carpoolAdmin,
  carpoolDrive,
} from "../Data/panelsData";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import { CarpoolingRide } from "./CarpoolingRide";
import { CarpoolingSolutions } from "./CarpoolingSolutions";
import Logiccustomer from "../Logistic/Logiccustomer";
import Logicdrive from "../Logistic/Logicdrive";
import Logisticadmin from "../Logistic/Logisticadmin";
import { CarpoolingAction } from "./CarpoolingAction";
import { CarpoolingWhy } from "./CarpoolingWhy";

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

export default function CarPooling() {
  return (
    <div>
      <CarpoolingBanner />
      <Trusted partnerLogo={carpoolingLogo} />
      <CarpoolingRide />
      <CarpoolingSolutions />
      <Logiccustomer customerData={carpoolCustomer} />
      <Logicdrive driveData={carpoolDrive} />
      <Logisticadmin adminData={carpoolAdmin} />
      <CarpoolingAction />
      <CarpoolingWhy />

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
