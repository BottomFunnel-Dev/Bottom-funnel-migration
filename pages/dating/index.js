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
            color: "black",
            logo: true,
          }}
        />
        <Datingcontainer />
        <Trusted partnerLogo={datingLogo} />
        <Datingbrands />
        <Datingfeatures />
        <Customerapp customerData={datingCustomer} />
        <Adminpannel customerData={datingAdmin} />
        <Datingmobile customerData={datingService} />
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
