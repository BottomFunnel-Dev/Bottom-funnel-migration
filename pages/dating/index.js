import React from "react";

import Datingcontainer from "../../components/Dating/Datingcontainer";
import { datingLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
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
import Solutiondating from "../../components/Dating/Solutiondating";
import Datingstart from "../../components/Dating/Datingstart";
import DatingWhy from "../../components/Dating/DatingWhy";

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
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <Datingcontainer />
      <Trusted partnerLogo={datingLogo} />
      <Datingbrands />
      <Datingfeatures />
      <Customerapp customerData={datingCustomer} />
      <Adminpannel customerData={datingAdmin} />
      <Datingmobile customerData={datingService}/>
      {/* <Solutiondating /> */}
      <Datingstart />
      <DatingWhy />

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
    </div>
  );
}
