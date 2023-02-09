import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { BenifitsofProduct } from "../../components/ProductDiscovery/BenifitsofProduct/BenifitsofProduct";
import { DreamProject } from "../../components/ProductDiscovery/DreamProject/DreamProject";
import { PilotStudy } from "../../components/ProductDiscovery/PilotStudy/PilotStudy";

import { ProductDiscoveryBanner } from "../../components/ProductDiscovery/ProductDiscoveryBanner/ProductDiscoveryBanner";
import { ProductEmpathy } from "../../components/ProductDiscovery/ProductEmpathy/ProductEmpathy";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";

export default function ProductDiscovery() {
  return (
    <div>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
      <ProductDiscoveryBanner />
      <PilotStudy />
      <ProductEmpathy />
      <DreamProject />
      <BenifitsofProduct />
      {/* Other react required components  */}
      <StoriesSection />
      <OndemandSection /> {/* <PortFolio />  */}
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
}
