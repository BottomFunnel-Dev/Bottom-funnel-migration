import React from "react";

import Cannabisoverview from "./Cannabisoverview";
import Cannabissolution from "./Cannabissolution";
import { Cannabiscontainer } from "./Cannabiscontainer";
import { Cannabiscustomersection } from "./Cannabiscustomersection";
import { Cannabisadmin } from "./Cannabisadmin";
import { Cannabisdrive } from "./Cannabisdrive";

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

export default function Cannabis() {
  return (
    <div>
      <Cannabiscontainer />
      <Cannabissolution />
      <Cannabisoverview />
      <Cannabiscustomersection />
      <Cannabisadmin />
      <Cannabisdrive />

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
