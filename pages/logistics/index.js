import React from "react";

import Logisticcontainer from "../../components/Logistic/Logisticcontainer";
import { logisticsLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import Logictransport from "../../components/Logistic/Logictransport";
import Logisticwhy from "../../components/Logistic/Logisticwhy";

import {
  logisticsCustomer,
  logisticDrive,
  logisticAdmin,
} from "../../components/Data/panelsData";
import Logiccustomer from "../../components/Logistic/Logiccustomer";
import Logicdrive from "../../components/Logistic/Logicdrive";
import Logisticadmin from "../../components/Logistic/Logisticadmin";

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

export default function Logistics() {
  return (
    <div>
      <Head>
        <title>Logistics Web App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Do you need a Logistics web app solution? We can help! Our
          team of experts can develop a web app that meets all your 
         needs. From design to implementation, we take care of
          everything."
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
      <Logisticcontainer />
      <Trusted partnerLogo={logisticsLogo} />
      <Logictransport />
      <Logisticwhy />
      <Logiccustomer customerData={logisticsCustomer} />
      <Logicdrive driveData={logisticDrive} />
      <Logisticadmin adminData={logisticAdmin} />

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
