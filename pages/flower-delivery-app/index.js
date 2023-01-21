import React from "react";

import FlowerDeliveryBanner from "../../components/FlowerDelivery/FlowerDeliveryBanner";
import { FlowerDeliveryService } from "../../components/FlowerDelivery/FlowerDeliveryService";
import FlowerDeliverySolution from "../../components/FlowerDelivery/FlowerDeliverySolution";
import FlowerDeliveryDriver from "../../components/FlowerDelivery/FlowerDeliveryDriver";
import FlowerDeliveryAdmin from "../../components/FlowerDelivery/FlowerDeliveryAdmin";
import FlowerDeliveryBannerbottom from "../../components/FlowerDelivery/FlowerDeliveryBannerbottom";
import FlowerDeliverylast from "../../components/FlowerDelivery/FlowerDeliverylast";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function FlowerDelivery() {
  return (
    <div>
      <Navbar />
      <FlowerDeliveryBanner />
      <FlowerDeliveryService />
      <FlowerDeliverySolution />
      <FlowerDeliveryDriver />
      {/* <FlowerDeliveryAdmin /> */}
      {/* <FlowerDeliveryBannerbottom /> */}
      {/* <FlowerDeliverylast /> */}

      {/* <StoriesSection /> */}
      {/* <Industries /> */}
      {/* <PlanProject /> */}
      {/* <OndemandSection /> */}
      {/* <PortFolio /> */}
      {/* <SeoblogSection /> */}
      {/* <Revamping /> */}
      {/* <TextDropdown /> */}
      {/* <ContectForm /> */}
      {/* <MainFooter /> */}
    </div>
  );
}
