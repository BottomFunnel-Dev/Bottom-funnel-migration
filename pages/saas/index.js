import React from "react";

import { Saasbanner } from "../../components/SaasPage/Saasbanner/Saasbanner";
import { SaasExpetise } from "../../components/SaasPage/SaasExpetise/SaasExpetise";
import { SaasSuite } from "../../components/SaasPage/SaasSuite/SaasSuite";
import { SaasValuable } from "../../components/SaasPage/SaasValuable/SaasValuable";
import { SaasStrategy } from "../../components/SaasPage/SaasStrategy/SaasStrategy";

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

export default function SaasPage() {
  return (
    <div>
      <Head>
        <title>SaasPage Web App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a comprehensive and affordable SaaS web 
          app solution?  We offer a range of innovative and 
          cost-effective solutions that will suit your needs perfectly. 
          Give us a try today!"
        />
      </Head>
      <main>
      <Navbar />
      <Saasbanner />
      <SaasExpetise />
      <SaasSuite />
      <SaasValuable />
      <SaasStrategy />

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
