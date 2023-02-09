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
