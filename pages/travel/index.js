import React from "react";
import TravelBrands from "../../components/Travel/TravelBrands";
import Travelcontainer from "../../components/Travel/Travelcontainer";
import Travelfeature from "../../components/Travel/Travelfeature";
import TravelFlight from "../../components/Travel/TravelFlight";
import Travelsolution from "../../components/Travel/Travelsolution";
import Travelstart from "../../components/Travel/Travelstart";
import Travelwhy from "../../components/Travel/Travelwhy";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function Travel() {
  return (
    <div>
      <Navbar />
      <Travelcontainer />
      <TravelBrands />
      <Travelfeature />
      <TravelFlight />
      <Travelsolution />
      <Travelwhy />
      <Travelstart />

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
