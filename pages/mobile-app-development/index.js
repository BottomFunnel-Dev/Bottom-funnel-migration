import React from "react";
import { MobileDevMainBanner } from "../../components/MobileDevelopment/MobileDevMainBanner/MobileDevMainBanner";
import { MobileDevMainCards } from "../../components/MobileDevelopment/MobileDevMainCards/MobileDevMainCards";
import { MobileDevMainProject } from "../../components/MobileDevelopment/MobileDevMainProject/MobileDevMainProject";
import { MobileDevMainServices } from "../../components/MobileDevelopment/MobileDevMainServices/MobileDevMainServices";
import { MobileDevMainSolutions } from "../../components/MobileDevelopment/MobileDevMainSolutions/MobileDevMainSolutions";
import { MobileDevMainWhyChoose } from "../../components/MobileDevelopment/MobileDevMainWhyChoose/MobileDevMainWhyChoose";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function MobileDevMain() {
  return (
    <div>
      <Navbar />
      <MobileDevMainBanner />
      <MobileDevMainServices />
      <MobileDevMainCards />
      <MobileDevMainSolutions />
      <MobileDevMainProject />
      <MobileDevMainWhyChoose />
      
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
    </div>
  );
}
