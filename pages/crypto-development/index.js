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
import Head from "next/head";

export default function CryptoDevPage() {
  return (
    <div className={styles.CryptoDevPageContainer}>
      
      <Head>
        <title>Crypto Currency Service Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Interested in getting involved in the fast-growing 
          world of cryptocurrency? Our team of experienced 
          professionals offers comprehensive cryptocurrency 
          development services. Check them out!"
        />
      </Head>
      <main>
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
       {/* <CryptoDevWhyBF />
      <CryptoDevSlider />
      <CustomWebForm />

      {/* Other react required components  
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio /> 
      <PlanProject /> 
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
       */}
       </main>
    </div>
  );
};
