import React from "react";

import { OnlinePaymentAppSolutionBanner } from "../../components/OnlinePaymentAppSolution/OnlinePaymentAppSolutionBanner";
import { OnlinePaymentExclusive } from "../../components/OnlinePaymentAppSolution/OnlinePaymentExclusive";
import { OnlinePaymentApplications } from "../../components/OnlinePaymentAppSolution/OnlinePaymentApplications";
import { OnlinePaymentAdminPannel } from "../../components/OnlinePaymentAppSolution/OnlinePaymentAdminPannel";
import { OnlinePMobileBrowser } from "../../components/OnlinePaymentAppSolution/OnlinePMobileBrowser";
import { OnlinePaymentWhyChoose } from "../../components/OnlinePaymentAppSolution/OnlinePaymentWhyChoose";

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

export default function OnlinePaymentApplication() {
  return (
    <div>
      <Head>
        <title>
          Online Payment Web and App Development Company | Bottom Funnel
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
