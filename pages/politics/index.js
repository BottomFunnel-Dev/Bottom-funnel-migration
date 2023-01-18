import React from "react";
import Politicalparty from "../../components/Politics/Politicalparty";
import Politicaltool from "../../components/Politics/Politicaltool";
import Politicalvolunteer from "../../components/Politics/Politicalvolunteer";
import Politicscontainer from "../../components/Politics/Politicscontainer";
import Politicsmobile from "../../components/Politics/Politicsmobile";
import Politicsreliable from "../../components/Politics/Politicsreliable";
import Politictarget from "../../components/Politics/Politictarget";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function Politics() {
  return (
    <div>
      <Navbar />
      <Politicscontainer />
      <Politicalparty />
      <Politicsmobile />
      <Politicalvolunteer />
      <Politicaltool />
      <Politicsreliable />
      <Politictarget />

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
