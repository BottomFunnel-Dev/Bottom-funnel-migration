import React from "react";

import {
  wellnessPatient,
  wellnessAdmin,
  wellnessDoctor,
} from "../Data/panelsData";

import Wellnesscontainer from "./Wellnesscontainer";
import WellnessPatient from "./WellnessPatient/WellnessPatient";
import WellnessDoctor from "./WellnessDoctor/WellnessDoctor";
import WellnessAdmin from "./WellnessAdmin/WellnessAdmin";
import Wellnesshealthcare from "./Wellnesshealthcare";

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

export default function Wellness() {
  return (
    <div>
      <Wellnesscontainer />
      <WellnessPatient customerData={wellnessPatient} />
      <WellnessDoctor customerData={wellnessDoctor} />
      <WellnessAdmin customerData={wellnessAdmin} />
      <Wellnesshealthcare />

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
