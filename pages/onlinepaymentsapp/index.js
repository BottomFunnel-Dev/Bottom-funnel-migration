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
import Head from "next/head";

export default function OnlinePaymentApplication() {
  return (
    <div>
      <Head>
        <title>
          Online Payment Web App Development Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Are you looking for an online payment app development 
          company that can help you develop a web-based payment 
          solution that can be used by your customers? Look no 
          further!"
        />
      </Head>
      <main>
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}
        />
        <OnlinePaymentAppSolutionBanner />
        {/* <OnlinePaymentExclusive /> */}
        <OnlinePaymentApplications />
        <OnlinePaymentAdminPannel />
        <OnlinePMobileBrowser />
        {/* <OnlinePaymentWhyChoose /> */}

        {/* Other react required components  */}
        {/* <StoriesSection /> */}
        {/* <OndemandSection /> */}
        {/* <PortFolio />  */}
        {/* <PlanProject /> */}
        {/* <SeoblogSection /> */}
        {/* <Revamping /> */}
        {/* <TextDropdown /> */}
        {/* <ContectForm /> */}
        {/* <MainFooter /> */}
      </main>
    </div>
  );
}
