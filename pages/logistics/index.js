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

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." },
);
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function Logistics() {
  return (
    <div>
      <Head>
        <title>Logistics Web and App Development Company| Bottom Funnel</title>
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
            color: "black",
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
