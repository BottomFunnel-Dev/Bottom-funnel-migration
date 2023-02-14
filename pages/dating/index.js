import React from "react";

import Datingcontainer from "../../components/Dating/Datingcontainer";
// import { datingLogo } from "../../components/Data/SeopartnerData";
// import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import Datingbrands from "../../components/Dating/Datingbrands";
import Datingfeatures from "../../components/Dating/Datingfeatures";

import {
  datingCustomer,
  datingAdmin,
  datingService,
} from "../../components/Data/panelsData";

import Customerapp from "../../components/Dating/Customerapp";
import Adminpannel from "../../components/Dating/Adminpannel";
import Datingmobile from "../../components/Dating/Datingmobile";
// import Solutiondating from "../../components/Dating/Solutiondating";
import Datingstart from "../../components/Dating/Datingstart";
import DatingWhy from "../../components/Dating/DatingWhy";

import Head from "next/head";

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
