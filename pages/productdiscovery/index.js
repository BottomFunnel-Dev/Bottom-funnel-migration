import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { BenifitsofProduct } from "../../components/ProductDiscovery/BenifitsofProduct/BenifitsofProduct";
import { DreamProject } from "../../components/ProductDiscovery/DreamProject/DreamProject";
import { PilotStudy } from "../../components/ProductDiscovery/PilotStudy/PilotStudy";

import { ProductDiscoveryBanner } from "../../components/ProductDiscovery/ProductDiscoveryBanner/ProductDiscoveryBanner";
import { ProductEmpathy } from "../../components/ProductDiscovery/ProductEmpathy/ProductEmpathy";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." },
);

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
