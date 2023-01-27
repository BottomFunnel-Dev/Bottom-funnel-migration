import React from "react";
import styles from "./CryptoDevPage.module.css";

import { CryptoDevBanner } from "../../components/CryptoDevPage/CryptoDevBanner/CryptoDevBanner";
import { CryptoDevcurrency } from "../../components/CryptoDevPage/CryptoDevcurrency/CryptoDevcurrency";
import { CryptoDevBenefit } from "../../components/CryptoDevPage/CryptoDevBenefit/CryptoDevBenefit";
import { CryptoDevApproach } from "../../components/CryptoDevPage/CryptoDevApproach/CryptoDevApproach";
import { CryptoDevService } from "../../components/CryptoDevPage/CryptoDevService/CryptoDevService";
import { CryptoDevWhyBF } from "../../components/CryptoDevPage/CryptoDevWhyBF/CryptoDevWhyBF";
import { CryptoDevSlider } from "../../components/CryptoDevPage/CryptoDevSlider/CryptoDevSlider";
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

export default function CryptoDevPage() {
  return (
    <div className={styles.CryptoDevPageContainer}>
<Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
       <CryptoDevBanner />
        <CryptoDevcurrency />
       <CryptoDevBenefit />
      <CryptoDevApproach />
        <CryptoDevService />
     <CryptoDevWhyBF />
      <CryptoDevSlider />
      <CustomWebForm />

      {/* Other react required components  */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio /> */}
      <PlanProject /> 
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
      
    </div>
  );
};
