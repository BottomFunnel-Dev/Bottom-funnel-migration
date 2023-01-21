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

export default function Dating() {
  return (
    <div>
      <Navbar />
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
    </div>
  );
}
