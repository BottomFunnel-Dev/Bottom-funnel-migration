import React from "react";

import { IOTBanner } from "../../components/IOTPage/IOTBanner/IOTBanner";
import { IOTServices } from "../../components/IOTPage/IOTServices/IOTServices";
import { IOTMidBanner } from "../../components/IOTPage/IOTMidBanner/IOTMidBanner";
import { IOTwhyBF } from "../../components/IOTPage/IOTwhyBF/IOTwhyBF";
import { CustomWebForm } from "../../components/CustomisedWebPage/CustomWebForm/CustomWebForm";

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

export default function IOTDevelopment() {
  return (
    <div>
      <Head>
        <title>IOT App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Building an IOT web app can be a challenging task, but our team 
          of experts is here to help you get started and achieve success.
          Learn about our top IOT Web App Development services that 
          will make your life easier!"
        />
      </Head>
      <main>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <IOTBanner />
      <IOTServices />
      <IOTMidBanner />
      <IOTwhyBF />
      <CustomWebForm />

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
      </main>
    </div>
  );
}
