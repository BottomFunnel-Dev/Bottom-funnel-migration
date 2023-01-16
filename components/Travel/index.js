import React from "react";
import TravelBrands from "./TravelBrands";
import Travelcontainer from "./Travelcontainer";
import Travelfeature from "./Travelfeature";
import TravelFlight from "./TravelFlight";
import Travelsolution from "./Travelsolution";
import Travelstart from "./Travelstart";
import Travelwhy from "./Travelwhy";

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

export default function Travel() {
  return (
    <div>
      <Travelcontainer />
      <TravelBrands />
      <Travelfeature />
      <TravelFlight />
      <Travelsolution />
      <Travelwhy />
      <Travelstart />

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
