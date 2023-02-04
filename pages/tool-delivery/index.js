import React from "react";

import TooDeliveryBanner from "../../components/ToolDeliveryApp/TooDeliveryBanner";
import ToolDeliveryService from "../../components/ToolDeliveryApp/ToolDeliveryService";
import ToolDeliverysneak from "../../components/ToolDeliveryApp/ToolDeliverysneak";
import ToolDeliveryCustomer from "../../components/ToolDeliveryApp/ToolDeliveryCustomer";
import ToolDeliveryDriver from "../../components/ToolDeliveryApp/ToolDeliveryDriver";
import { ToolDeliveryAdmin } from "../../components/ToolDeliveryApp/ToolDeliveryAdmin";
import ToolDeliveryLowerBanner from "../../components/ToolDeliveryApp/ToolDeliveryLowerBanner";
import ToolDeliveryFooter from "../../components/ToolDeliveryApp/ToolDeliveryFooter";

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

export default function ToolDeliveryApp() {
  return (
    <div>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: true,
        }}
      />
      <TooDeliveryBanner />
      <ToolDeliveryService />
      <ToolDeliverysneak />
      <ToolDeliveryCustomer />
      <ToolDeliveryDriver />
      <ToolDeliveryAdmin />
      <ToolDeliveryLowerBanner />
      <ToolDeliveryFooter />

      <StoriesSection />
      {/* <Industries /> */}
      <PlanProject />
      <OndemandSection />
      {/* <PortFolio /> */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </main>
    </>
  );
}
