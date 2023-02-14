import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

const TooDeliveryBanner = dynamic(
  () => import("../../components/ToolDeliveryApp/TooDeliveryBanner"),
  { loading: () => "loading..." },
);
const ToolDeliveryService = dynamic(
  () => import("../../components/ToolDeliveryApp/ToolDeliveryService"),
  { loading: () => "loading..." },
);
const ToolDeliverysneak = dynamic(
  () => import("../../components/ToolDeliveryApp/ToolDeliverysneak"),
  { loading: () => "loading..." },
);
const ToolDeliveryCustomer = dynamic(
  () => import("../../components/ToolDeliveryApp/ToolDeliveryCustomer"),
  { loading: () => "loading..." },
);
const ToolDeliveryDriver = dynamic(
  () => import("../../components/ToolDeliveryApp/ToolDeliveryDriver"),
  { loading: () => "loading..." },
);
const ToolDeliveryAdmin = dynamic(
  () => import("../../components/ToolDeliveryApp/ToolDeliveryAdmin"),
  { loading: () => "loading..." },
);
const ToolDeliveryLowerBanner = dynamic(
  () => import("../../components/ToolDeliveryApp/ToolDeliveryLowerBanner"),
  { loading: () => "loading..." },
);
const ToolDeliveryFooter = dynamic(
  () => import("../../components/ToolDeliveryApp/ToolDeliveryFooter"),
  { loading: () => "loading..." },
);
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: () => "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: () => "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: () => "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: () => "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: () => "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: () => "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: () => "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: () => "loading..." },
);

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
            logo: false,
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
