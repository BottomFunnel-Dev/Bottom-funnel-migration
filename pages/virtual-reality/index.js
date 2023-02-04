import React from "react";

import { VRBanner } from "../../components/VRPage/VRBanner/VRBanner";
import { VRMidBanner } from "../../components/VRPage/VRMidBanner/VRMidBanner";
import { VRServices } from "../../components/VRPage/VRServices/VRServices";
import { VRwhyBF } from "../../components/VRPage/VRwhyBF/VRwhyBF";
import { VRSlider } from "../../components/VRPage/VRSlider/VRSlider";
import { VRForm } from "../../components/VRPage/VRForm/VRForm";

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

export default function VirtualReality() {
  return (
    <div>

      <Head>
        <title>Virtual Reality Services | Bottom Funnel</title>
        <meta
          name="description"
          content="Virtual reality development offers an exciting new 
          platform for businesses to engage with their 
          customers. Read on to learn about the advantages 
          of offering VRS"
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
      <VRBanner />
      <VRServices />
      <VRMidBanner />
      <VRwhyBF />
      <VRSlider />
      <VRForm />

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
      </main>

    </div>
  );
}
