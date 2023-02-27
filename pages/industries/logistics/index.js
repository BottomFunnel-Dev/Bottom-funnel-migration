import React from "react";
import {
  logisticsCustomer,
  logisticDrive,
  logisticAdmin,
} from "../../../components/Data/panelsData";
import Head from "next/head";
import { logisticsLogo } from "../../../components/Data/SeopartnerData";
import dynamic from "next/dynamic";
import EducationWhyUS from "../../../components/Educationp/EducationWhyUS";

const Trusted = dynamic(
  () => import("../../../components/SEO/SeoTrustedCompanies/Seotrusted"),
  { loading: () => "loading..." },
);
const Logisticcontainer = dynamic(
  () => import("../../../components/Logistic/Logisticcontainer"),
  { loading: () => "loading..." },
);
const Logictransport = dynamic(
  () => import("../../../components/Logistic/Logictransport"),
  { loading: () => "loading..." },
);
const Logisticwhy = dynamic(
  () => import("../../../components/Logistic/Logisticwhy"),
  { loading: () => "loading..." },
);
const Logiccustomer = dynamic(
  () => import("../../../components/Logistic/Logiccustomer"),
  { loading: () => "loading..." },
);
const Logisticadmin = dynamic(
  () => import("../../../components/Logistic/Logisticadmin"),
  { loading: () => "loading..." },
);

const whyChooseUsData = {
  heading: "Why Choose Us",
  cardData: [
    {
      image: "/Images/Educationp/icons/circle.webp",
      title: "Agile Development Process",
      description: "",
    },
    {
      image: "/Images/Educationp/icons/files.webp",
      title: "Data Security and Protection",
      description: "",
    },
    {
      image: "/Images/Educationp/icons/support.webp",
      title: "Round the-clock support",
      description: "",
    },
    {
      image: "/Images/Educationp/icons/awards.webp",
      title: "Quality development",
      description: "",
    },
  ],
};

export default function Logistics() {
  return (
    <div>
      <Head>
        <title>Logistics Web and App Development Company| Bottom Funnel </title>
        <meta
          name="description"
          content="Do you need a Logistics web app solution? We can help! Our
          team of experts can develop a web app that meets all your 
         needs. From design to implementation, we take care of
          everything."
        />
      </Head>

      <main>
        <Logisticcontainer />
        <Trusted partnerLogo={logisticsLogo} />
        <Logictransport />
        <Logiccustomer customerData={logisticsCustomer} />
        <Logisticadmin adminData={logisticAdmin} />
        <Logiccustomer customerData={logisticDrive} />
        <Logisticwhy />
        <EducationWhyUS data={whyChooseUsData} />
      </main>
    </div>
  );
}
