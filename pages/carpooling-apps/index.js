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
        <CarpoolingBanner />
        <Trusted partnerLogo={carpoolingLogo} />
        <CarpoolingRide />
        <CarpoolingSolutions />
        <Logiccustomer customerData={carpoolCustomer} />
        <Logicdrive driveData={carpoolDrive} />
        <Logisticadmin adminData={carpoolAdmin} />
        <CarpoolingAction />
        <CarpoolingWhy />
      </main>
    </>
  );
}
