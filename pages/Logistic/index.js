import React from "react";

import Logisticcontainer from "./Logisticcontainer";
import { logisticsLogo } from "../Data/SeopartnerData";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import Logictransport from "./Logictransport";
import Logisticwhy from "./Logisticwhy";

import {
  logisticsCustomer,
  logisticDrive,
  logisticAdmin,
} from "../Data/panelsData";
import Logiccustomer from "./Logiccustomer";
import Logicdrive from "./Logicdrive";
import Logisticadmin from "./Logisticadmin";

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

export default function Logistics() {
  return (
    <div>
      <Logisticcontainer />
      <Trusted partnerLogo={logisticsLogo} />
      <Logictransport />
      <Logisticwhy />
      <Logiccustomer customerData={logisticsCustomer} />
      <Logicdrive driveData={logisticDrive} />
      <Logisticadmin adminData={logisticAdmin} />

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
