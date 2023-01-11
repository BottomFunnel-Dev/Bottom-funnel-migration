import React from "react";

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

import TooDeliveryBanner from "./TooDeliveryBanner";
import ToolDeliveryService from "./ToolDeliveryService";
import ToolDeliverysneak from "./ToolDeliverysneak";
import ToolDeliveryCustomer from "./ToolDeliveryCustomer";
import ToolDeliveryDriver from "./ToolDeliveryDriver";
import { ToolDeliveryAdmin } from "./ToolDeliveryAdmin";
import ToolDeliveryLowerBanner from "./ToolDeliveryLowerBanner";
import ToolDeliveryFooter from "./ToolDeliveryFooter";

export default function ToolDeliveryApp ()  {
  return (
    <div>
      <TooDeliveryBanner/>
      <ToolDeliveryService />
      <ToolDeliverysneak />
      <ToolDeliveryCustomer />
      <ToolDeliveryDriver />
      <ToolDeliveryAdmin />
      <ToolDeliveryLowerBanner />
      <ToolDeliveryFooter />

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
