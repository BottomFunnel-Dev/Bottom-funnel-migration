import React from "react";

import { OnlinePaymentAppSolutionBanner } from "../../components/OnlinePaymentAppSolution/OnlinePaymentAppSolutionBanner";
import { OnlinePaymentExclusive } from "../../components/OnlinePaymentAppSolution/OnlinePaymentExclusive";
import { OnlinePaymentApplications } from "../../components/OnlinePaymentAppSolution/OnlinePaymentApplications";
import { OnlinePaymentAdminPannel } from "../../components/OnlinePaymentAppSolution/OnlinePaymentAdminPannel";
import { OnlinePMobileBrowser } from "../../components/OnlinePaymentAppSolution/OnlinePMobileBrowser";
import { OnlinePaymentWhyChoose } from "../../components/OnlinePaymentAppSolution/OnlinePaymentWhyChoose";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function OnlinePaymentApplication() {
  return (
    <div>
 <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <OnlinePaymentAppSolutionBanner />
      <OnlinePaymentExclusive />
      <OnlinePaymentApplications />
      <OnlinePaymentAdminPannel />
      <OnlinePMobileBrowser />
      <OnlinePaymentWhyChoose />
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
};
