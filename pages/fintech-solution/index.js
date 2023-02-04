import React from "react";

import { FinTechSolutionBanner } from "../../components/FintexhSolution/FinTechSolutionBanner";
import { FintechExclusive } from "../../components/FintexhSolution/FintechExclusive";
import { FintechCustomerApp } from "../../components/FintexhSolution/FintechCustomerApp";
import { FintechAdminpannel } from "../../components/FintexhSolution/FintechAdminpannel";
import { FintechDriverApp } from "../../components/FintexhSolution/FintechDriverApp";
import { FintechWhyChooseUs } from "../../components/FintexhSolution/FintechWhyChooseUs";

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

export default function FintechSolutions() {
  return (
    <div>

      <Head>
        <title>Fintech Solution App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you in need of a Fintech Solution that can improve the 
          performance of your business? We here at our development
           company specialize in developing such solutions. So, if 
          you're looking for a top-notch Fintech Solution, reach out 
          to us today!"
        />
      </Head>
      <main>

      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: true,
        }}
      />
      <FinTechSolutionBanner />
      <FintechExclusive />
      <FintechCustomerApp />
      <FintechAdminpannel />
      <FintechDriverApp />
      <FintechWhyChooseUs />

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

      </main>
    </div>
  );
}
