import React from "react";

import { IceCreamAdminPannel } from "../../components/Icecream/IceCreamAdminPannel";
import { IcecreamBanner } from "../../components/Icecream/IcecreamBanner";
import { IcecreamCSolution } from "../../components/Icecream/IcecreamCSolution";
import { IcecreamCustomerApp } from "../../components/Icecream/IcecreamCustomerApp";
import { IceCreamDriverApp } from "../../components/Icecream/IceCreamDriverApp";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function Icecream() {
  return (
    <div>
      <Navbar />
      <IcecreamBanner />
      <IcecreamCSolution />
      <IcecreamCustomerApp />
      <IceCreamAdminPannel />
      <IceCreamDriverApp />

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
    </div>
  );
}
