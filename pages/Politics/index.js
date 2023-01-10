import React from "react";
import Politicalparty from "./Politicalparty";
import Politicaltool from "./Politicaltool";
import Politicalvolunteer from "./Politicalvolunteer";
import Politicscontainer from "./Politicscontainer";
import Politicsmobile from "./Politicsmobile";
import Politicsreliable from "./Politicsreliable";
import Politictarget from "./Politictarget";

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

export default function Politics () {
 
  return (
    <div>
    
      <Politicscontainer />
      <Politicalparty />
      <Politicsmobile />
      <Politicalvolunteer />
      <Politicaltool />
      <Politicsreliable />
      <Politictarget />
     
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
