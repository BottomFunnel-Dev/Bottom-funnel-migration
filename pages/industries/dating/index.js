import React from "react";
import {
  datingCustomer,
  datingAdmin,
  datingService,
} from "../../../components/Data/panelsData";
import Head from "next/head";
import dynamic from "next/dynamic";
// import { datingLogo } from "../../components/Data/SeopartnerData";

// const Trusted = dynamic(() => import("../../components/SEO/SeoTrustedCompanies/Seotrusted"), {loading: () => "loading..."});
const Datingcontainer = dynamic(
  () => import("../../../components/Dating/Datingcontainer"),
  { loading: () => "loading..." },
);
const Datingbrands = dynamic(
  () => import("../../../components/Dating/Datingbrands"),
  { loading: () => "loading..." },
);
const Datingfeatures = dynamic(
  () => import("../../../components/Dating/Datingfeatures"),
  { loading: () => "loading..." },
);
const Customerapp = dynamic(
  () => import("../../../components/Dating/Customerapp"),
  { loading: () => "loading..." },
);
const Adminpannel = dynamic(
  () => import("../../../components/Dating/Adminpannel"),
  { loading: () => "loading..." },
);
const Datingmobile = dynamic(
  () => import("../../../components/Dating/Datingmobile"),
  { loading: () => "loading..." },
);
// const Solutiondating = dynamic(() => import("../../components/Dating/Solutiondating"), {loading: () => "loading..."});
const Datingstart = dynamic(
  () => import("../../../components/Dating/Datingstart"),
  { loading: () => "loading..." },
);
const DatingWhy = dynamic(
  () => import("../../../components/Dating/DatingWhy"),
  {
    loading: () => "loading...",
  },
);

export default function Dating() {
  return (
    <div>
      <Head>
        <title>Dating Web App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a dating web app development company that 
          can help you build the perfect dating web app for your needs? 
          Look no further than our team of experts!"
        />
      </Head>
      <main>
        <Datingcontainer />
        {/* <Trusted partnerLogo={datingLogo} /> */}
        <Datingbrands />
        <Datingfeatures />
        <Customerapp customerData={datingCustomer} />
        <Adminpannel customerData={datingAdmin} />
        <Datingmobile customerData={datingService} />
        {/* <Solutiondating /> */}
        <Datingstart />
        <DatingWhy />
      </main>
    </div>
  );
}
