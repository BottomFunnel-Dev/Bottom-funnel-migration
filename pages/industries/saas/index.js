import React from "react";

import { Saasbanner } from "../../../components/SaasPage/Saasbanner/Saasbanner";
import { SaasExpetise } from "../../../components/SaasPage/SaasExpetise/SaasExpetise";
import { SaasSuite } from "../../../components/SaasPage/SaasSuite/SaasSuite";
import { SaasValuable } from "../../../components/SaasPage/SaasValuable/SaasValuable";
import { SaasStrategy } from "../../../components/SaasPage/SaasStrategy/SaasStrategy";

import Head from "next/head";
import { SaasArrangeCall } from "../../../components/SaasPage/SaasArrangeCall/SaasArrangeCall";
import { SaasApplicationDevelopment } from "../../../components/SaasPage/SaasApplicationDevelopment/SaasApplicationDevelopment";
import { LeadingSaaSDevelopment } from "../../../components/SaasPage/LeadingSaaSDevelopment/LeadingSaaSDevelopment";
import { SaaSDevelopmentPlans } from "../../../components/SaasPage/SaaSDevelopmentPlans/SaaSDevelopmentPlans";
import { WhyBottomFunnel } from "../../../components/SaasPage/WhyBottomFunnel/WhyBottomFunnel";
import { SaaSAppServices } from "../../../components/SaasPage/SaaSAppServices/SaaSAppServices";

export default function SaasPage() {
  return (
    <div>
      <Head>
        <title>Saas Web and App Development Comapany | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a comprehensive and affordable SaaS web 
          app solution?  We offer a range of innovative and 
          cost-effective solutions that will suit your needs perfectly. 
          Give us a try today!"
        />
      </Head>

      <main>
        <Saasbanner/>
        <SaaSAppServices/>
        <SaasArrangeCall/>
        <SaasApplicationDevelopment/>
        <LeadingSaaSDevelopment/>
        <SaaSDevelopmentPlans/>
        <WhyBottomFunnel/>

        {/* <SaasExpetise />
        <SaasSuite />
        <SaasValuable />
        <SaasStrategy /> */}
      </main>
    </div>
  );
}
