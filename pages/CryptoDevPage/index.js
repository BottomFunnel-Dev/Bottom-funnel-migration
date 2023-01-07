import React from "react";
import styles from "./CryptoDevPage.module.css";

import { CryptoDevBanner } from "./CryptoDevBanner/CryptoDevBanner";
import { CryptoDevcurrency } from "./CryptoDevcurrency/CryptoDevcurrency";
import { CryptoDevBenefit } from "./CryptoDevBenefit/CryptoDevBenefit";
import { CryptoDevApproach } from "./CryptoDevApproach/CryptoDevApproach";
import { CryptoDevService } from "./CryptoDevService/CryptoDevService";
import { CryptoDevWhyBF } from "./CryptoDevWhyBF/CryptoDevWhyBF";
import { CryptoDevSlider } from "./CryptoDevSlider/CryptoDevSlider";
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

export default function CryptoDevPage() {
  return (
    <div className={styles.CryptoDevPageContainer}>
      <CryptoDevBanner />
      <CryptoDevcurrency />
      <CryptoDevBenefit />
      <CryptoDevApproach />
      <CryptoDevService />
      <CryptoDevWhyBF />
      <CryptoDevSlider />
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
