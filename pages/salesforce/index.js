import React from "react";
import styles from "./SalesforsePage.module.css";

import { SaleforceBanner } from "../../components/SalesforsePage/SaleforceBanner/SaleforceBanner";
import { SalesforceOffers } from "../../components/SalesforsePage/SalesforceOffers/SalesforceOffers";
import { SalesforceServices } from "../../components/SalesforsePage/SalesforceServices/SalesforceServices";
import { SalesforceProcess } from "../../components/SalesforsePage/SalesforceProcess/SalesforceProcess";
import { SalesforceMidBanner } from "../../components/SalesforsePage/SalesforceMidBanner/SalesforceMidBanner";
import { SalesforceWhyBF } from "../../components/SalesforsePage/SalesforceWhyBF/SalesforceWhyBF";
import { CustomWebForm } from "../../components/CustomisedWebPage/CustomWebForm/CustomWebForm";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function SalesForcePage() {
  return (
    <div className={styles.SalesforsePageContainer}>
      <Navbar />
      <SaleforceBanner />
      <SalesforceServices />
      <SalesforceOffers />
      <SalesforceProcess />
      <SalesforceMidBanner />
      <SalesforceWhyBF />
      <CustomWebForm />

      {/* Other react required components  */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio />  */}
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
}
