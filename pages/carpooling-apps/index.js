import React from "react";

import { CarpoolingBanner } from "../../components/Carpooling/CarpoolingBanner";
import { carpoolingLogo } from "../../components/Data/SeopartnerData";
import {
  carpoolCustomer,
  carpoolAdmin,
  carpoolDrive,
} from "../../components/Data/panelsData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { CarpoolingRide } from "../../components/Carpooling/CarpoolingRide";
import { CarpoolingSolutions } from "../../components/Carpooling/CarpoolingSolutions";
import Logiccustomer from "../../components/Logistic/Logiccustomer";
import Logicdrive from "../../components/Logistic/Logicdrive";
import Logisticadmin from "../../components/Logistic/Logisticadmin";
import { CarpoolingAction } from "../../components/Carpooling/CarpoolingAction";
import { CarpoolingWhy } from "../../components/Carpooling/CarpoolingWhy";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." }
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." }
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." }
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." }
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." }
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." }
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." }
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." }
);
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

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
