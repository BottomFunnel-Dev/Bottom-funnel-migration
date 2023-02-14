import React from "react";

import { OnlinePaymentAppSolutionBanner } from "../../components/OnlinePaymentAppSolution/OnlinePaymentAppSolutionBanner";
import { OnlinePaymentExclusive } from "../../components/OnlinePaymentAppSolution/OnlinePaymentExclusive";
import { OnlinePaymentApplications } from "../../components/OnlinePaymentAppSolution/OnlinePaymentApplications";
import { OnlinePaymentAdminPannel } from "../../components/OnlinePaymentAppSolution/OnlinePaymentAdminPannel";
import { OnlinePMobileBrowser } from "../../components/OnlinePaymentAppSolution/OnlinePMobileBrowser";
import { OnlinePaymentWhyChoose } from "../../components/OnlinePaymentAppSolution/OnlinePaymentWhyChoose";

import Head from "next/head";

export default function OnlinePaymentApplication() {
  return (
    <div>
      <Head>
        <title>
          Online Payment Web and App Development Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Are you looking for an online payment app development company that can help you develop a web-based payment 
          solution that can be used by your customers? Look no further!"
        />
      </Head>

      <main>
        <OnlinePaymentAppSolutionBanner />
        {/* <OnlinePaymentExclusive /> */}
        <OnlinePaymentApplications />
        <OnlinePaymentAdminPannel />
        <OnlinePMobileBrowser />
        {/* <OnlinePaymentWhyChoose /> */}
      </main>
    </div>
  );
}
