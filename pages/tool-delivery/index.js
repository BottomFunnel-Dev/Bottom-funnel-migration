import React from "react";

import TooDeliveryBanner from "../../components/ToolDeliveryApp/TooDeliveryBanner";
import ToolDeliveryService from "../../components/ToolDeliveryApp/ToolDeliveryService";
import ToolDeliverysneak from "../../components/ToolDeliveryApp/ToolDeliverysneak";
import ToolDeliveryCustomer from "../../components/ToolDeliveryApp/ToolDeliveryCustomer";
import ToolDeliveryDriver from "../../components/ToolDeliveryApp/ToolDeliveryDriver";
import { ToolDeliveryAdmin } from "../../components/ToolDeliveryApp/ToolDeliveryAdmin";
import ToolDeliveryLowerBanner from "../../components/ToolDeliveryApp/ToolDeliveryLowerBanner";
import ToolDeliveryFooter from "../../components/ToolDeliveryApp/ToolDeliveryFooter";

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

export default function ToolDeliveryApp() {
  return (
    <>
      <Head>
        <title>
          Tool Delivery Web and App Development Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Learn about our various Tool Delivery Web and App solutions that can 
      help you streamline your workflow and improve efficiency within 
      your organization. Get in touch with us today to learn more!"
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
        <TooDeliveryBanner />
        <ToolDeliveryService />
        <ToolDeliverysneak />
        <ToolDeliveryCustomer />
        <ToolDeliveryDriver />
        <ToolDeliveryAdmin />
        <ToolDeliveryLowerBanner />
        <ToolDeliveryFooter />

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
    </>
  );
}
