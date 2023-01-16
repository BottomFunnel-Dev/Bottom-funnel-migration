import React from "react";
import styles from "./SalesforsePage.module.css"

import { SaleforceBanner } from "./SaleforceBanner/SaleforceBanner"
import { SalesforceOffers } from "./SalesforceOffers/SalesforceOffers";
import { SalesforceServices } from "./SalesforceServices/SalesforceServices";
import { SalesforceProcess } from "./SalesforceProcess/SalesforceProcess";
import { SalesforceMidBanner } from "./SalesforceMidBanner/SalesforceMidBanner";
import { SalesforceWhyBF } from "./SalesforceWhyBF/SalesforceWhyBF";
import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";

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

export default function SalesForcePage () {
  return (
    <div className={styles.SalesforsePageContainer}>
      <SaleforceBanner />
      <SalesforceServices />
      <SalesforceOffers />
      <SalesforceProcess />
      <SalesforceMidBanner />
      <SalesforceWhyBF />
      <CustomWebForm />
      
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
