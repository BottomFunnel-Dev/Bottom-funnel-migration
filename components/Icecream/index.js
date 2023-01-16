import React from "react";

import { IceCreamAdminPannel } from "./IceCreamAdminPannel";
import { IcecreamBanner } from "./IcecreamBanner";
import { IcecreamCSolution } from "./IcecreamCSolution";
import { IcecreamCustomerApp } from "./IcecreamCustomerApp";
import { IceCreamDriverApp } from "./IceCreamDriverApp";

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

export default function Icecream() {
  return (
    <div>
      <IcecreamBanner />
      <IcecreamCSolution />
      <IcecreamCustomerApp />
      <IceCreamAdminPannel />
      <IceCreamDriverApp />

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
}
