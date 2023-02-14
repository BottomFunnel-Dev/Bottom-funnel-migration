import React from "react";
import {
  carpoolCustomer,
  carpoolAdmin,
  carpoolDrive,
} from "../../components/Data/panelsData";
import { carpoolingLogo } from "../../components/Data/SeopartnerData";
import dynamic from "next/dynamic";
import Head from "next/head";

// ------------------------------------------------------------------------
const CarpoolingBanner = dynamic(
  () => import("../../components/Carpooling/CarpoolingBanner"),
  { loading: () => "loading..." },
);
const CarpoolingRide = dynamic(
  () => import("../../components/Carpooling/CarpoolingRide"),
  { loading: () => "loading..." },
);
const CarpoolingSolutions = dynamic(
  () => import("../../components/Carpooling/CarpoolingSolutions"),
  { loading: () => "loading..." },
);
const CarpoolingAction = dynamic(
  () => import("../../components/Carpooling/CarpoolingAction"),
  { loading: () => "loading..." },
);
const CarpoolingWhy = dynamic(
  () => import("../../components/Carpooling/CarpoolingWhy"),
  { loading: () => "loading..." },
);
const Trusted = dynamic(
  () => import("../../components/SEO/SeoTrustedCompanies/Seotrusted"),
  { loading: () => "loading..." },
);
const Logiccustomer = dynamic(
  () => import("../../components/Logistic/Logiccustomer"),
  { loading: () => "loading..." },
);
const Logicdrive = dynamic(
  () => import("../../components/Logistic/Logicdrive"),
  { loading: () => "loading..." },
);
const Logisticadmin = dynamic(
  () => import("../../components/Logistic/Logisticadmin"),
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
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  loading: () => "loading...",
  ssr: false,
});

// -----------------------------------------------------------
export default function CarPooling() {
  return (
    <>
      <Head>
        <title> Carpooling Web App Development Company | Bottom Funnel </title>
        <meta
          name="description"
          content="Want to know more about carpooling web app development? 
        Check out our website today, where you'll find useful information 
        on the subject, as well as helpful tips and advice on how to get 
        started."
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
        <CarpoolingBanner />
        <Trusted partnerLogo={carpoolingLogo} />
        <CarpoolingRide />
        <CarpoolingSolutions />
        <Logiccustomer customerData={carpoolCustomer} />
        <Logicdrive driveData={carpoolDrive} />
        <Logisticadmin adminData={carpoolAdmin} />
        <CarpoolingAction />
        <CarpoolingWhy />

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
