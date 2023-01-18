import React from "react";

import {
  wellnessPatient,
  wellnessAdmin,
  wellnessDoctor,
} from "../../components/Data/panelsData";

import Wellnesscontainer from "../../components/Wellness/Wellnesscontainer";
import WellnessPatient from "../../components/Wellness/WellnessPatient/WellnessPatient";
import WellnessDoctor from "../../components/Wellness/WellnessDoctor/WellnessDoctor";
import WellnessAdmin from "../../components/Wellness/WellnessAdmin/WellnessAdmin";
import Wellnesshealthcare from "../../components/Wellness/Wellnesshealthcare";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function Wellness() {
  return (
    <div>
      <Navbar />
      <Wellnesscontainer />
      <WellnessPatient customerData={wellnessPatient} />
      <WellnessDoctor customerData={wellnessDoctor} />
      <WellnessAdmin customerData={wellnessAdmin} />
      <Wellnesshealthcare />

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
